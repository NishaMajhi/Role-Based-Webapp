"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotAuthorized: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Not Authorized</h1>
      <p className="text-gray-700 text-center mb-6">
        You do not have access to this page. Please login to continue.
      </p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => router.push("/login")} // Redirect to login page
      >
        Go to Login
      </button>
    </div>
  );
};

export default NotAuthorized;
