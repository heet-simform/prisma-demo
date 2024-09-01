import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const paginationRecords = await prisma.posts.findMany({
      skip: 0,
      take: 2,
    });
    return NextResponse.json(paginationRecords);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: err.message,
      });
    }
  }
}
