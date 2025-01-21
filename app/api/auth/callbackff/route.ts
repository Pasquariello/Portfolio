

// import { handleCallback } from "@auth0/nextjs-auth0";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     console.log('HELLO TAYLOR 2 callback ')
//     // Use handleLogin to perform login flow with Auth0
//     return handleCallback(req, {
//       authorizationParams: {
//         prompt: "login",
//       },
//       returnTo: "http://localhost:3000/dashboard", // Redirect to dashboard after login
//     });
//   } catch (error) {
//     console.error("Auth0 Callback Error:", error);
    
//     // Return a response with status 500 on error
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// export default handleAuth({
//   async login(req, res) {
//     console.log('HELLO TAYLOR')
//     await handleLogin(req, res, {
//       returnTo: "http://localhost:3000/dashboard",
//     });
//   },
// });


// export async function GET(req, res) {
//   try {
//     await handleCallback(req, res);
//   } catch (error) {
//     console.log("ERROR", error)
//     // res.status(error.status || 500).json({ error: error.message });
//   }
// }


import {
  handleAuth,
  handleCallback,
  AppRouteHandlerFnContext,
  Session,
  getSession,
  AfterCallbackAppRoute
} from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';

const afterCallback: AfterCallbackAppRoute = (req: NextRequest, session: Session) => {
  if (session.user) {
    return session;
  }
};

export const GET = handleAuth({
  async callback(req: NextRequest, ctx: AppRouteHandlerFnContext) {
    const res = (await handleCallback(req, ctx, { afterCallback })) as NextResponse;
    const session = await getSession(req, res);
    console.log("HEY TAYLOR ")
    if (session) {
      console.log("HEY TAYLOR THERES A SESSION")

      return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}/dashboard`, res);
    } else {
      console.log("HEY TAYLOR THERES NO SESSION")

      return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}/login`, res);
    }
  },
  onError(req: Request, error: Error) {
    console.log("HEY TAYLOR THERES AN ERROR")
    console.error(error);
  }
});