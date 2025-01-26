"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus, Lock, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFileUpload } from "@/hooks/use-file-upload";
import { arabCountries, cities, specializations } from "@/constants";
import { registrationSchema, RegistrationValues } from "@/schemas/exhibition";
import { ScrollArea } from "../ui/scroll-area";
import { useRouter } from "next/navigation";

interface IProps {
  setIsOpen: (open: boolean) => void;
}

export default function ExRegistrationForm({ setIsOpen }: IProps) {
  const [selectedCountry, setSelectedCountry] =
    useState<keyof typeof cities>("AE");
  const router = useRouter();

  const form = useForm<RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      country: "",
      city: "",
      specialization: "all",
      countryCode: "+971",
      email: "",
      password: "",
      confirmPassword: "",
      description: "",
      coverImage: undefined,
      profileImage: undefined,
      displayName: "",
      phoneNumber: "",
    },
  });

  const profileImageUpload = useFileUpload({
    onFileSelect: (file, preview) => {
      form.setValue(
        "profileImage",
        { file, preview },
        { shouldValidate: true }
      );
    },
  });

  const coverImageUpload = useFileUpload({
    onFileSelect: (file, preview) => {
      form.setValue("coverImage", { file, preview }, { shouldValidate: true });
    },
  });

  async function onSubmit(data: RegistrationValues) {
    try {
      console.log(data);
      // Add your form submission logic here
      router.push("/user/exhibitions");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="px-8 w-max  max-h-[80vh] md:w-[800px] lg:w-[1000px]">
      <div className="w-full">
        <Form {...form}>
          <ScrollArea className="h-screen md:h-fit w-full px-4" dir="rtl">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-8 items-center p-4"
            >
              <div
                className="flex flex-col md:items-center gap-6 flex-1"
                dir="rtl"
              >
                {/* profile image */}
                <FormField
                  control={form.control}
                  name="profileImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        صورة الشعار
                        <span className="text-primary mr-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-3">
                          <div
                            className={`relative flex items-center justify-center w-20 h-20 border-2 border-dashed rounded-full ${
                              profileImageUpload.dragActive
                                ? "border-primary bg-primary/10"
                                : "border-border"
                            }`}
                            onDragEnter={profileImageUpload.handleDrag}
                            onDragLeave={profileImageUpload.handleDrag}
                            onDragOver={profileImageUpload.handleDrag}
                            onDrop={profileImageUpload.handleDrop}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 cursor-pointer opacity-0"
                              onChange={profileImageUpload.handleChange}
                            />
                            {field.value?.preview ? (
                              <>
                                <Image
                                  src={field.value.preview}
                                  alt="Profile"
                                  width={128}
                                  height={128}
                                  className="rounded-full object-cover w-full h-full"
                                />

                                {field.value?.preview && (
                                  <Button
                                    variant={"destructive"}
                                    className="w-5 h-5 absolute top-2 right-2 rounded-full p-0"
                                    onClick={() =>
                                      form.setValue("profileImage", undefined)
                                    }
                                  >
                                    x
                                  </Button>
                                )}
                              </>
                            ) : (
                              <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                                <ImagePlus className="h-8 w-8" />
                              </div>
                            )}
                          </div>

                          {!field.value?.preview && (
                            <Button
                              type="button"
                              variant={"secondary"}
                              size={"sm"}
                              className="!text-bodyS"
                              onClick={() =>
                                (
                                  document.querySelector(
                                    'input[type="file"]'
                                  ) as HTMLInputElement
                                )?.click()
                              }
                            >
                              ضع صورة
                            </Button>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* cover image */}
                <FormField
                  control={form.control}
                  name="coverImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        صورة الغلاف
                        <span className="text-red-500 mr-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <div
                          className={`relative flex h-[140px] w-[250px] cursor-pointer items-center justify-center rounded-lg border-2 border-dashed transition-colors
                          ${
                            coverImageUpload.dragActive
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          }
                        `}
                          onDragEnter={coverImageUpload.handleDrag}
                          onDragLeave={coverImageUpload.handleDrag}
                          onDragOver={coverImageUpload.handleDrag}
                          onDrop={coverImageUpload.handleDrop}
                        >
                          <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 cursor-pointer opacity-0"
                            onChange={coverImageUpload.handleChange}
                          />
                          {field.value?.preview ? (
                            <>
                              <Image
                                src={field.value.preview || "/placeholder.svg"}
                                alt="Cover"
                                fill
                                className="rounded-lg object-cover w-full h-full"
                              />
                              {field.value?.preview && (
                                <Button
                                  variant={"destructive"}
                                  className="w-5 h-5 absolute top-2 right-2 rounded-full p-0"
                                  onClick={() =>
                                    form.setValue("coverImage", undefined)
                                  }
                                >
                                  x
                                </Button>
                              )}
                            </>
                          ) : (
                            <div className="flex flex-col p-10 items-center gap-2 text-bodyS text-muted-foreground">
                              <ImagePlus className="h-8 w-8" />
                              <span>قم برفع صورة أو اسحبها هنا</span>
                              <span className="text-xs">
                                PNG, JPG, GIF حتى 10MB
                              </span>
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>وصف المعروض</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="يمكنك كتابة معلومات عما يتم عرضه للمستخدمين"
                          className="resize-none w-[250px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-6 ">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Exhibition name */}
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          أسم المعرض
                          <span className="text-primary mr-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="أسم المعرض"
                              className="h-10 pr-10"
                              {...field}
                            />
                            <User className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* nationality name */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          الدولة
                          <span className="text-red-500 mr-1">*</span>
                        </FormLabel>
                        <Select
                          dir="rtl"
                          value={field.value}
                          onValueChange={(value) => {
                            field.onChange(value);
                            setSelectedCountry(value as keyof typeof cities);
                          }}
                        >
                          <FormControl>
                            <SelectTrigger className="h-10">
                              <SelectValue placeholder="اختر الدولة" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {arabCountries.map((country) => (
                              <SelectItem
                                key={country.code}
                                value={country.code}
                              >
                                {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* city */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          المدينة
                          <span className="text-red-500 mr-1">*</span>
                        </FormLabel>
                        <Select
                          dir="rtl"
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-10">
                              <SelectValue placeholder="اختر المدينة" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {cities[selectedCountry].map((city) => (
                              <SelectItem key={city.value} value={city.value}>
                                {city.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* specialization */}
                  <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          التخصص
                          <span className="text-primary mr-1">*</span>
                        </FormLabel>
                        <Select
                          dir="rtl"
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-10">
                              <SelectValue placeholder="اختر التخصص" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {specializations.map((specialization) => (
                              <SelectItem
                                key={specialization.value}
                                value={specialization.value}
                              >
                                {specialization.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* phone */}
                  <div
                    className={`flex flex-col gap-3 ${
                      form.formState.errors.phoneNumber?.message && "mb-8"
                    }`}
                  >
                    <FormLabel className="font-regular">رقم الهاتف</FormLabel>

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
                                  onValueChange={(value) =>
                                    field.onChange(value)
                                  }
                                >
                                  <SelectTrigger className="relative z-10 w-full h-10 border-r rounded-none !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0 h-10">
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
                                            src={
                                              country.flag || "/placeholder.svg"
                                            }
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
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  className="text-right !border-none !ring-0 !outline-none focus:ring-0 h-10 focus:outline-none focus-visible:ring-0 focus-within:ring-0 shadow-none no-arrows !m-0 rounded-none"
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

                  {/* email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>البريد الإلكتروني</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="email"
                              placeholder="example@gmail.com"
                              dir="ltr"
                              className="text-right h-10 pr-10"
                              {...field}
                            />
                            <Mail className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>كلمة المرور</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="h-10 pr-10"
                              type="password"
                              placeholder="ادخل كلمة المرور"
                              {...field}
                            />
                            <Lock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* confirm password */}
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>تأكيد كلمة المرور</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="h-10 pr-10"
                              type="password"
                              placeholder="تأكيد كلمة المرور"
                              {...field}
                            />
                            <Lock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full">
                  إنشاء حساب
                </Button>
              </div>
            </form>
          </ScrollArea>
        </Form>
      </div>
    </div>
  );
}
