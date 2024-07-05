import {NextResponse,NextRequest} from 'next/server';
import nc from 'next-connect';
import prisma from '@/prisma';
import cloudinary from '@/lib/cloudinary';
import upload from '@/lib/multer';


type CloudinaryResponse = {
  secure_url: string;
  
};

// GET all posts
export const GET = (upload.single('image'),async (req:NextRequest, ) => {
  try {
    const posts = await prisma.blog.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
});

// POST a new post
export const POST = (async (req:any, res:any) => {
  try {
    const { title, description, authorName, position, sections } = req.body;

    if (!req.file) {
      throw new Error('File is required');
    }

    const { buffer } = req.file;

    const uploadResponse:CloudinaryResponse = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: 'image' }
      );

      stream.end(buffer);
    });

    const image = uploadResponse.secure_url;

    const post = await prisma.blog.create({
      data: {
        title,
        description,
        authorName,
        position,
        sections: JSON.parse(sections),
        image,
      },
    });

    return res.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error);
    return res.json({ message: "Error", error }, { status: 500 });
  }
});

