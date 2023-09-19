"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { GetLinkedIcon } from "../../../../assets/icons/Getlinked";

const routes = [
  {
    name: "Individual",
    href: "/dashboard",
  },
  {
    name: "Business",
    href: "/dashboard",
  },
  {
    name: "Pricing",
    href: "/dashboard",
  },
  {
    name: "Set your payroll",
    href: "/dashboard",
  },
];

export const NavBar = () => {
  return (
    <main className="">
      <div className="max-w-[1100px] mx-auto p-4 flex justify-between lg:flex lg:justify-between">
        <div className="flex gap-20">
          <a href="#" className="flex items-center">
            <GetLinkedIcon width={100} />
          </a>
        </div>
      </div>
    </main>
  );
};
