import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const decrementLikes = prisma.posts.update({
      where: {
        id: 2,
      },
      data: {
        likeNum: {
          decrement: 5,
        },
      },
    });

    // const userCreation = prisma.user.create({
    //   data: {
    //     email: "heet@yopmail.com",
    //     name: "Mitesh",
    //   },
    // });

    const incrementLikes = prisma.posts.update({
      where: {
        id: 4,
      },
      data: {
        likeNum: {
          increment: 5,
        },
      },
    });

    const trasanction = await prisma.$transaction([
      decrementLikes,
      //   userCreation,
      incrementLikes,
    ]);

    return NextResponse.json(trasanction);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: err.message,
      });
    }
  }
}
