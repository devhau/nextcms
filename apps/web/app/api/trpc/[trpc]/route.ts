import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@repo/trpc";
import { createTRPCContext } from "@repo/trpc";

const handler = (req: any, res: any) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ req, res }),
  });

export { handler as GET, handler as POST };
