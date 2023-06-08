import { connectToDB } from "@utils/database";
import BlogModel from "@models/blog";

export const GET = async(request) => {
     try {
        await connectToDB()
        const prompts = await BlogModel.find({}).populate('creator');
        // return new Response(JSON.stringify(prompts),{status:200})
        return new Response(JSON.stringify(prompts),{status:200})
     } catch (error) {
        console.log(error);
        return new Response('Failed to Fetch all Blogs',{status:500})
     }
}