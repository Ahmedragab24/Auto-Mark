"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

// خريطة الترجمة للمسارات
const pathTranslations: Record<string, string> = {
  categories: "الاقسام",
  car: "مركبات",
  vehicles: "مركبات",
  scrap: "سيارات سكراب",
  services: "خدمات",
  showroom: "المعارض",
  spare_parts: "قطع الغيار",
  car_numbers: "لوحات السيارات",
  "add-advertisement": "اضافة اعلان جديد",
  vehicleInformation: "معلومات المركبة",
  advertisement: "الاعلانات",
  user: "حسابي",
  address: "العناوين",
  "add-address": "أضف عنوان جديد",
  "edit-address": "تعديل العنوان",
  payment: "بطاقات الدفع",
  "add-payment": "اضافة بطاقة جديدة",
  "edit-payment": "تعديل بطاقة الدفع",
  "change-Password": "تغيير كلمة المرور",
  "upgrade-account": "ترقية الحساب",
  packages: "الباقات",
  notifications: "الاشعارات",
  category: "الاقسام",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
      <ol className="inline-flex p-0 list-none">
        <li className="flex items-center text-bodyS md:text-sm">
          <Link
            href="/"
            className="transition-colors duration-200 ease-in-out hover:text-primary"
          >
            الرئيسية
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          // ترجمة اسم المسار
          const translatedSegment = pathTranslations[segment] || segment;

          return (
            <li key={href} className="flex items-center text-bodyS md:text-sm">
              <ChevronLeftIcon className="w-4 h-4 mx-1 md:mx-2" />
              {isLast ? (
                <span className="font-medium text-gray-500">
                  {translatedSegment}
                </span>
              ) : (
                <Link
                  href={href}
                  className="transition-colors duration-200 ease-in-out hover:text-primary"
                >
                  {translatedSegment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
