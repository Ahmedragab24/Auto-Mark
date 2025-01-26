"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { changePasswordSchema, PasswordFormValues } from "@/schemas";

export default function PasswordForm() {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: PasswordFormValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <div className="py-10 bg-background rounded-xl">
      <Card className="w-full mx-auto max-w-[90%] md:max-w-[50%]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            تعيين كلمة المرور
          </CardTitle>
          <CardDescription>الرجاء كتابة شيء تتذكره في المستقبل</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              dir="rtl"
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-right">
                      كلمة المرور الحالية
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="password"
                          placeholder="يجب ان تكون كلمة المرور أكثر من 8 احرف"
                          className="h-12 pr-10 text-right"
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
                          className="h-12 pr-10 text-right"
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
                          className="h-12 pr-10 text-right"
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
    </div>
  );
}
