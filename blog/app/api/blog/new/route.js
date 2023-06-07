import { connectToDB } from "@utils/database";
import BlogModel from "@models/blog";

export const POST = async (req) => {
  const { userId, blog, tag } = await req.json();

  try {
    await connectToDB();
    const newBlog = new BlogModel({ creator: userId, tag, blog });
    await newBlog.save();

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new Blog.", {status:500})
  }
};
