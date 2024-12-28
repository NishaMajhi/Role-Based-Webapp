"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";


import { useRouter } from "next/navigation";



const Blog: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  })








  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-900 min-h-screen flex flex-col justify-center py-12 px-6 relative">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,213.3C672,192,768,128,864,101.3C960,75,1056,85,1152,128C1248,171,1344,235,1392,277.3C1440,320,1440,320,1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>


    </div>
  );
};

export default Blog;
