import React from "react";
import { ModeToggle } from "./ModeToggle";
import DropDownCountry from "./DropDownCountry";
import DropDownLang from "./DropDownLang";
import TopBarMenuMobile from "./TopBarMenuMobile";
import LoginModel from "./auth/LoginModel";
import { Button } from "./ui/button";
// import UserAvatar from "./UserAvatar";

const TopBar = () => {
  return (
    <div dir="rtl" className="w-full bg-primary">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between h-14">
          {/* Account Section */}
          {/* <UserAvatar /> */}
          <LoginModel>
            <Button variant={"ghost"} className="text-white">
              Login / Register
            </Button>
          </LoginModel>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-6 md:flex">
            {/* Country Dropdown */}
            <DropDownCountry />

            {/* Language Dropdown */}
            <DropDownLang />

            {/* Theme Toggle */}
            <ModeToggle />
          </div>

          {/* Mobile Menu Dropdown */}
          <TopBarMenuMobile />
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
