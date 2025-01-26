"use client";

import { UserLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AsideUser = () => {
  const pathname = usePathname();

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <aside className="flex flex-col gap-4 px-4 py-8 bg-background rounded-xl h-fit">
      <div className="flex flex-col gap-4">
        {UserLink.map(({ name, href, image, alt, href2 }, index) => (
          <Link
            key={index}
            href={href}
            className={`flex items-center gap-2 text-gray-600 hover:text-primary ${
              pathname === href ? "text-primary" : ""
            } ${pathname === href2 ? "text-primary" : ""} ${
              index === UserLink.length - 1 && "text-primary"
            }`}
            onClick={() => index === UserLink.length - 1 && LogOut()}
          >
            <Image
              src={image}
              alt={alt}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AsideUser;
