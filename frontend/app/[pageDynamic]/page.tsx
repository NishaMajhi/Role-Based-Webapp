"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { RootState } from "@/store";
import { setMenuData } from "@/store/menuDataSlice";

const Page: React.FC = () => {
    const pathname = usePathname();  // Get the current path like "/dashboard"
    const menuData = useSelector((state: RootState) => state.menu.menuItems);  // Get menu items from Redux
    const [pageData, setPageData] = useState<string[]>([]);  // State to store 'data' array for the current page
    const [isDashboard, setIsDashboard] = useState(false);  // State to check if the page is 'dashboard'
    const [configure, setConfigure] = useState<{ role: string, permission: string[] } | null>(null);  // State to store configuration
    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (pathname) {
            const menuItem = menuData.find((item) => item.path === pathname);
            if (menuItem) {
                setPageData(menuItem.data);
                dispatch(setMenuData(menuItem.data));
            }

            // Check if the current pathname is "dashboard"
            setIsDashboard(pathname === "/dashboard");
        }
    }, [pathname, menuData]);

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                return;
            }

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu/configure`, {
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
                setConfigure(result);  // Set the permissions from the response
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [token]);

    const hasPermission = (permission: string) => {
        return configure?.permission.includes(permission);
    };

    return (
        <div className="p-5">
            {isDashboard ? (
                <table className="min-w-full table-auto border-collapse shadow-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left border-b">Name</th>
                            <th className="px-4 py-2 text-left border-b">Number</th>
                            <th className="px-4 py-2 text-left border-b">Mail</th>
                            {hasPermission("DELETE") && (
                                <th className="px-4 py-2 text-left border-b">Delete</th>
                            )}
                            {hasPermission("EDIT") && (
                                <th className="px-4 py-2 text-left border-b">Edit</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.length > 0 ? (
                            pageData.map((data, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    <td className="px-4 py-2 border-b">{data}</td>
                                    <td className="px-4 py-2 border-b">{data}</td>
                                    <td className="px-4 py-2 border-b">{data}</td>
                                    {hasPermission("DELETE") && (
                                        <td className="px-4 py-2 border-b">
                                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                                Delete
                                            </button>
                                        </td>
                                    )}
                                    {hasPermission("EDIT") && (
                                        <td className="px-4 py-2 border-b">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                                Edit
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-4">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            ) : (
                <div className="welcome-page">
                    <h1 className="text-3xl font-semibold animate-fadeIn">
                        Welcome to the {pathname.replace("/", "")} page!
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Page;
