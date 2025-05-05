import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter, createTRPCContext } from "@repo/common/trpc";

import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: new Request(req.url as string, {
      method: req.method,
      headers: req.headers as HeadersInit,
      body: req.body as BodyInit,
    }),
    router: appRouter,
    createContext: () => createTRPCContext({ req, res }),
  });

export { handler as GET, handler as POST };
