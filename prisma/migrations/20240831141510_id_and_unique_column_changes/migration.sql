/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    PRIMARY KEY ("email", "role")
);
INSERT INTO "new_users" ("email", "id", "name", "role") SELECT "email", "id", "name", "role" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE INDEX "users_id_idx" ON "users"("id");
CREATE UNIQUE INDEX "users_name_email_key" ON "users"("name", "email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
