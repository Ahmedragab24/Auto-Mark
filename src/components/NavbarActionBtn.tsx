import React from "react";
import { Button } from "./ui/button";
import { BellRing, Heart, MessagesSquare } from "lucide-react";

interface IProps {
  className?: string;
}

const NavbarActionBtn = ({ className }: IProps = {}) => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="secondary" size="icon" className={className}>
        <Heart />
      </Button>
      <Button variant="secondary" size="icon" className={className}>
        <BellRing />
      </Button>
      <Button variant="secondary" size="icon" className={className}>
        <MessagesSquare />
      </Button>
    </div>
  );
};

export default NavbarActionBtn;
