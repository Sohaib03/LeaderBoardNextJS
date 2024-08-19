// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
}

// Specify routes to apply this middleware
export const config = {
  matcher: ['/home'], // Apply to specific routes
};
