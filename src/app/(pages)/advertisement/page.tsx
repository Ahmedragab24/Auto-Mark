"use client";

import * as React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs ";

export default function CarRentalList() {
  return (
    <div className="container px-4 py-10 mx-auto" dir="rtl">
      <Breadcrumbs />

      {/* Header Section */}
      <div className="bg-[#AE0000] text-white px-4 sm:px-6 md:px-10 pt-6 md:pt-10 overflow-hidden  rounded-lg mb-6 relative">
        <div className="flex flex-col items-center gap-8 md:items-end md:flex-row md:justify-between md:gap-4">
          <div className="z-10 py-10 text-center md:py-3 md:text-right">
            <h2 className="mb-2 text-lg font-bold md:mb-4 sm:text-xl">
              اجعل اعلاناتك مميزة
            </h2>
            <h3 className="mb-2 text-base sm:text-lg">واشترك في باقاتنا</h3>
            <Button className="bg-white text-[#AE0000] hover:bg-white/90 mt-2 md:mt-4 w-32 font-medium px-20">
              <Link href="/advertisement/packages">اشترك</Link>
            </Button>
          </div>

          <div className="absolute left-0 right-0 hidden w-full md:block top-2 md:relative md:bottom-auto md:left-auto md:right-auto md:w-auto">
            <div className="flex items-end justify-center md:justify-end">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-36">
                <Image
                  src="/Images/Frame 78.png"
                  alt="advertisement"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-36">
                <Image
                  src="/Images/Frame 76.png"
                  alt="advertisement"
                  fill
                  className="object-contain translate-y-6"
                />
              </div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-36">
                <Image
                  src="/Images/Frame 77.png"
                  alt="advertisement"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="current" className="w-full">
        <div className="flex justify-center w-full">
          <TabsList className="w-full p-8 mb-6 md:w-1/2 rounded-2xl">
            <TabsTrigger
              value="current"
              className="w-1/2 data-[state=active]:bg-primary rounded-lg data-[state=active]:text-white"
            >
              الحالية
            </TabsTrigger>
            <TabsTrigger
              value="expired"
              className="w-1/2 data-[state=active]:bg-primary rounded-lg data-[state=active]:text-white"
            >
              المنتهية
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="current" className="space-y-4">
          {/* Car Listing Cards */}
          {[1, 2].map((item) => (
            <Card key={item} className="p-4">
              <div className="flex gap-4">
                <div className="relative w-32 h-32 shrink-0">
                  <Image
                    src="/Images/Frame 324.jpg"
                    alt="Car Image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">مرسيدس بنز أي أم جي 2022</h3>
                    <div className="text-[#AE0000] font-bold">4500 درهم</div>
                  </div>
                  <div className="mb-4 text-sm text-gray-600">
                    4 أبواب - أوتوماتيك - بنزين
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      تاريخ النشر: 26 يناير 2025
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600"
                      >
                        حذف
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#AE0000] hover:bg-[#8E0000]"
                      >
                        تعديل
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          {/* Expired Listings - Similar structure but with different status */}
          {[1, 2].map((item) => (
            <Card key={item} className="p-4">
              <div className="flex gap-4">
                <div className="relative w-32 h-32 shrink-0">
                  <Image
                    src="/Images/Frame 324.jpg"
                    alt="Car Image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">مرسيدس بنز أي أم جي 2022</h3>
                    <div className="text-[#AE0000] font-bold">4500 درهم</div>
                  </div>
                  <div className="mb-4 text-sm text-gray-600">
                    4 أبواب - أوتوماتيك - بنزين
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      انتهى بتاريخ: 26 يناير 2025
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600"
                      >
                        حذف
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#AE0000] hover:bg-[#8E0000]"
                      >
                        تجديد
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
