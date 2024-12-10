// // pages/api/auth/token.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { cookies } from 'next/headers'; // Using next/headers for accessing cookies
// import { getAccessToken } from './utils';


// // const CLIENT_ID = process.env.CLIENT_ID!;
// const CLIENT_TOKEN = process.env.CIRCLE_TOKEN!;
// const TOKEN_URL = 'https://app.circle.so/api/v1/headless/auth_token'; // Example OAuth endpoint

// const fetchData = async () => {
//     const response = await fetch(TOKEN_URL, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${CLIENT_TOKEN}`, // Pass the token in the Authorization header
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: 'taylor@cascadiansoftware.com',
//         }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//     //   const { access_token, refresh_token, expires_in } = data;

//         const {
//         access_token,
//         refresh_token,
//         access_token_expires_at,
//         refresh_token_expires_at,
//         // community_member_id,
//         // community_id
//         } = data
//         console.log('access_token', access_token)
//         return data;
//     } else {
//         throw new Error(data?.message || 'Failed to fetch token');
//     }
//   };

// const getToken = async () => {
//     // req: NextApiRequest, res: NextApiResponse
//   try {
//     // Request the token from a third-party service
//     const data = await fetchData();

//     const accessToken = data.access_token;
//     // console.log('accessToken', accessToken);
//     // Use `cookies()` from next/headers to set the cookie
//     // console.log('accessToken ====', accessToken)
//     (await cookies()).set('access_token', accessToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//       maxAge: 60 * 60 * 24 * 7, // 1 week expiry
//       path: '/',
//     //   sameSite: 'Strict',
//     });

//     // res.status(200).json({ message: 'Token retrieved and cookie set.' });
//   } catch (error) {
//     // res.status(500).json({ message: 'Error retrieving token', error });
//   }
// };

// export async function fetchCircle() {
//     const token = await getAccessToken();
//     console.log('TOKEN fetchCircle', token) 
    
//     if (token) {

        
//         try {
//           const response = await fetch("https://app.circle.so/api/v1/headless/auth_token", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"

//             },
//             body: JSON.stringify({
//                 email: "taylor@cascadiansoftware.com"
//             })
//           });
//           console.log('response')
//           return response.data;
//         //   setData(response.data);
//         } catch (error) {
//           console.error('Error fetching protected data:', error);
//         }
//       }
// };

// // fetch("https://app.circle.so/api/v1/headless/auth_token", {
// //     method: "POST",
// //     headers: {
// //      Authorization: auth,
// //       "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify({
// //       email: "taylor@cascadiansoftware.com"
// //     })
// //   })
// //   .then(response => response.json())  // Parse the JSON response
// //   .then(data => console.log('TAYLOR CIRCLE DATA', data))  // Log the response data to the console
// //   .catch(error => console.error("Error:", error));  // Log errors if they occur

  


// export default getToken;
