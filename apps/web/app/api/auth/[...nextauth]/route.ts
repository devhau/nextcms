import {authOptions} from "@repo/common/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// export const runtime = "edge";
