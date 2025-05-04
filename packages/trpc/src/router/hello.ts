import { createTRPCRouter, publicProcedure } from "../context";

export const helloRouter = createTRPCRouter({
  getMessageHello: publicProcedure.query(({ ctx }) => {
    return "Hello from tRPC! This is a public procedure.";
  }),
});
