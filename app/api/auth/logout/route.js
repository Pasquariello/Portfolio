// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';
import { handleLogout } from '@auth0/nextjs-auth0';
import { cookies } from 'next/headers';

export async function GET(req, res) {
  try {
    // Clear custom cookies
    const cookieStore = await cookies();
    cookieStore.delete('circleToken'); 

    return handleLogout(req, res);
  } catch (error) {
    console.error("Auth0 Callback Error:", error);
    res.status(500).send("Internal Server Error");
  }
}

  