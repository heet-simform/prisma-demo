import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT() {
  const result = await prisma.user.upsert({
    where: {
      id: 2,
    },
    update: {
      name: "updatedUser",
    },
    create: {
      name: "updatedUser",
      email: "updatedUser@yopmail.com",
    },
  });
  return NextResponse.json(result);
}
