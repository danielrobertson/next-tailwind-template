"use client";

import Link from "next/link";
import { Alert } from "flowbite-react";

export default function New() {
  return (
    <main className="container mx-auto p-16">
      <h1 className="mb-3 text-4xl font-bold">Add new</h1>
      <form>
        <div>
          <label
            htmlFor="todo"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <input
            type="text"
            id="todo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Buy apples"
            required
          />
        </div>

        <div className="flex gap-2 mt-3 justify-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Submit
          </button>
          <Link
            href="/"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}
