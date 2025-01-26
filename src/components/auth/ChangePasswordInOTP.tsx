"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { changePasswordOTPSchema, PasswordFormOTPValues } from "@/schemas";

export default function PasswordOTPForm() {
  const form = useForm<PasswordFormOTPValues>({
    resolver: zodResolver(changePasswordOTPSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: PasswordFormOTPValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <Card className="w-full mx-auto">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            dir="rtl"
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">
                    كلمة المرور الجديدة
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="يجب ان تكون كلمة المرور أكثر من 8 احرف"
                        className="h-10 pr-10 text-right"
                        {...field}
                      />
                      <Lock className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">
                    تأكيد كلمة المرور
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        className="h-10 pr-10 text-right"
                        placeholder="ادخل كلمة المرور"
                        {...field}
                      />
                      <Lock className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              تأكيد كلمة المرور
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
