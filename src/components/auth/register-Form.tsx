"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { registerSchema, type RegisterFormData } from "@/schemas";
import type { ModelType } from "./LoginModel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NameInput } from "./NameInput";
import { EmailInput } from "./EmailInput";
import { PasswordInputReg } from "./PasswordInputReg";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { arabCountries } from "@/constants";

interface RegisterFormProps {
  setTypeModel: (type: ModelType) => void;
}

export default function RegisterForm({ setTypeModel }: RegisterFormProps) {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+971",
      PhoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: RegisterFormData) {
    console.log(values);
    // Handle form submission
    setTypeModel("RegisterStepTwo");
  }

  return (
    <div
      className="max-h-[80vh] flex items-center justify-center p-4"
      dir="rtl"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-md gap-3 p-6 rounded-lg shadow-md"
        >
          <NameInput form={form} />
          <div
            className={`flex flex-col gap-3 ${
              form.formState.errors.PhoneNumber?.message && "mb-8"
            }`}
          >
            <FormLabel className="pb-1 font-regular">رقم الهاتف</FormLabel>

            <div className="relative flex items-center w-full border rounded-md focus-within:border-primary">
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
                      <FormMessage className="absolute z-10 right-2 -bottom-6" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <EmailInput form={form} />
          <PasswordInputReg form={form} name="password" />
          <PasswordInputReg form={form} name="confirmPassword" />

          <Button type="submit" className="w-full">
            إنشاء حساب
          </Button>

          <div className="text-center">
            <span className="text-sm text-gray-500">أنت مستخدم بالفعل؟</span>
            <Button
              variant="link"
              className="hover:underline"
              onClick={() => setTypeModel("Login")}
            >
              تسجيل دخول
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
