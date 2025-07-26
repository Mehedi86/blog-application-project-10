"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
                const res = await fetch("/api/showPost");
                const data = await res.json();
                setPosts(data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">📜 Total Posts: {posts.length}</h1>
            {posts.length === 0 ? (
                <p className="text-2xl font-bold p-4 w-1/3 bg-red-400 text-white">No posts found</p>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div key={post._id} className="border-2 border-neutral-200  p-4 rounded shadow space-y-4">
                            <h2 className="text-xl font-semibold text-center bg-rose-100 rounded-lg p-4 w-1/3 mx-auto">{post.title}</h2>
                            <p className="text-neutral-700 font-semibold text-center bg-teal-100 rounded-lg p-4 w-1/2 mx-auto">{post.content}</p>
                            <span className="text-sm text-gray-500">
                                <p><span className="font-bold text-black">Created At:</span> {new Date(post.timestamp).toLocaleString()}</p>
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
