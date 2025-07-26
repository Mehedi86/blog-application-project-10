import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
    try {
        const { title, content } = await request.json();

        if (!title || !content) {
            return new Response(JSON.stringify({ error: "Title and content are required" }), { status: 400 });
        }

        // ✅ Now use await
        const postsCollection = await dbConnect("posts");

        const newPost = { title, content, timestamp: new Date() };
        const result = await postsCollection.insertOne(newPost);

        return new Response(
            JSON.stringify({ message: "Post created successfully", postId: result.insertedId }),
            { status: 201 }
        );

    } catch (error) {
        console.error("POST error:", error);
        return new Response(JSON.stringify({ error: "Failed to create post" }), { status: 500 });
    }
}
