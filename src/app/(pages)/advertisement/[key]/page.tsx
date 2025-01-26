"use client";

import { AddScrapForm } from "@/components/advertisement/AddScrapForm";
import CategoriesByCarItems from "@/components/advertisement/CategoriesByCarItems";
import { Breadcrumbs } from "@/components/Breadcrumbs ";
import { CategoriesKeyType } from "@/types";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const PathName = params.key as CategoriesKeyType;
  console.log(PathName);

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col gap-10">
      <Breadcrumbs />
      {PathName === "car" && <CategoriesByCarItems />}
      {PathName === "scrap" && <AddScrapForm />}
    </div>
  );
};

export default Page;
