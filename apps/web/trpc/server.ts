import { cache } from "react";
import { createCaller, createTRPCContext } from "@repo/common/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async (_opts: { req: any; res: any }) => {
  return createTRPCContext(_opts);
});

export const api = createCaller(createContext);
