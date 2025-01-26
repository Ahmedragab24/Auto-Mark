"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Loader,
  MapPin,
  Printer,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useGetProductsByIdQuery } from "@/store/apis/products";
import { useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";
import type { ProductType } from "@/types";
import { Breadcrumbs } from "@/components/Breadcrumbs ";
import Link from "next/link";
import { SimilarProducts } from "@/components/SimilarProducts";

export default function CarDetails() {
  const { productID } = useParams();
  const language = useAppSelector(
    (state: RootState) => state.Language.language
  );
  const { data, isLoading } = useGetProductsByIdQuery({
    id: Number(productID),
    lang: language,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product: ProductType = data?.data?.product;

  const handleNextImage = () => {
    if (product?.images && product?.images?.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product?.images.length);
    }
  };

  const handlePrevImage = () => {
    if (product?.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      {/* Loading */}
      {isLoading && (
        <div className="flex items-center gap-2 justify-center h-screen">
          <p>جاري التحميل</p>
          <Loader className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {/* Product Details */}
      {!isLoading && product && (
        <div className="container mx-auto px-4 py-6 space-y-10">
          <Breadcrumbs />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {/* Main Content - Images and Details */}
            <div className="lg:col-span-2">
              <Card className="rounded-2xl p-6">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold">{product?.name}</h1>
                  <div className="text-2xl font-bold text-primary">
                    {product?.price} {product?.country?.symbol}
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative mt-6 rounded-2xl overflow-hidden aspect-[6/3]">
                  {product?.images && product.images.length > 0 ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.images[currentImageIndex].image}`}
                      alt={`Car image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : product?.image ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.image}`}
                      alt="Car image"
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : null}

                  {/* Navigation Arrows */}
                  <button
                    onClick={handleNextImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 rounded-full p-2 shadow-md transition hover:bg-black"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={handlePrevImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 rounded-full p-2 shadow-md transition hover:bg-black"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* Thumbnails */}
                {product?.images && product.images.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-4 mt-4 -mx-2 px-2">
                    {product.images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden transition ${
                          currentImageIndex === index
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.image}`}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Specifications */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4">المواصفات</h2>
                  {product?.standard_specification &&
                    product.standard_specification.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {product.standard_specification.map((spec, index) => (
                          <div
                            key={index}
                            className="border-b border-border pb-3"
                          >
                            <div className="bg-secondary px-3 py-1 rounded-full text-sm inline-block mb-2">
                              {spec.title_ar}
                            </div>
                            <div className="text-sm">{spec.value_ar}</div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>

                {/* Description */}
                {product?.description_en && (
                  <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">الوصف</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {product?.description_en || "لا يوجد وصف متاح"}
                    </p>
                  </div>
                )}
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <div className="flex justify-end">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <Printer className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button variant="secondary" className="rounded-full">
                    {product?.type}
                  </Button>
                </div>
              </div>

              {/* Dealer Card */}
              <Card className="rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Auto Motors"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <div className="font-semibold">اوتو موتورز</div>
                    <div className="text-xs text-gray-500">تاجر معتمد</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full h-12 text-base bg-red-600 hover:bg-red-700">
                    متابعة
                  </Button>
                  <Button className="w-full h-12 text-base bg-green-500 hover:bg-green-600">
                    <Link href={`https://wa.me/${product?.whatsapp}`}>
                      واتساب
                    </Link>
                  </Button>
                  <Button className="w-full h-12 text-base" variant="outline">
                    رسالة
                  </Button>
                </div>
              </Card>

              {/* Location Card */}
              <Card className="rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">الموقع</span>
                </div>
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Location map"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Similar Products */}
          <SimilarProducts products={data?.data?.related_products} />
        </div>
      )}
    </div>
  );
}
