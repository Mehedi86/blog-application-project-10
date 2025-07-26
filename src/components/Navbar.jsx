"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Create Post", path: "/createPost" },
    { name: "Show Post", path: "/showPost" },
  ];

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm justify-center">
        <ul className="menu menu-horizontal px-1 space-x-2 font-bold">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`px-3 py-2 rounded-md ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

