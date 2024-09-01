import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.posts.findMany();

    // const posts = await prisma.posts.findFirst();

    // find all the post whose post has not been published
    // const posts = await prisma.posts.findMany({
    //   where: {
    //     published: false,
    //   },
    // });

    // find all the post whose title contains github or javascript AND the post is published
    // const posts = await prisma.posts.findMany({
    //   where: {
    //     OR: [
    //       {
    //         title: {
    //           contains: "GitHub",
    //         },
    //       },
    //       {
    //         title: {
    //           contains: "javascript",
    //         },
    //       },
    //     ],
    //     AND: {
    //       published: true,
    //     },
    //   },
    // });

    // -----------------------------------------------------------------------
    // Relationship m-1
    // -----------------------------------------------------------------------
    //  find all the posts whose name contains "s"
    // const posts = await prisma.posts.findMany({
    //   where: {
    //     User: {
    //       is: {
    //         name: {
    //           contains: "s",
    //         },
    //       },
    //     },
    //   },
    //   include: {
    //     User: true,
    //   },
    // });

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({
      status: 500,
      error: "Failed to fetch the post",
    });
  }
}
