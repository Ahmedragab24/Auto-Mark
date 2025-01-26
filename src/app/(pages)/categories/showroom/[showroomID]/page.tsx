"use client";

import FilterSidebar from "@/components/FilterSidbar";
import ProductsGrid from "@/components/ProductsGrid";
import SelectBrand from "@/components/SelectBrand";
import { Button } from "@/components/ui/button";
import { useGetShowroomProductsByIdQuery } from "@/store/apis/showrooms";
import { ShowroomByIdType } from "@/types";
import { Plus, SendHorizontal } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ExhibitionsPage = () => {
  const { showroomID } = useParams();
  const { data, isLoading, isError } = useGetShowroomProductsByIdQuery({
    id: Number(showroomID),
    lang: "en",
  });

  const showroom: ShowroomByIdType = data?.data?.showrooms;

  console.log(showroom);

  return (
    <main>
      <section>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${showroom?.setting?.background_image}`}
          alt="Image Cover"
          width={1400}
          height={700}
          className="w-full h-[40vh] lg:h-[80vh]"
        />
      </section>
      <section className="container flex flex-col gap-4 px-4 pb-10 max-auto lg:flex-row">
        <div className="lg:w-[450px] h-fit lg:-mt-[12rem] flex flex-col items-center gap-6">
          <div
            className="flex flex-col gap-10 p-6 border shadow-md bg-background rounded-2xl"
            dir="rtl"
          >
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${showroom?.setting?.logo}`}
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
                {showroom?.setting?.showroom_ar}
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

            <div className="flex flex-col gap-4">
              <Button size={"lg"} className="w-full">
                متابعة
                <Plus />
              </Button>
              <Button variant={"secondary"} size={"lg"} className="w-full">
                رسالة
                <SendHorizontal />
              </Button>
            </div>
          </div>

          <FilterSidebar typeCategory="showroomInfo" />
        </div>

        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-center w-full gap-6 pt-4 border-b border-border">
            <Button
              variant={"GradientLink"}
              className="text-2xl border-b-2 border-border"
            >
              السيارات
            </Button>
            <Button
              variant={"GradientLink"}
              className="text-2xl border-b-2 border-border"
            >
              الفروع
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-end w-full">
              <SelectBrand />
            </div>
            <ProductsGrid
              products={data?.data?.showrooms?.products}
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
