// import { authOptions } from "@/lib/auth-options";
// import NextAuth from "next-auth/next";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };


// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { NextRequest } from "next/server";

interface RouteHandlerContext {
    params: { nextauth: string[] };
}

const handler = async (req: NextRequest, context: RouteHandlerContext) => {
    return NextAuth(req, context, authOptions);
};

export { handler as GET, handler as POST };