import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT() {
  const updatedUser = await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      name: "Ritesh",
    },
  });
  return NextResponse.json(updatedUser);
}
