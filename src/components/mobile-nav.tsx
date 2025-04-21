"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Home, Info, ListChecks, Menu, Phone } from "lucide-react"; // Import icons
import Link from "next/link";

const MobileNav = () => {
  const links = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About",
      url: "/about-us",
      icon: Info,
    },
    {
      title: "Services",
      url: "/services",
      icon: ListChecks,
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: Phone,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={"md:hidden"}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button size={"icon"} variant={"default"}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 m-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-md"
        >
          <div className="px-4 py-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              KITOVU Hub
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your all-in-one platform for customer support, with fast
              responses, personalized help, and affordable packages.
            </p>
          </div>

          <div className="mt-2 space-y-1">
            {links.map((link) => (
              <DropdownMenuItem
                onClick={() => setOpen(false)}
                key={link.title}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md px-4 py-2 flex items-center gap-2" // Added flex and gap
              >
                <link.icon className="w-4 h-4" />
                <Link href={link.url} className="block w-full">
                  {link.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
