"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profileFormSchema, ProfileFormValues } from "@/schemas";
import Image from "next/image";
import Link from "next/link";
import { arabCountries } from "@/constants";

export default function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "احمد جمال",
      country: "الامارات العربية المتحدة",
      email: "example@gmail.com",
      countryCode: "+971",
      PhoneNumber: "12345678",
      password: "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <div className="w-full p-6 py-10 mx-auto bg-background rounded-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          dir="rtl"
          className="max-w-[90%] md:max-w-[70%] mx-auto space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">الاسم *</FormLabel>
                  <FormControl>
                    <Input className="h-12 text-right" {...field} />
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الدولة *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    dir="rtl"
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="اختر الدولة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="الامارات العربية المتحدة">
                        الامارات العربية المتحدة
                      </SelectItem>
                      <SelectItem value="السعودية">السعودية</SelectItem>
                      <SelectItem value="قطر">قطر</SelectItem>
                      <SelectItem value="الكويت">الكويت</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-center !mb-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right ">
                    البريد الالكتروني
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="h-12 pl-10 pr-10 text-right"
                        {...field}
                      />
                      <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3">
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
                            <SelectTrigger className="relative z-10 w-full h-12 border-r rounded-none !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0">
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">
                    تغيير كلمة المرور
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        className="pr-10 text-right h-12"
                        {...field}
                      />
                      <Lock className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Button type="submit" className="order-last w-full md:order-first">
              حفظ التغييرات
            </Button>
            <Button type="button" variant="secondary" className="w-full">
              <Link href="/user/change-Password">تغيير كلمة المرور</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
