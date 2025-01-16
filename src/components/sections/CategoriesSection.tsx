import React from "react";
import Image from "next/image";
import { categories } from "@/constants";
import Link from "next/link";

const CategoriesSection = () => {
  return (
    <div className="section">
      <h2 className="section-title">الاقسام</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={category.href}>
            <div className="w-full h-44 group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-black/0" />
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 right-0 z-20 p-6">
                <h3 className="text-xl font-semibold tracking-wide text-white">
                  {category.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 bg-primary/10 group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
