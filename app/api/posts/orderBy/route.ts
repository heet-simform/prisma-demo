import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.posts.findMany({
      orderBy: {
        likeNum: "asc",
      },
    });
    return NextResponse.json(posts);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: err.message,
      });
    }
  }
}
