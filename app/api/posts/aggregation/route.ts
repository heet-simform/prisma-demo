import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const aggregation = await prisma.posts.aggregate({
      _sum: {
        likeNum: true,
      },
      _avg: {
        likeNum: true,
      },
      _count: {
        likeNum: true,
      },
      _max: {
        likeNum: true,
      },
      _min: {
        likeNum: true,
      },
    });
    return NextResponse.json(aggregation);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: err.message,
      });
    }
  }
}
