"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { type SendCoderFormData, SendCoderSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ModelType } from "./LoginModel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { Input } from "../ui/input";
import { arabCountries } from "@/constants";

interface ForgetPasswordProps {
  setTypeModel: (type: ModelType) => void;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ setTypeModel }) => {
  const form = useForm<SendCoderFormData>({
    resolver: zodResolver(SendCoderSchema),
    defaultValues: {
      countryCode: "+971",
      PhoneNumber: "",
    },
  });

  const onSubmit = async (data: SendCoderFormData) => {
    console.log("Form data:", data);
    // Handle form submission
    setTypeModel("OTP");
  };

  return (
    <div
      className="max-h-[80vh] flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="p-6 rounded-lg shadow-md w-full max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
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
                        <FormMessage className="absolute right-2 -bottom-6 z-10" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              أرسل الكود
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <Button
            variant="link"
            className="hover:underline"
            onClick={() => setTypeModel("Login")}
          >
            العودة لتسجيل الدخول
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
