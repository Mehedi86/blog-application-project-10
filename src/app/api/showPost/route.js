import dbConnect from "@/lib/dbConnect";

// ✅ GET Route - Fetch all posts
export async function GET() {
    try {
        // ✅ Connect to posts collection
        const postsCollection = await dbConnect("posts");

        // ✅ Fetch all posts sorted by newest first
        const posts = await postsCollection.find({}).sort({ timestamp: -1 }).toArray();

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("GET error:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch posts" }), { status: 500 });
    }
}

