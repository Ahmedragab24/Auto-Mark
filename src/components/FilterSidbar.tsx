"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import FilterAccordionItem from "./FilterAccordionItem";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { CategoriesKeyType } from "@/types";

interface IProps {
  typeCategory: CategoriesKeyType;
}

export default function FilterSidebar({ typeCategory }: IProps) {
  const [searchQueries, setSearchQueries] = React.useState({
    brand: "",
    structure: "",
    model: "",
    year: "",
    energy: "",
    transmission: "",
    country: "",
    city: "",
    type: "",
    number: "",
    interface: "",
    category: "",
    specialization: "",
    state: "",
    branch: "",
    price: "",
  });

  const handleSearchChange = (section: string, value: string) => {
    setSearchQueries((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div
      className="w-full md:w-[280px] px-2 md:min-h-screen flex flex-col gap-4 md:gap-4 items-center"
      dir="rtl"
    >
      <div className="flex flex-col gap-4 md:pb-2 md:border-b-2">
        <div className="flex items-center justify-between font-regular">
          <h3 className="text-bodyL">المنتجات(80)</h3>
          <Button className=" text-bodyS text-primary" variant={"link"}>
            مسح الفلتر
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="relative px-5 py-1 rounded-md text-bodyS bg-secondary text-foreground">
            سيارة
            <X className="absolute w-3 h-3 cursor-pointer top-1 right-1" />
          </span>
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md  px-4">
        <Accordion
          className="flex flex-row md:flex-col gap-4"
          type="multiple"
          // defaultValue={["brand"]}
        >
          {(typeCategory === "car" || typeCategory === "scrap") && (
            <>
              {/* Brand */}
              <FilterAccordionItem
                type="checkbox"
                value="brand"
                title="الماركة"
                searchable
                searchQuery={searchQueries.brand}
                onSearchChange={(value) => handleSearchChange("brand", value)}
                options={[
                  { id: "mercedes", label: "مرسيدس" },
                  { id: "toyota", label: "تويوتا" },
                  { id: "honda", label: "هوندا" },
                ]}
              />

              {/* structure */}
              <FilterAccordionItem
                type="checkbox"
                value="structure"
                title="الهيكل"
                searchable
                searchQuery={searchQueries.structure}
                onSearchChange={(value) =>
                  handleSearchChange("structure", value)
                }
                options={[
                  { id: "sedan", label: "سيدان" },
                  { id: "suv", label: "دفع رباعي" },
                  { id: "hatchback", label: "هاتشباك" },
                ]}
              />

              {/* Model */}
              <FilterAccordionItem
                type="checkbox"
                value="model"
                title="الموديل"
                searchable
                searchQuery={searchQueries.model}
                onSearchChange={(value) => handleSearchChange("model", value)}
                options={[
                  { id: "sedan", label: "سيدان" },
                  { id: "suv", label: "دفع رباعي" },
                  { id: "hatchback", label: "هاتشباك" },
                ]}
              />

              {/* Year */}
              <FilterAccordionItem
                type="input"
                value="year"
                title="سنة الصنع"
                placeholder="2025"
                inputType="number"
              />

              {/* Engine */}
              <FilterAccordionItem
                type="checkbox"
                value="energy"
                title="الطاقة"
                searchable
                searchQuery={searchQueries.energy}
                onSearchChange={(value) => handleSearchChange("energy", value)}
                options={[
                  { id: "petrol", label: "بنزين" },
                  { id: "diesel", label: "سولار" },
                  { id: "hybrid", label: "هيبردي" },
                  { id: "electric", label: "الكتروني" },
                ]}
              />

              {/* Transmission */}
              <FilterAccordionItem
                type="checkbox"
                value="transmission"
                title="ناقل الحركة"
                searchable
                searchQuery={searchQueries.transmission}
                onSearchChange={(value) =>
                  handleSearchChange("transmission", value)
                }
                options={[
                  { id: "automatic", label: "اوتوماتيك" },
                  { id: "manual", label: "يدوي" },
                ]}
              />
            </>
          )}

          {typeCategory === "spare_parts" && (
            <>
              {/* City */}
              <FilterAccordionItem
                type="checkbox"
                value="city"
                title="المدينة"
                searchable
                searchQuery={searchQueries.city}
                onSearchChange={(value) => handleSearchChange("city", value)}
                options={[
                  { id: "saudi", label: "السعودية" },
                  { id: "bahrain", label: "البحرين" },
                  { id: "uae", label: "الإمارات" },
                  { id: "oman", label: "عمان" },
                  { id: "egypt", label: "مصر" },
                ]}
              />

              {/* Type */}
              <FilterAccordionItem
                type="checkbox"
                value="type"
                title="النوع"
                searchable
                searchQuery={searchQueries.type}
                onSearchChange={(value) => handleSearchChange("type", value)}
                options={[
                  { id: "private", label: "خصوصي" },
                  { id: "driver", label: "نقل" },
                ]}
              />
            </>
          )}

          {typeCategory === "car_numbers" && (
            <>
              {/* City */}
              <FilterAccordionItem
                type="checkbox"
                value="city"
                title="المدينة"
                searchable
                searchQuery={searchQueries.city}
                onSearchChange={(value) => handleSearchChange("city", value)}
                options={[
                  { id: "saudi", label: "السعودية" },
                  { id: "bahrain", label: "البحرين" },
                  { id: "uae", label: "الإمارات" },
                  { id: "oman", label: "عمان" },
                  { id: "egypt", label: "مصر" },
                ]}
              />

              {/* Type */}
              <FilterAccordionItem
                type="checkbox"
                value="type"
                title="النوع"
                searchable
                searchQuery={searchQueries.type}
                onSearchChange={(value) => handleSearchChange("type", value)}
                options={[
                  { id: "private", label: "خصوصي" },
                  { id: "driver", label: "نقل" },
                ]}
              />

              {/* Number */}
              <FilterAccordionItem
                type="checkbox"
                value="number"
                title="الأرقام"
                searchable
                searchQuery={searchQueries.number}
                onSearchChange={(value) => handleSearchChange("number", value)}
                options={[
                  { id: "one", label: "احادي" },
                  { id: "two", label: "ثنائي" },
                  { id: "three", label: "ثلاثي" },
                  { id: "four", label: "رباعي" },
                ]}
              />

              {/* Interface */}
              <FilterAccordionItem
                type="checkbox"
                value="interface"
                title="الشكل"
                searchable
                searchQuery={searchQueries.interface}
                onSearchChange={(value) =>
                  handleSearchChange("interface", value)
                }
                options={[
                  { id: "new", label: "حديث" },
                  { id: "old", label: "قديم" },
                ]}
              />
            </>
          )}

          {typeCategory === "services" && (
            <>
              {/* City */}
              <FilterAccordionItem
                type="checkbox"
                value="city"
                title="المدينة"
                searchable
                searchQuery={searchQueries.city}
                onSearchChange={(value) => handleSearchChange("city", value)}
                options={[
                  { id: "saudi", label: "السعودية" },
                  { id: "bahrain", label: "البحرين" },
                  { id: "uae", label: "الإمارات" },
                  { id: "oman", label: "عمان" },
                  { id: "egypt", label: "مصر" },
                ]}
              />

              {/* Category */}
              <FilterAccordionItem
                type="checkbox"
                value="category"
                title="القسم"
                searchable
                searchQuery={searchQueries.category}
                onSearchChange={(value) =>
                  handleSearchChange("category", value)
                }
                options={[
                  { id: "general", label: "خدمات عامة" },
                  { id: "maintenance", label: "خدمات صيانة وإصلاح" },
                  { id: "cleaning", label: "خدمات تنظيف" },
                  { id: "transport", label: "خدمات نقل وشحن" },
                  { id: "levels", label: "خدمات ونش وسطحيات" },
                  { id: "other", label: "اخرى" },
                ]}
              />
            </>
          )}

          {typeCategory === "showroom" && (
            <>
              {/* Country */}
              <FilterAccordionItem
                type="checkbox"
                value="country"
                title="الدولة"
                searchable
                searchQuery={searchQueries.country}
                onSearchChange={(value) =>
                  handleSearchChange("country}", value)
                }
                options={[
                  { id: "all", label: "الكل" },
                  { id: "saudi", label: "السعودية" },
                  { id: "bahrain", label: "البحرين" },
                  { id: "uae", label: "ال��مارات" },
                  { id: "oman", label: "عمان" },
                  { id: "egypt", label: "مصر" },
                  { id: "kuwait", label: "الكويت" },
                  { id: "jordan", label: "الأردن" },
                  { id: "lebanon", label: "لبنان" },
                  { id: "qatar", label: "قطر" },
                  { id: "turkey", label: "تركيا" },
                ]}
              />

              {/* City */}
              <FilterAccordionItem
                type="checkbox"
                value="city"
                title="المدينة"
                searchable
                searchQuery={searchQueries.city}
                onSearchChange={(value) => handleSearchChange("city", value)}
                options={[
                  { id: "saudi", label: "السعودية" },
                  { id: "bahrain", label: "البحرين" },
                  { id: "uae", label: "الإمارات" },
                  { id: "oman", label: "عمان" },
                  { id: "egypt", label: "مصر" },
                ]}
              />

              {/* Specialization */}
              <FilterAccordionItem
                type="checkbox"
                value="specialization"
                title="التخصص"
                searchable
                searchQuery={searchQueries.specialization}
                onSearchChange={(value) =>
                  handleSearchChange("specialization", value)
                }
                options={[
                  { id: "all", label: "الكل" },
                  { id: "cars", label: "سيارات" },
                  { id: "bikes", label: "درجات" },
                  { id: "trucks", label: "شاحنات" },
                  { id: "boats", label: "قوارب" },
                ]}
              />
            </>
          )}

          {typeCategory === "showroomInfo" && (
            <>
              {/* Brand */}
              <FilterAccordionItem
                type="checkbox"
                className="border-b-0"
                value="brand"
                title="الماركة"
                searchable
                searchQuery={searchQueries.brand}
                onSearchChange={(value) => handleSearchChange("brand", value)}
                options={[
                  { id: "mercedes", label: "مرسيدس" },
                  { id: "toyota", label: "تويوتا" },
                  { id: "honda", label: "هوندا" },
                ]}
              />

              {/* Structure */}
              <FilterAccordionItem
                type="checkbox"
                className="border-b-0"
                value="structure"
                title="الهيكل"
                searchable
                searchQuery={searchQueries.structure}
                onSearchChange={(value) =>
                  handleSearchChange("structure", value)
                }
                options={[
                  { id: "sedan", label: "سيدان" },
                  { id: "suv", label: "دفع رباعي" },
                  { id: "hatchback", label: "هاتشباك" },
                ]}
              />

              {/* State */}
              <FilterAccordionItem
                type="checkbox"
                className="border-b-0"
                value="state"
                title="الحالة"
                searchable
                searchQuery={searchQueries.state}
                onSearchChange={(value) => handleSearchChange("state", value)}
                options={[
                  { id: "new", label: "جديد" },
                  { id: "used", label: "مستعمل " },
                ]}
              />

              {/* Branch */}
              <FilterAccordionItem
                type="checkbox"
                className="border-b-0"
                value="branch"
                title="الفرع"
                searchable
                searchQuery={searchQueries.branch}
                onSearchChange={(value) => handleSearchChange("branch", value)}
                options={[
                  { id: "all", label: "الكل" },
                  { id: "main", label: "الرئيسية" },
                  { id: "branch", label: "فرع" },
                ]}
              />
            </>
          )}

          {typeCategory !== "showroom" && (
            <>
              {/* Price */}
              <FilterAccordionItem
                type="price"
                className="border-b-0"
                value="price"
                title="السعر"
                searchable
                searchQuery={searchQueries.price}
                onSearchChange={(value) => handleSearchChange("price", value)}
              />
            </>
          )}
        </Accordion>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
