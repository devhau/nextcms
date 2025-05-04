import { cache } from "react";
import { createCaller, createTRPCContext } from "@repo/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  return createTRPCContext({
    req: null,
    res: null,
  });
});

export const api = createCaller(createContext);
