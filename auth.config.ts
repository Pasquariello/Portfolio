import type { NextAuthConfig } from 'next-auth';
import getToken from './app/lib/circle';
import { cookies } from 'next/headers';
import { getCirleJWT } from './app/lib/actions';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      console.log('FROM CONFIG ')
      const isLoggedIn = !!auth?.user;
      console.log('AUTH', auth)
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn)  {     
          return true
        };
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user?.tokens) {
        token.circleToken = user.tokens.circleToken;
        // token.apiToken = user.tokens.apiToken;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.circleToken) {
        session.circleToken = token.circleToken;
      }
    //   if (token?.apiToken) {
    //     session.apiToken = token.apiToken;
    //   }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;