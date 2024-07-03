import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import multer from 'multer';
import cloudinary from '@/config/cloudinary'
const storage = multer.memoryStorage();
const upload = multer({ storage });


export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const posts = await prisma.blog.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (request: NextRequest, response: NextResponse) => {

  const uploadMiddleware = upload.single('file');


  try {
    const { title, description, authorName, position, sections, } = await request.json();

    if (!request.file) {
      throw new Error('File is required');
    }

    const { buffer } = request.file;

    const uploadResponse = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error: any, result: any) => {
      if (error) {
        throw new Error('Cloudinary upload failed');
      }
      return result;
    });

    const imageUrl = uploadResponse.secure_url;

    const post = await prisma.blog.create({
      data: {
        title,
        description,
        authorName,
        position,
        sections: JSON.parse(sections),
        imageUrl,
      },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};