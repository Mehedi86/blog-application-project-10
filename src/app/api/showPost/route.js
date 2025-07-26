import dbConnect from "@/lib/dbConnect";

export async function GET() {


    const postsCollection = await dbConnect("posts");

    const posts = await postsCollection.find({}).sort({ timestamp: -1 }).toArray();

    return new Response(JSON.stringify(posts), { status: 200 });
}


