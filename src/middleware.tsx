// uncomment after intergrating with backend    

import { NextRequest, NextResponse } from 'next/server';
// import { jwtDecode } from 'jwt-decode';

// const roleRoutes = ['/admin', '/driver', '/advertise'];
// const protectedRoutes = [...roleRoutes];
// const authRoutes = [
//   '/auth/drivers/login',
//   '/auth/drivers/signin',
//   '/auth/book-ad/login',
//   '/auth/book-ad/signin'
// ];

// // Interface for the decoded token
// interface AuthUser {
//   id: string;
//   username: string;
//   email: string;
//   role: string;
// }

export async function middleware(request: NextRequest) {
    console.log(request);


    //   const pathname = request.nextUrl.pathname;
    //   const cookieStore = request.cookies;
    //   const accessToken = cookieStore.get('token'); // Retrieve token from cookie store

    //   const accessTokenValue = accessToken ? accessToken.value : null; // Token value
    //   const authUser: AuthUser | null = accessTokenValue ? jwtDecode<AuthUser>(accessTokenValue) : null;

    //   const isAuthPath = authRoutes.some(route => pathname.startsWith(route)); // Check if it's an auth path
    //   const isRolePath = roleRoutes.some(route => pathname.startsWith(route)); // Check if it's a role-specific path
    //   const isProtectedPath = protectedRoutes.some(route => pathname.startsWith(route)); // Check if path requires authentication

    //   if (authUser && authUser.role) {
    //     const userRolePath = `/${authUser.role.toLowerCase()}`;

    //     // Redirect to appropriate role path if trying to access a different role's path
    //     if (isRolePath && !pathname.startsWith(userRolePath)) {
    //       const currentPath = pathname.replace(new RegExp(roleRoutes.join("|")), userRolePath);
    //       if (roleRoutes.includes(currentPath)) {
    //         return NextResponse.redirect(new URL(currentPath, request.url));
    //       }
    //       return NextResponse.redirect(new URL('/', request.url));
    //     }

    //     // Redirect authenticated users away from auth pages
    //     if (isAuthPath) {
    //       return NextResponse.redirect(new URL(userRolePath, request.url));
    //     }
    //   } else if (isProtectedPath) {
    //     // Redirect unauthenticated users trying to access protected routes
    //     return NextResponse.redirect(new URL('/auth/drivers/login', request.url));
    //   }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
    ],
};
