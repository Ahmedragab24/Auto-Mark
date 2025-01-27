"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas";
import type { ModelType } from "./LoginModel";
import type { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "./PasswordInput";
import { OrDivider } from "./OrDivider";
import { SocialLoginButtons } from "./SocilaLogin";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { arabCountries } from "@/constants";
import Image from "next/image";
import { Input } from "../ui/input";

interface LoginFormProps {
  setTypeModel: (type: ModelType) => void;
}

export default function LoginForm({ setTypeModel }: LoginFormProps) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      countryCode: "+971",
      PhoneNumber: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center" dir="rtl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 rounded-lg shadow-md w-full max-w-md"
        >
          <div
            className={`flex flex-col gap-3 ${
              form.formState.errors.PhoneNumber?.message && "mb-8"
            }`}
          >
            <FormLabel className="font-regular pb-1">رقم الهاتف</FormLabel>

            <div className="relative flex items-center w-full  border rounded-md focus-within:border-primary">
              {/* قائمة الدول */}
              <div className="flex-shrink-0 border-l border-border">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          dir="rtl"
                          defaultValue={field.value}
                          {...field}
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="relative z-10 w-full h-10 border-r rounded-none !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {arabCountries.map((country) => (
                              <SelectItem
                                key={country.code}
                                value={country.dialCode}
                              >
                                <div className="flex items-center gap-2 px-1">
                                  <Image
                                    src={country.flag || "/placeholder.svg"}
                                    alt={country.name}
                                    width={20}
                                    height={20}
                                    className="w-4 h-4 rounded-sm"
                                  />
                                  <span>{country.dialCode}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* حقل إدخال رقم الهاتف */}
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="PhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="text-right !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0 shadow-none no-arrows !m-0 rounded-none"
                          placeholder="رقم الهاتف"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                      <FormMessage className="absolute right-1 -bottom-6 z-10" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <PasswordInput form={form} />

          <div className="text-left">
            <Button
              variant="link"
              className="text-primary !text-bodyS p-0"
              onClick={() => setTypeModel("ForgetPassword")}
            >
              نسيت كلمة المرور؟
            </Button>
          </div>

          <Button type="submit" className="w-full">
            تسجيل الدخول
          </Button>

          <div className="text-center">
            <Button
              variant="link"
              className="h-auto p-0 text-gray-500"
              onClick={() => setTypeModel("RegisterStepTwo")}
            >
              إنشاء حساب
            </Button>
          </div>

          <OrDivider />

          <SocialLoginButtons />
        </form>
      </Form>
    </div>
  );
}
