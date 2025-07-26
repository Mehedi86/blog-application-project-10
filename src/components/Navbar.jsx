import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm justify-center">
                <ul className="menu menu-horizontal px-1 space-x-2 font-bold">
                    <Link href="/createPost">Create Post</Link>
                    <Link href="/showPost">Show Post</Link>
                </ul>
            </div>
        </div>
    )
}
