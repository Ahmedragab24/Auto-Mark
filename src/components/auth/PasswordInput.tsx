import { Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import type { loginSchema } from "@/schemas";
import type { z } from "zod";

interface PasswordInputProps {
  form: UseFormReturn<z.infer<typeof loginSchema>>;
}

export function PasswordInput({ form }: PasswordInputProps) {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-right !text-bodyS font-regular">
            كلمة المرور
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type="password"
                className="pr-10 text-right h-10"
                placeholder="كلمة المرور"
                {...field}
              />
              <Lock className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
