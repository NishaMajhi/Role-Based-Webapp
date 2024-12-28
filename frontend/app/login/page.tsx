"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/authSlice";
import Link from "next/link";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const cookieToken = Cookies.get("authToken");

  useEffect(() => {
    if (cookieToken) {
      router.push('/dashboard')
    }

  }, [cookieToken])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);



    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log("data+", data);
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token in Redux
      dispatch(setToken(data.token));

      // Save token in cookies (for persistence)
      Cookies.set("authToken", data.token, { expires: 7 });

      // Redirect to the home page
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <Link href="/signup" className="text-blue-500 underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
