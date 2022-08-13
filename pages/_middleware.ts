import { NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']
// will run on signedin pages to protect these pages on the edge, if not sign in, redirect to homepage
export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
      return NextResponse.redirect('/signin')
    }
  }
}
