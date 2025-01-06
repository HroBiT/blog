import Link from "next/link";
import { prisma } from "../../../lib/db";

export default async function postPage({ params }) {
  const postId = parseInt(params.id, 10);
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return (
    <div className="bg-gray-900 text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold">Post of id number: {postId}</h1>
      <ul className="w-full max-w-2xl space-y-4">
        {post && (
          <li key={post.id} className="p-4 mt-10 bg-gray-800 rounded shadow text-white">
            <h1 className="text-2xl font-bold mb-4 text-indigo-500">{post.title}</h1>
            <p className="text-base mb-4">{post.Content}</p>
            <p className="text-sm text-gray-500 mb-4">{post.createdAt.toDateString()}</p>
            <Link href="/Posts">
              <h1 className="text-indigo-500 hover:underline">Go Back</h1>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}