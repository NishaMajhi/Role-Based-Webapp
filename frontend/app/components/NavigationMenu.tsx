"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Use next/navigation for client-side routing
import Cookies from "js-cookie"; // Import js-cookie for client-side cookie access

import Header from "./Header";
import { FantasyIcon, HomeIcon, TelegramIcon } from "../../public/svg-icon/MenuIcon";
import Footer from "./footer";
import Sidebar from "./SubMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setToken } from "@/store/authSlice";
import { setMenuData } from "@/store/menuDataSlice";
import { setMenuItems } from "@/store/menuSlice";

// Define the props for the NavigationMenu component
interface NavigationMenuProps {
  children: ReactNode;
}

export default function NavigationMenu({ children }: NavigationMenuProps) {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [loading, setLoading] = useState(true); // State to prevent UI flicker
  const token = useSelector((state: RootState) => state.auth.token);
  const menuData = useSelector((state: RootState) => state.menuData.data);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log("menuData", menuData)



  useEffect(() => {
    if (token == null) {
      const cookieToken = Cookies.get("authToken");
      if (cookieToken) {
        setIsLoggedIn(true);
        dispatch(setToken(cookieToken));
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    } // Mark auth check complete
  }, [dispatch]);

  const [data, setData] = useState([]);

  console.log("data+++", data)
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {

        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result); // Store API response in state

        dispatch(setMenuItems(result));

      } catch (err) {
        console.error("Error fetching data:", err);

      }
    };

    fetchData();
  }, [token]); // Run whenever token changes




  if (loading) {
    return null; // Render nothing or a loader while checking auth status
  }



  return (
    <div className="min-h-screen flex flex-col">

      {menuData.includes("header") ? <Header /> : null}

      {token ? (
        // Show Sidebar and Footer only if logged in
        <>

          {menuData.includes("sidenav") ? <Sidebar>{children}</Sidebar> : (<div className="flex-grow">{children}</div>)}

          {menuData.includes("footer") ? <Footer /> : null}
        </>
      ) : (
        // If not logged in, show children directly or a placeholder
        <main className="flex-grow">{children || <p>Please log in to access this page.</p>}</main>
      )}
    </div>
  );
}
