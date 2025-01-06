import { createPost } from "@/actions/actions";
import { prisma } from "../../lib/db";

export default async function AdminPage() {

  return (
    <div className="admin-page bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <form action={createPost} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            required
            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Small Content</label>
          <input
            type="text"
            name="smallContent"
            required
            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Content</label>
          <textarea
            name="content"
            rows={7}
            required
            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  );
}