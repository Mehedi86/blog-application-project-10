import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-50'>
      <div className='space-x-4'>
        <Link
          href="/createPost"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 shadow"
        >
          Create Post
        </Link>
        <Link
          href="/showPost"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-200 shadow"
        >
          Show Post
        </Link>

      </div>
    </div>
  );
}
