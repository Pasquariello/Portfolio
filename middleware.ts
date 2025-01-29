// // middleware.js
import { withMiddlewareAuthRequired, getSession} from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';
import { clearCircleCookie, getCirleJWT } from './app/lib/actions';


export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - about (about page)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - $ (homepage)
       * - about (about page)
       * - any (anypage)
       */   
    '/((?!api|about|any|login|_next/static|_next/image|favicon.ico|$).*)',
    ],
  };


  export default withMiddlewareAuthRequired(async function middleware(req ) {

    const res = NextResponse.next();
    const session = await getSession(req, res);
     // Check if the user is authenticated
    if (!session.user) {
        await clearCircleCookie();
        // Redirect to the login page if not authenticated
        // return NextResponse.redirect(new URL('/login', req.url));
    }

    const cirlceJWT = await req.cookies.get('circleToken')?.value; 
    
    if (!cirlceJWT) {
        // console.log('user?.email', session.user.email)
        await getCirleJWT(session.user.email);
    }

  return NextResponse.next();
})

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
// };