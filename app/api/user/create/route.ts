import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // const createUserRecords = await prisma.user.create({
    //   data: {
    //     name: "heet",
    //     email: "heet1@yopmail.com",
    //     posts: {
    //       create: [
    //         {
    //           title: "NestJS",
    //           catgories: {
    //             connectOrCreate: {
    //               where: {
    //                 id: 10,
    //               },
    //               create: {
    //                 name: "FrontEnd",
    //               },
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   include: {
    //     posts: {
    //       include: {
    //         catgories: true,
    //       },
    //     },
    //   },
    // });
    const createUserRecords = await prisma.user.createMany({
      data: [
        { name: "James", email: "james@yopmail.com" },
        { name: "Nic", email: "nic@yopmail.com" },
      ],
    });
    return NextResponse.json(createUserRecords);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: err.message,
      });
    }
  }
}
