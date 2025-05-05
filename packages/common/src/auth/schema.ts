import { relations, sql } from "drizzle-orm";

import { SchemaTable } from "../db/_table";

export const users = SchemaTable("user", (columnTypes) => ({
  id: columnTypes.varchar("id", { length: 255 }).notNull().primaryKey(),
  name: columnTypes.varchar("name", { length: 255 }),
  email: columnTypes.varchar("email", { length: 255 }).notNull(),
  emailVerified: columnTypes
    .timestamp("emailVerified", {
      mode: "date",
    })
    .default(sql`CURRENT_TIMESTAMP(3)`),
  image: columnTypes.varchar("image", { length: 255 }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = SchemaTable("account", (columnTypes) => ({
  userId: columnTypes.varchar("userId", { length: 255 }).notNull(),
  type: columnTypes
    .varchar("type", { length: 255 })
    .$type<"oauth" | "oidc" | "email">()
    .notNull(),
  provider: columnTypes.varchar("provider", { length: 255 }).notNull(),
  providerAccountId: columnTypes
    .varchar("providerAccountId", { length: 255 })
    .notNull(),
  refresh_token: columnTypes.varchar("refresh_token", { length: 255 }),
  access_token: columnTypes.text("access_token"),
  expires_at: columnTypes.integer("expires_at"),
  token_type: columnTypes.varchar("token_type", { length: 255 }),
  scope: columnTypes.varchar("scope", { length: 255 }),
  id_token: columnTypes.text("id_token"),
  session_state: columnTypes.varchar("session_state", { length: 255 }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = SchemaTable("session", (columnTypes) => ({
  sessionToken: columnTypes
    .varchar("sessionToken", { length: 255 })
    .notNull()
    .primaryKey(),
  userId: columnTypes.varchar("userId", { length: 255 }).notNull(),
  expires: columnTypes.timestamp("expires", { mode: "date" }).notNull(),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = SchemaTable(
  "verificationToken",
  (columnTypes) => ({
    identifier: columnTypes.varchar("identifier", { length: 255 }).notNull(),
    token: columnTypes.varchar("token", { length: 255 }).notNull(),
    expires: columnTypes.timestamp("expires", { mode: "date" }).notNull(),
  })
);
