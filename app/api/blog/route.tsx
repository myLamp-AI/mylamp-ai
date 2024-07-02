import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest,response:NextResponse) => {
  try {
    const posts = await prisma.blog.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } 
};

export const POST = async (request: NextRequest,response:NextResponse) => {
  try {
    const { title, description, authorName, position, sections, image } = await request.json();
    const newBlog = await prisma.blog.create({
      data: {
        title,
        description,
        authorName,
        position,
        image,
        sections: {
          create: sections.map(section => ({
            subheading: section.subheading,
            content: section.content,
          })),
        },
      },
      include: {
        sections: true,
      },
    });

    return NextResponse.json({message:"success",newBlog},{status:201});
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } 
};