"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface props {
  className: string;
}

const MainNavBar: React.FC<props> = ({ className }) => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutUs", label: "About us" },
    { href: "/courses", label: "Courses" },
    { href: "/teachers", label: "Teachers" },
    { href: "/blogs", label: "Blogs" },
    { href: "/faq", label: "FAQ" },
    { href: "/ContactUs", label: "Contact us" },
  ];
  console.log(pathname);

  return (
    <nav className={`${className}`}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch
          className={` hover:text-secondary ${
            pathname === link.href ? "text-secondary" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNavBar;
