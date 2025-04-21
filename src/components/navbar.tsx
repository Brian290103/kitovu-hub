import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import MobileNav from "@/components/mobile-nav";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about-us",
    },
    {
      title: "Services",
      url: "/services",
    },
  ];

  return (
    <header
      className={
        "bg-[#F8F8F8] sticky z-50 top-0 left-0 right-0 flex items-center justify-between gap-5 p-4"
      }
    >
      <Link href={"/"} className={"flex items-center gap-3"}>
        <Image
          src={"/logo.jpg"}
          alt={"Kitovu Logo"}
          className={"rounded-full"}
          width={60}
          height={60}
        />
        <span className="text-xl font-semibold">KITOVU</span>
      </Link>

      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                href={link.url}
                className="hover:text-brand-secondary transition-colors duration-200"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          className={
            "rounded-full hidden px-6 py-3 bg-brand-primary hover:bg-brand-secondary hover:text-black duration-300 text-white md:flex items-center gap-2 hover:bg-blue-600 transition-colors"
          }
          href={"/contact-us"}
        >
          <span>Contact Us</span>
          <Phone className={"w-4 h-4"} />
        </Link>

        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
