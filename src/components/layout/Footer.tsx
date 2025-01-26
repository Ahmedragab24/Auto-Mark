import Image from "next/image";
import Link from "next/link";
import { Dribbble, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer dir="rtl" className="pt-16 pb-8 bg-secondary">
      {/* App Download Section */}
      <div className="container px-4 mx-auto mb-16">
        <div className="p-8 shadow-sm bg-background rounded-2xl">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-center md:text-right">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                احصل على افضل الصفقات من خلال تطبيقنا
              </h2>
              <p className="mb-8 font-semibold text-h4 text-primary">
                حمل التطبيق الآن
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="#"
                  className="flex items-center gap-4 px-4 py-2 bg-black rounded-xl py-2transition-opacity dark:bg-secondary hover:opacity-80"
                >
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-gray-500">Download on the</p>
                    <h3 className="text-white text-h5">App Store</h3>
                  </div>

                  <Image
                    src="/Logo/ic_round-apple.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="w-14 h-14"
                  />
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-4 py-2 transition-opacity bg-black rounded-xl dark:bg-secondary hover:opacity-80"
                >
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-gray-500">Get it on</p>
                    <h3 className="text-white text-h5">Google Play</h3>
                  </div>

                  <Image
                    src="/Logo/google_play.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="w-14 h-14"
                  />
                </Link>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/Images/Group phones.png"
                alt="تطبيق اوتو مارك"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <Image
              src="/Logo/Logo.png"
              alt="Auto Mark"
              width={200}
              height={150}
              className="w-24 h-16 mx-auto mb-6"
            />
            <div className="flex justify-center gap-4 md:justify-start">
              <Link
                href="#"
                className="p-2 transition-colors bg-transparent border rounded-full border-primary hover:bg-primary/10"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </Link>
              <Link
                href="#"
                className="p-2 transition-colors bg-transparent border rounded-full border-primary hover:bg-primary/10"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </Link>
              <Link
                href="#"
                className="p-2 transition-colors bg-transparent border rounded-full border-primary hover:bg-primary/10"
              >
                <Dribbble className="w-5 h-5 text-primary" />
              </Link>
              <Link
                href="#"
                className="p-2 transition-colors bg-transparent border rounded-full border-primary hover:bg-primary/10"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>

          {/* Countries Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold">البلدان</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  جمهورية مصر العربية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  الإمارات العربية المتحدة
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  المملكة العربية السعودية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  مملكة البحرين
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  سلطنة عمان
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  الكويت
                </Link>
              </li>
            </ul>
          </div>

          {/* Auto Mark Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold">اوتو مارك</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  المعارض
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  اعلاناتي
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  الرسائل
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  الاشعارات
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  المفضلة
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold">السياسات والقوانين</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  سياسة الاستخدام
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  الشروط والاحكام
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  ملفات الارتباط
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            جميع الحقوق محفوظة لاوتو مارك © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
