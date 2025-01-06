"use server";

import { prisma } from "@/lib/db";


export async function createPost(formData: FormData) {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            SmallContent: formData.get("smallContent") as string,
            Content: formData.get("content") as string,
        },
    });
}