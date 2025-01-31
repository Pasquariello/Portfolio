'use server'

import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache';
import { getCirleJWT } from './actions';

// import { getSession } from '@auth0/nextjs-auth0';

// export async function login(params:type) {
  
// }


export async function fetchEvents(per_page = 10) {

  try {

    const cookieStore = await cookies()
    const token = await cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/community_events?per_page=${per_page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  
    const result = await response.json()
    return result;
  //   setData(response.data);
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
} 


export async function rsvpToEvent({space_id, event_id}) {

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/spaces/${space_id}/events/${event_id}/recurring_events/rsvp`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
    const result = await response.json()
    return result;
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
} 

export async function fooRSVP(event_id) {

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/events/${event_id}/event_attendees`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
    const result = await response.json()
    return {
      success: true,
      data: result
    }
  } catch (error) {
    return {
      success: false,
      data: null
    }
    console.error('Error fetching protected data:', error);
  }
} 

export async function fooRSVPLeave( event_id) {

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/events/${event_id}/event_attendees`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
    const result = await response.json()
    return {
      success: true,
      data: result
    }
  } catch (error) {
    return {
      success: false,
      data: null
    }
    console.error('Error fetching protected data:', error);
  }
} 

// /api/headless/v1/events/{event_id}/event_attendees


export async function searchMembers(name) {

  const body = name ? {
            filters: [
              {
              key: "name",
              filter_type: "contains", // todo: investigate other options
              value: name
              }
            ],
          }
        : null
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;

    const response = await fetch("https://app.circle.so/api/headless/v1/search/community_members", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    const result = await response.json()
    return result;
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
} 

export async function fetchSpaces() {
  try {

    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;
    const response = await fetch("https://app.circle.so/api/headless/v1/spaces", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  
    const result = await response.json()
    return result;
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
}


export async function fetchCoursesWithDetails() {
  const spaces = await fetchSpaces()

  const courses = spaces?.filter(space => space.space_type === 'course');

  const data = await Promise.all(
    courses.map(course => buildCourseDetails(course)) // fetchCourseSections
  ).then(results => results);

  return data;
}

export async function leaveSpace(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/spaces/${id}/leave`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  

    const result = await response.json();
    // revalidatePath('http://localhost:3000/dashboard/spaces');
    // revalidatePath('/api/spaces/[id]/leave');

    return result;
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
}

export async function joinSpace(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/spaces/${id}/join`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  

    const result = await response.json();
    // revalidatePath('/dashboard/spaces/[id]');
    return result;
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
}

// Generally inefficiant and could use a refactor
// MOVE TO UTILS?
async function buildCourseDetails(course) {

  const sections = await fetchCourseSections(course.id);

  const section_data = sections.map(section => {
    const completed_lessons_count = section.lessons.reduce((acc, current) => current.progress.status === 'completed' ? ++acc : acc, 0);
    
    const {id, name, lessons} = section;
    
    return {
      section_id: id, 
      section_name: name, 
      section_lesson_count: lessons.length,
      completed_lessons_count,
      section_percent_completed: completed_lessons_count / section.lessons.length
    }
  });


  const total_lessons = section_data.reduce((acc, current) => acc + current.section_lesson_count, 0 )
  const total_lessons_completed = section_data.reduce((acc, current) => acc + current.completed_lessons_count, 0 )
  
  const updatedCourseDetails = {
    id: course.id,
    name: course.name,
    course_sections: section_data,
    course_percent_completed: total_lessons_completed / total_lessons
  };

  return updatedCourseDetails;

}

 


export async function fetchCourseSections(course_id) {
  // const course_id = 1766130;

  try {

    const cookieStore = await cookies()
    const token = await cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/courses/${course_id}/sections`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  
    const result = await response.json();
    return result;
  //   setData(response.data);
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
} 


export async function fetchLessonData () {
  const course_id = 1766130;
  const lesson_id = 1735200

  try {

    const cookieStore = await cookies()
    const token = await cookieStore.get('circleToken')?.value;

    const response = await fetch(`https://app.circle.so/api/headless/v1/courses/${course_id}/lessons/${lesson_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  
    const result = await response.json();
    return result;
  //   setData(response.data);
  } catch (error) {
    console.error('Error fetching protected data:', error);
  }
} 


export async function fetchCardDataNEW() {
  const spaces = await fetchSpaces()
  const courses = spaces?.filter(space => space.space_type === 'course');

  const course_count = courses.length
}







////// Old examples from next demo
export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
