import { AddScrapForm } from "@/components/advertisement/AddScrapForm";
import { Breadcrumbs } from "@/components/Breadcrumbs ";
import React from "react";

const Page = () => {
  return (
    <div className="container flex flex-col gap-10 px-4 py-10 mx-auto">
      <Breadcrumbs />

      <AddScrapForm />
    </div>
  );
};

export default Page;
