'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
 
// ...
 
const CLIENT_TOKEN = process.env.CIRCLE_TOKEN!;
const TOKEN_URL = 'https://app.circle.so/api/v1/headless/auth_token'; // Example OAuth endpoint

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const foo = await signIn('credentials', formData);
    console.log('FOO lib actions', foo);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
export async function fooFetch() {
    console.log('fooFetch')
    try {
        
        const response = await fetch('/pages/api/circle');
        console.log('response', response)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log('res', result)
        return result;
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
};



// export async function getPopularPosts() {
//     try {
//         const response = await fetch('https://app.circle.so/api/headless/v1/home?page=2&per_page=20&sort=popular', {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${token}`, // Pass the token in the Authorization header
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: 'taylor@cascadiansoftware.com',
//             }),
//         });
//         const data = await response.json();

//         if (response.ok) {
//             const {
//                 access_token,
//                 refresh_token,
//                 access_token_expires_at,
//                 refresh_token_expires_at,
//                 // community_member_id,
//                 // community_id
//             } = data
//             console.log('access_token', access_token)

//             const cookieStore = await cookies()
 
//             // // Get cookie
//             cookieStore.get('access_token')?.value
//             // // Set cookie
//             cookieStore.set('access_token', access_token)
//             return data;
//         } else {
//             throw new Error(data?.message || 'Failed to fetch token');
//         }
//     } catch (error) {
//         if (error instanceof AuthError) {
//             switch (error.type) {
//             case 'CredentialsSignin':
//                 return 'Invalid credentials.';
//             default:
//                 return 'Something went wrong.';
//             }
//         }
//     throw error;
//     }
// }



export async function getCirleJWT() {
    try {
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CLIENT_TOKEN}`, // Pass the token in the Authorization header
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'taylor@cascadiansoftware.com',
            }),
        });
        const data = await response.json();

        if (response.ok) {
            const {
                access_token,
                refresh_token,
                access_token_expires_at,
                refresh_token_expires_at,
                // community_member_id,
                // community_id
            } = data
            console.log('access_token', access_token)

            const cookieStore = await cookies()
 
            // // Get cookie
            cookieStore.get('access_token')?.value
            // // Set cookie
            cookieStore.set('access_token', access_token)
            return data;
        } else {
            throw new Error(data?.message || 'Failed to fetch token');
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
            case 'CredentialsSignin':
                return 'Invalid credentials.';
            default:
                return 'Something went wrong.';
            }
        }
    throw error;
    }
}