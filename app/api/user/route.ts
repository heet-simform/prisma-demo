import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  // const user = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       contains: "a",
  //     },
  //   },
  // });

  //   ----------------------------------------------------------------------------------------

  //   const user = await prisma.user.findMany({
  //     where: {
  //       id: {
  //         in: [2, 3],
  //       },
  //     },
  //   });

  // const user = await prisma.user.findMany({
  //   where: {
  //     OR: [
  //       {
  //         id: {
  //           gt: 1,
  //         },
  //       },
  //       {
  //         name: "John",
  //       },
  //     ],
  //   },
  // });

  // -------------------------------------------------------------------------------------
  // Relation filter 1-m m-n
  // -------------------------------------------------------------------------------------

  // every - find all the user who has all the post has been published
  // const user = await prisma.user.findMany({
  //   where: {
  //     posts: {
  //       every: {
  //         published: true,
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  // some - find all the user who has at least one post has been published
  // const user = await prisma.user.findMany({
  //   where: {
  //     posts: {
  //       some: {
  //         published: true,
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  // none - find all the users who has none of the post has been published
  // const user = await prisma.user.findMany({
  //   where: {
  //     posts: {
  //       none: {
  //         published: false,
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  const user = await prisma.user.findMany({
    where: {
      posts: {
        some: {
          title: {
            contains: "GitHub",
          },
        },
      },
    },
    select: {
      posts: true,
    },
  });
  console.log("user", user);
  return NextResponse.json(user);
}
