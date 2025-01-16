import { CategoryType, navigationLinkType, ProductType } from "@/types"

export const navigationLink : navigationLinkType[] = [
    { title: "الرئيسية", href: "/" },
    { title: "الأقسام", href: "/categories" },
    { title: "إعلاناتي", href: "/banner" },
]

export const country = [
    { name: "السعودية", value: "SAU" },
    { name: "البحرين", value: "BHR" },
    { name: "الإمارات", value: "ARE" },
    { name: "عمان", value: "OMN" },
    { name: "مصر", value: "EGY" },
]

export const city = [
    { name: "القاهرة", value: "Cairo" },
    { name: "المدينة المنورة", value: "Alexandria" },
    { name: "الطريف", value: "Tanta" },
    { name: "البحيرة", value: "Port Said" },
    { name: "دمشق", value: "Damascus" },
    { name: "الرياض", value: "Riyadh" },
    { name: "مكة المكرمة", value: "Mecca" },
    { name: "المدينة المدينة", value: "Medina" },
    { name: "حائل", value: "Hail" },
]

export const carType = [
    { name: "سيارات جديدة", value: "new" },
    { name: "سيارات متجرية", value: "commercial" },
    { name: "سيارات سويد", value: "suv" },
    { name: "سيارات سيدان", value: "sedan" },
    { name: "سيارات رياضية", value: "sports" },
]

export const brand = [
    { name: "تويوتا", value: "toyota" },
    { name: "هوندا", value: "honda" },
    { name: "بي ام دبليو", value: "bmw" },
    { name: "اوتوسفاند", value: "audi" },
    { name: "ايليا", value: "kia" },
    { name: "راندا��", value: "renault" },
    { name: "فارو", value: "ford" },
    { name: "بيكاردي", value: "chevrolet" },
    { name: "جيبي", value: "jeep" },
    { name: "بيكسي", value: "benz" },
    { name: "بيتشي", value: "peugeot" },
]

export const price = [
    { name: "10000 - 20000", value: "10000-20000" },
    { name: "20001 - 30000", value: "20001-30000" },
    { name: "30001 - 40000", value: "30001-40000" },
    { name: "40001 - 50000", value: "40001-50000" },
    { name: "50001 - 60000", value: "50001-60000" },
    { name: "60001 - 70000", value: "60001-70000" },
    { name: "70001 - 80000", value: "70001-80000" },
    { name: "80001 - 90000", value: "80001-90000" },
    { name: "90001 - 100000", value: "90001-100000" },
]

export const year = [
    { name: "2024", value: "2024" },
    { name: "2023", value: "2023" },
    { name: "2022", value: "2022" },
    { name: "2021", value: "2021" },
    { name: "2020", value: "2020" },
    { name: "2019", value: "2019" },
    { name: "2018", value: "2018" },
    { name: "2017", value: "2017" },
    { name: "2016", value: "2016" },
    { name: "2015", value: "2015" },
    { name: "2014", value: "2014" },
    { name: "2013", value: "2013" },
    { name: "2012", value: "2012" },
]

export const categories: CategoryType[] = [
    {
    id: 'cars',
    title: 'سيارات',
    image: '/Images/سيارات.png',
    href: '/cars'
  },
    {
    id: 'spare-parts',
    title: 'قطع غيار',
    image: '/Images/قطع غيار.png',
    href: '/spare-parts'
  },
  {
    id: 'car-numbers',
    title: 'ارقام سيارات',
    image: '/Images/لوحات.png',
    href: '/car-numbers'
  },
  {
    id: 'services',
    title: 'خدمات',
    image: '/Images/خدمات.png',
    href: '/services'
  },
    {
    id: 'accident-cars',
    title: 'سيارات حوادث و سكراب',
    image: '/Images/سيارات حوادث.png',
    href: '/accident-cars'
  },
  {
    id: 'showrooms',
    title: 'معارض',
    image: '/Images/معارض.png',
    href: '/showrooms'
  }
]

export const Products: ProductType[] = [
    {
        id: 1,
        title: 'مكتبة الشوا��ع الأخرى',
        price: 15000,
        image: '/Images/product.png',
        href: '/product/1',
        location: 'القاهرة',
        typeCar: 'سيارات ��ديدة',
        speedometer: '25000',
        special: true,
        category: 'cars'
  },
    {
        id: 2,
        title: 'مكتبة الشوا��ع الأخرى',
        price: 15000,
        image: '/Images/product.png',
        href: '/product/1',
        location: 'القاهرة',
        typeCar: 'سيارات ��ديدة',
        speedometer: '25000',
        special: true,
        category: 'cars'
  },
    {
        id: 3,
        title: 'مكتبة الشوا��ع الأخرى',
        price: 15000,
        image: '/Images/product.png',
        href: '/product/1',
        location: 'القاهرة',
        typeCar: 'سيارات ��ديدة',
        speedometer: '25000',
        special: true,
        category: 'cars'
  },
    {
        id: 4,
        title: 'مكتبة الشوا��ع الأخرى',
        price: 15000,
        image: '/Images/product.png',
        href: '/product/1',
        location: 'القاهرة',
        typeCar: 'سيارات ��ديدة',
        speedometer: '25000',
        special: true,
        category: 'cars'
  },
    {
        id: 5,
        title: 'مكتبة الشوا��ع الأخرى',
        price: 15000,
        image: '/Images/product.png',
        href: '/product/1',
        location: 'القاهرة',
        typeCar: 'سيارات ��ديدة',
        speedometer: '25000',
        special: true,
        category: 'cars'
  },
]