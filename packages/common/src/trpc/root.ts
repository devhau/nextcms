import { helloRouter } from "./router/hello";
import { createTRPCRouter } from "./context";

export const appRouter = createTRPCRouter({
  hello: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
