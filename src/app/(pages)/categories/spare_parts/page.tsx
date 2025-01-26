import FilterSidebar from "@/components/FilterSidbar";
import ProductsFiltering from "@/components/ProductsFiltering";
import React from "react";

const page = () => {
  return (
    <section className="mt-8">
      <div className="container flex flex-col items-start gap-10 px-2 mx-auto md:flex-row">
        <FilterSidebar typeCategory="spare_parts" />
        <ProductsFiltering typeCategory="spare_parts" />
      </div>
    </section>
  );
};

export default page;
