"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

import { arabCountries, cities } from "@/constants";
import { AddAddressFormData, addAddressSchema } from "@/schemas";
import { useRouter } from "next/navigation";

export default function AddressForm() {
  const [selectedCountry, setSelectedCountry] = useState<keyof typeof cities>();
  const Router = useRouter();

  const form = useForm<AddAddressFormData>({
    resolver: zodResolver(addAddressSchema),
    defaultValues: {
      country: "",
      city: "",
      countryCode: "+971",
      address: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: AddAddressFormData) {
    try {
      console.log(data);
      // Add your form submission logic here
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto p-6 bg-background rounded-xl py-20"
        dir="rtl"
      >
        <div className="max-w-[90%] md:max-w-[60%] mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* الدولة */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    الدولة<span className="text-red-500 mr-1">*</span>
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
                      <SelectTrigger className="h-12">
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

            {/* المدينة */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    المدينة<span className="text-red-500 mr-1">*</span>
                  </FormLabel>
                  <Select
                    dir="rtl"
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={!selectedCountry} // تعطيل الاختيار إذا لم يتم تحديد الدولة
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="اختر المدينة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectedCountry &&
                      Array.isArray(cities[selectedCountry]) ? (
                        cities[selectedCountry].map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.name}
                          </SelectItem>
                        ))
                      ) : (
                        <div className="p-2 text-center text-gray-500">
                          لا توجد مدن متاحة
                        </div>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* رقم الهاتف */}
            <div
              className={`flex flex-col gap-3 ${
                form.formState.errors.phoneNumber?.message && "mb-8"
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
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="text-right !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0 shadow-none no-arrows !m-0 rounded-none h-12"
                            placeholder="رقم الهاتف"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                        <FormMessage className="absolute right-2 -bottom-6 z-10" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* العنوان */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    العنوان بالتفصيل<span className="text-red-500 mr-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="25 شارع حسين الشحات المتفرع من كايرو"
                      className="text-right h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* الأزرار */}
          <div className="flex justify-between gap-4 pt-4">
            <Button type="submit" className="flex-1">
              حفظ التغييرات
            </Button>

            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => {
                form.reset();
                Router.back();
              }}
            >
              العودة
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
