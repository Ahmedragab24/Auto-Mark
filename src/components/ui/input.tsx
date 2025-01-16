"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // أيقونات العرض والإخفاء

interface CustomInputProps extends React.ComponentProps<"input"> {
  status: "Default" | "Active" | "Error" | "Disabled";
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type = "text", status = "Default", icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div
        className={cn(
          "relative flex h-16 w-full rounded-lg border text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          status === "Default" && "border-gray-300 bg-background",
          status === "Active" && "border-primary focus-within:ring-primary",
          status === "Error" && "border-red-500 focus-within:ring-red-500",
          status === "Disabled" && "border-gray-200 bg-gray-50 text-gray-400",
          className
        )}
      >
        <input
          ref={ref}
          type={type === "password" && !showPassword ? "password" : "text"}
          className="w-full h-full px-4 py-2 border-none rounded-lg focus:ring-0 placeholder:text-gray-400 disabled:cursor-not-allowed"
          disabled={status === "Disabled"}
          {...props}
        />

        {type === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer left-4 top-1/2"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </div>
        )}

        {icon && (
          <div className="absolute transform -translate-y-1/2 right-4 top-1/2 text-gray-80">
            {icon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
