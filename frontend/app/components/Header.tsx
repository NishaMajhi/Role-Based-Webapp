"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie"; // For cookie handling
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, setToken } from "@/store/authSlice";

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();


  const handleLogout = () => {



    dispatch(clearToken());
    Cookies.remove("authToken");
    setIsLoggedIn(false);
    router.push("/login"); // Redirect to login page
  };



  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            alt="logo"
            src="https://media.licdn.com/dms/image/v2/C510BAQGqxHHt1R5iLQ/company-logo_200_200/company-logo_200_200/0/1630611346805?e=2147483647&v=beta&t=dMqx-PTFCXa0tgpEegIYP90PI4f78QlmNNDUeDPMssE"
            height={25}
            width={50}
          />
        </Link>

        {/* Navigation and Actions */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-semibold text-gray-700">
            {headerlist.map((header) => (
              <Link key={header.id} href={header.link} prefetch>
                <li
                  className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-indigo-500 hover:text-white ${pathname === header.link ? "bg-indigo-600 text-white" : ""
                    }`}
                >
                  {header.title}
                </li>
              </Link>
            ))}
          </ul>

          {/* Login/Signup or Logout Button */}
          {!token ? (
            <div className="flex space-x-4">
              <Link href="/login">
                <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Define the header list with proper typing
const headerlist = [

  { id: 1, title: "About", link: "/about" },
  { id: 2, title: "Contact Us", link: "/contact-us" },
];
