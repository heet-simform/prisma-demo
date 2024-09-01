import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE() {
  const deletedUser = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  return NextResponse.json(deletedUser);
}
