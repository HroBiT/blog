import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-gray-900 text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Link href="Posts" className="text-indigo-500 hover:text-indigo-400">przejscie do listy postow</Link> <br/><br/>
        <Link href="Admin" className="text-indigo-500 hover:text-indigo-400">przejscie do panelu admina</Link>
    </div>
  );
}