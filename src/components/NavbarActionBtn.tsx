import React from "react";
import { Button } from "./ui/button";
import { BellRing, Heart, MessagesSquare } from "lucide-react";
import Link from "next/link";

interface IProps {
  className?: string;
}

const NavbarActionBtn = ({ className }: IProps = {}) => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="secondary" size="icon" className={className}>
        <Link href="/favorites">
          <Heart />
        </Link>
      </Button>
      <Button variant="secondary" size="icon" className={className}>
        <Link href="/notifications">
          <BellRing />
        </Link>
      </Button>
      <Button variant="secondary" size="icon" className={className}>
        <Link href={"/messages"}>
          <MessagesSquare />
        </Link>
      </Button>
    </div>
  );
};

export default NavbarActionBtn;
