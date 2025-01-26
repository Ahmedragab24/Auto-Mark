"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
import { Switch } from "@/components/ui/switch";
import { formSchema, FormValues } from "@/schemas/advertisement";
import { arabCountries, cities } from "@/constants";

interface IProps {
  setStepTow: (value: boolean) => void;
}

const AddScrapFormStepOne = ({ setStepTow }: IProps) => {
  const [mainImagePreview, setMainImagePreview] = useState<string>("");
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState<
    string[]
  >([]);
  const [selectedCountry, setSelectedCountry] =
    useState<keyof typeof cities>("AE");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      city: "",
      countryCode: "+971",
      PhoneNumber: "",
      address: "",
      mainImage: undefined,
      additionalImages: undefined,
      whatsappPreferred: false,
      featured: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    setStepTow(true);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[80%] mx-auto space-y-6"
        dir="rtl"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 border border-border rounded-2xl p-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">
                    الاسم <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-11"
                      placeholder="ادخل اسمك/ المعرض"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
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
                            className="text-right !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0 shadow-none no-arrows !m-0 rounded-none h-11"
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

            {/* Country */}
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
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="اختر الدولة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {arabCountries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      <SelectTrigger
                        className="h-11"
                        disabled={!form.getValues("country")}
                      >
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

            {/*  */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">
                    العنوان بالتفصيل <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="25 شارع حسين الشحات المتفرع من كايرو"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* whatsapp */}
            <FormField
              control={form.control}
              name="whatsappPreferred"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                  <FormLabel className="font-normal">
                    فضل التواصل على الواتساب
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* featured */}
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                  <FormLabel className="font-normal">ميز إعلانك</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col justify-between gap-4 border border-border rounded-2xl p-8 ">
            {/* Main Image */}
            <FormField
              control={form.control}
              name="mainImage"
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel className="text-right">
                    الصورة الرئيسية <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="w-full h-[250px] border-2 border-dashed rounded-lg text-center cursor-pointer hover:border-gray-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="mainImage"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(e.target.files);
                            setMainImagePreview(URL.createObjectURL(file));
                          }
                        }}
                        {...{ ...field, value: undefined }}
                      />
                      <label
                        htmlFor="mainImage"
                        className="cursor-pointer flex items-center justify-center w-full h-full"
                      >
                        {mainImagePreview ? (
                          <Image
                            src={mainImagePreview || "/placeholder.svg"}
                            alt="Preview"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <ImagePlus className="w-10 h-10 text-gray-400" />
                            <div className="text-sm text-gray-600">
                              <span className="text-primary">
                                Upload a file
                              </span>
                              or drag and drop
                            </div>
                            <div className="text-xs text-gray-400">
                              PNG, JPG, GIF up to 10MB
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Group Image */}
            <FormField
              control={form.control}
              name="additionalImages"
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel className="text-right">باقي صور الاعلان</FormLabel>
                  <FormControl>
                    <div className="w-full h-[250px] border-2 border-dashed rounded-lg text-center cursor-pointer hover:border-gray-400 transition-colors p-2 overflow-hidden flex justify-center items-center">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        id="additionalImages"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files) {
                            onChange(files);
                            setAdditionalImagePreviews(
                              Array.from(files).map((file) =>
                                URL.createObjectURL(file)
                              )
                            );
                          }
                        }}
                        {...{ ...field, value: undefined }}
                      />
                      <label
                        htmlFor="additionalImages"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        {additionalImagePreviews.length > 0 ? (
                          <div className="flex gap-2 flex-wrap justify-center">
                            {additionalImagePreviews.map((preview, index) => (
                              <Image
                                key={index}
                                src={preview || "/placeholder.svg"}
                                alt={`Preview ${index + 1}`}
                                width={100}
                                height={100}
                                className="rounded-lg object-cover w-[100px] h-[100px]"
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-2">
                            <ImagePlus className="w-10 h-10 text-gray-400" />
                            <div className="text-sm text-gray-600">
                              <span className="text-primary">
                                Upload a file
                              </span>
                              or drag and drop
                            </div>
                            <div className="text-xs text-gray-400">
                              PNG, JPG, GIF up to 10MB
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Button size={"lg"} type="submit" className="w-fit px-20">
            التالي
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddScrapFormStepOne;
