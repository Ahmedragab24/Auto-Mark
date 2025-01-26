import { Breadcrumbs } from "@/components/Breadcrumbs ";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col gap-10">
      <Breadcrumbs />

      <div className="h-[60vh] flex items-center justify-center">
        <h1 className="text-3xl font-bold">لايوجد اشعارات</h1>
      </div>
    </div>
  );
};

export default page;
