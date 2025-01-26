import { User } from "lucide-react";
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

interface NameInputProps {
  form: UseFormReturn<RegisterFormData>;
}

export function NameInput({ form }: NameInputProps) {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-right !text-bodyS font-regular">
            الأسم
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type="text"
                className="pl-10 pr-10 text-right h-10"
                placeholder="أسم المستخدم"
                {...field}
              />
              <User className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
