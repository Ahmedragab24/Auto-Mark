"use client";

import ProductsGrid from "@/components/ProductsGrid";
import { Button } from "@/components/ui/button";
import { useGetHomeProductsQuery } from "@/store/apis/products";
import Image from "next/image";
import React from "react";

const ExhibitionsPage = () => {
  const { data, isLoading, isError } = useGetHomeProductsQuery({
    countryId: 1,
    lang: "en",
  });
  return (
    <main>
      <section>
        <Image
          src={"/Images/Frame 324.jpg"}
          alt="Image Cover"
          width={1400}
          height={700}
          className="w-full h-[40vh] lg:h-[80vh]"
        />
      </section>
      <section className="container flex flex-col gap-4 px-4 pb-10 max-auto lg:flex-row">
        <div
          className="lg:w-[450px] h-fit lg:-mt-[12rem] flex flex-col gap-10 bg-background p-6 rounded-2xl shadow-md border"
          dir="rtl"
        >
          <div className="relative">
            <Image
              src={"/Images/Frame 324.jpg"}
              alt="Image Cover"
              width={400}
              height={500}
              className="w-full h-[200px] rounded-xl"
            />
            <Button
              variant={"secondary"}
              className="absolute p-2 rounded-full bottom-1 left-1"
            >
              <Image
                src={"/Icons/pencil-edit-02 (1).png"}
                alt="Edit"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </Button>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              مئسسة أبو راشد لتجارة السيارات
            </h2>

            <p className="text-bodyS font-regular">
              مؤسسة ابو راشد منذ عام 2008م وهي واحدة من أكبر الشركات لتجارة
              السيارات
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex justify-center w-full gap-10 pb-2 border-b border-border">
              <h2>الاعلانات :</h2>
              <h2>8 اعلان</h2>
            </div>
            <div className="flex justify-center w-full gap-10 pb-2 border-b border-border">
              <h2>المتابعون :</h2>
              <h2>50 متابع</h2>
            </div>
          </div>

          <Button
            size={"lg"}
            className="bg-[#1E97B1] text-white hover:bg-[#1e96b1d0]"
          >
            طلب توثيق
          </Button>
        </div>

        <div className="flex flex-col w-full gap-14">
          <div className="w-full pt-4 border-b border-border">
            <Button variant={"GradientLink"} className="text-2xl">
              السيارات
            </Button>
          </div>
          <div>
            <ProductsGrid
              products={data?.data?.newProducts}
              isError={isError}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExhibitionsPage;
