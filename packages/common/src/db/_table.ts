import { pgTableCreator } from "drizzle-orm/pg-core";

export const SchemaTable = pgTableCreator((name) => `${name}`);
