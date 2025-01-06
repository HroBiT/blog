import { prisma } from "../../lib/db";
import Link from "next/link";

export default async function PostsPage() {

  const posts = await prisma.post.findMany();

  return (
    <div className="bg-gray-900 text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Blog counter ({posts.length})
      <ul className="w-full max-w-2xl space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-800 rounded shadow text-white">
            <Link href={`/Posts/${post.id}`} >
                <h1 className="text-indigo-500 hover:text-indigo-400">{post.title}</h1>
                <p>{post.SmallContent}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-indigo-500 hover:text-indigo-400">przejscie do home</Link>
    </div>
  );
}