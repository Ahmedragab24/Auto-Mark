import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import type { RegisterFormData } from "@/schemas";

interface EmailInputProps {
  form: UseFormReturn<RegisterFormData>;
}

export function EmailInput({ form }: EmailInputProps) {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-right !text-bodyS font-regular">
            البريد الإلكتروني
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type="email"
                className="pl-10 pr-10 text-right h-10"
                placeholder="example@gmail.com"
                {...field}
              />
              <Mail className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
