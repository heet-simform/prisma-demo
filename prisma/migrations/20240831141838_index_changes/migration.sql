-- DropIndex
DROP INDEX "users_id_idx";

-- CreateIndex
CREATE INDEX "users_id_role_idx" ON "users"("id", "role");
