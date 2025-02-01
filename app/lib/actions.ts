'use server';
 
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
 
 
const CLIENT_TOKEN = process.env.CIRCLE_TOKEN!;
const TOKEN_URL = 'https://app.circle.so/api/v1/headless/auth_token'; // Example OAuth endpoint

export async function clearCircleCookie () {
    const cookieStore = await cookies();
    cookieStore.delete('circleToken');

}

export async function getCirleJWT(email) {
    try {
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CLIENT_TOKEN}`, // Pass the token in the Authorization header
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
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

            const cookieStore = await cookies()
            // TODO update cookie to include refresh and expiration values
            // could be handle more gracefully but at the moment trying to be abundantly verbose
            cookieStore.set('circleToken', access_token)
            cookieStore.set('circleTokenExpiration', access_token_expires_at)

            return data;
        } else {
            // throw new Error(data?.message || 'Failed to fetch token');
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