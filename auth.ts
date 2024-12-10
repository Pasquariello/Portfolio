import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers'


const CLIENT_TOKEN = process.env.CIRCLE_TOKEN!;
const TOKEN_URL = 'https://app.circle.so/api/v1/headless/auth_token'; // Example OAuth endpoint

 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

async function getCirleJWT() {
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

            // const cookieStore = await cookies()
 
            // // Get cookie
            // cookieStore.get('access_token')?.value
            // // // Set cookie
            // cookieStore.set('access_token', access_token)
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
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          const circleResponse = await getCirleJWT();
            console.log(circleResponse)
          if (!circleResponse?.access_token) {
            throw new Error('Failed to authenticate with Circle.so');
          }

          const circleToken = circleResponse.access_token;
          // here 
          const cookieStore = await cookies();
          cookieStore.set('circleToken', circleToken);

          console.log('HELLO FROM AUTH')
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
 
          if (passwordsMatch) {
            return {
                ...user,
                tokens: {
                  circleToken,
                },
              };
          };
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user?.tokens) {
//         token.circleToken = user.tokens.circleToken;
//         // token.apiToken = user.tokens.apiToken;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (token?.circleToken) {
//         session.circleToken = token.circleToken;
//       }
//     //   if (token?.apiToken) {
//     //     session.apiToken = token.apiToken;
//     //   }
//       return session;
//     },
//   }, 
});