'use server';

import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
import { sql } from '@vercel/postgres';


const CLIENT_TOKEN = process.env.CIRCLE_TOKEN!;
const TOKEN_URL = 'https://app.circle.so/api/v1/headless/auth_token'; // Example OAuth endpoint

export async function clearCircleCookie() {
    const cookieStore = await cookies();
    cookieStore.delete('circleToken');

}

export async function getCirleJWT(email) {
    console.log('Starting getCirleJWT for email:', email);

    try {
        // Continue with existing Circle token logic
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CLIENT_TOKEN}`,
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
                community_member_id,
                // community_id
            } = data;
            const cookieStore = await cookies()
            console.log('access_token_expires_at', access_token_expires_at)

            // Store user email and token in cookies instead of sessionStorage
            cookieStore.set('LOGGED_USER_COMMUNITY_MEMBER_ID', community_member_id)
            cookieStore.set('circleToken', access_token)
            cookieStore.set('circleTokenExpiration', access_token_expires_at)
            await syncMemberWithDatabase(community_member_id, email);

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

async function syncMemberWithDatabase(community_member_id: string, email: string) {
  console.log('community_member_id ---', community_member_id)
  console.log('email ---', email)

    // First check if user exists in members table
    const existingUser = await sql`
        SELECT * FROM members WHERE community_member_id = ${community_member_id}
    `;
    if (existingUser.rows.length === 0) {
        console.log('No existing member found, creating new member record');
        const member = await sql`
            INSERT INTO members (community_member_id, email)
            VALUES (${community_member_id}, ${email})
            RETURNING *
        `;
        console.log('New member inserted:', member.rows[0]);
    }
}

export async function updateUserInterests(communityMemberId: string, interestIds: number[]) {
    try {
        // First delete existing interests for this user
        await sql`
        DELETE FROM member_interests 
        WHERE community_member_id = ${communityMemberId}
      `;

        // Then insert new interests
        if (interestIds.length > 0) {
            const values = interestIds.map(id => [communityMemberId, id]);

            for (const [memberId, interestId] of values) {
                await sql`
                    INSERT INTO member_interests (community_member_id, interest_id)
                    VALUES (${memberId}, ${interestId})
                `;
            }
        }

        return { success: true };
    } catch (error) {
        console.error('Failed to update interests:', error);
        throw error;
    }
}