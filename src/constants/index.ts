import { navigationLinkType } from "@/types";

export const navigationLink: navigationLinkType[] = [
  { title: "الرئيسية", href: "/" },
  { title: "الأقسام", href: "/categories" },
  { title: "إعلاناتي", href: "/banner" },
];

export const country = [
  { name: "السعودية", value: "SAU" },
  { name: "البحرين", value: "BHR" },
  { name: "الإمارات", value: "ARE" },
  { name: "عمان", value: "OMN" },
  { name: "مصر", value: "EGY" },
];

export const arabCountries = [
  {
    name: "الإمارات",
    code: "AE",
    dialCode: "+971",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    name: "السعودية",
    code: "SA",
    dialCode: "+966",
    flag: "https://flagcdn.com/w320/sa.png",
  },
  {
    name: "مصر",
    code: "EG",
    dialCode: "+20",
    flag: "https://flagcdn.com/w320/eg.png",
  },
  {
    name: "قطر",
    code: "QA",
    dialCode: "+974",
    flag: "https://flagcdn.com/w320/qa.png",
  },
  {
    name: "الكويت",
    code: "KW",
    dialCode: "+965",
    flag: "https://flagcdn.com/w320/kw.png",
  },
  {
    name: "البحرين",
    code: "BH",
    dialCode: "+973",
    flag: "https://flagcdn.com/w320/bh.png",
  },
  {
    name: "عمان",
    code: "OM",
    dialCode: "+968",
    flag: "https://flagcdn.com/w320/om.png",
  },
  {
    name: "العراق",
    code: "IQ",
    dialCode: "+964",
    flag: "https://flagcdn.com/w320/iq.png",
  },
  {
    name: "الأردن",
    code: "JO",
    dialCode: "+962",
    flag: "https://flagcdn.com/w320/jo.png",
  },
  {
    name: "لبنان",
    code: "LB",
    dialCode: "+961",
    flag: "https://flagcdn.com/w320/lb.png",
  },
  {
    name: "اليمن",
    code: "YE",
    dialCode: "+967",
    flag: "https://flagcdn.com/w320/ye.png",
  },
  {
    name: "سوريا",
    code: "SY",
    dialCode: "+963",
    flag: "https://flagcdn.com/w320/sy.png",
  },
  {
    name: "السودان",
    code: "SD",
    dialCode: "+249",
    flag: "https://flagcdn.com/w320/sd.png",
  },
  {
    name: "ليبيا",
    code: "LY",
    dialCode: "+218",
    flag: "https://flagcdn.com/w320/ly.png",
  },
  {
    name: "تونس",
    code: "TN",
    dialCode: "+216",
    flag: "https://flagcdn.com/w320/tn.png",
  },
  {
    name: "الجزائر",
    code: "DZ",
    dialCode: "+213",
    flag: "https://flagcdn.com/w320/dz.png",
  },
  {
    name: "المغرب",
    code: "MA",
    dialCode: "+212",
    flag: "https://flagcdn.com/w320/ma.png",
  },
];

export const cities = {
  AE: [
    { name: "أبو ظبي", value: "abudhabi" },
    { name: "دبي", value: "dubai" },
    { name: "الشارقة", value: "sharjah" },
    { name: "العين", value: "alain" },
    { name: "عجمان", value: "ajman" },
  ],
  SA: [
    { name: "الرياض", value: "riyadh" },
    { name: "جدة", value: "jeddah" },
    { name: "الدمام", value: "dammam" },
    { name: "مكة المكرمة", value: "mecca" },
    { name: "المدينة المنورة", value: "medina" },
  ],
  EG: [
    { name: "القاهرة", value: "cairo" },
    { name: "الإسكندرية", value: "alexandria" },
    { name: "الجيزة", value: "giza" },
    { name: "بورسعيد", value: "portsaid" },
    { name: "الأقصر", value: "luxor" },
  ],
  QA: [
    { name: "الدوحة", value: "doha" },
    { name: "الريان", value: "alrayyan" },
    { name: "الوكرة", value: "alwakrah" },
  ],
  KW: [
    { name: "مدينة الكويت", value: "kuwait-city" },
    { name: "حولي", value: "hawalli" },
    { name: "الأحمدي", value: "alahmadi" },
  ],
  BH: [
    { name: "المنامة", value: "manama" },
    { name: "المحرق", value: "muharraq" },
    { name: "الرفاع", value: "alriffa" },
  ],
  OM: [
    { name: "مسقط", value: "muscat" },
    { name: "صلالة", value: "salalah" },
    { name: "نزوى", value: "nizwa" },
  ],
  IQ: [
    { name: "بغداد", value: "baghdad" },
    { name: "البصرة", value: "basra" },
    { name: "الموصل", value: "mosul" },
    { name: "أربيل", value: "erbil" },
  ],
  JO: [
    { name: "عمان", value: "amman" },
    { name: "إربد", value: "irbid" },
    { name: "الزرقاء", value: "zarqa" },
  ],
  LB: [
    { name: "بيروت", value: "beirut" },
    { name: "طرابلس", value: "tripoli" },
    { name: "صيدا", value: "saida" },
  ],
  YE: [
    { name: "صنعاء", value: "sanaa" },
    { name: "عدن", value: "aden" },
    { name: "تعز", value: "taiz" },
  ],
  SY: [
    { name: "دمشق", value: "damascus" },
    { name: "حلب", value: "aleppo" },
    { name: "اللاذقية", value: "latakia" },
  ],
  SD: [
    { name: "الخرطوم", value: "khartoum" },
    { name: "أم درمان", value: "omdurman" },
    { name: "بور سودان", value: "portsudan" },
  ],
  LY: [
    { name: "طرابلس", value: "tripoli" },
    { name: "بنغازي", value: "benghazi" },
    { name: "مصراتة", value: "misrata" },
  ],
  TN: [
    { name: "تونس", value: "tunis" },
    { name: "صفاقس", value: "sfax" },
    { name: "سوسة", value: "sousse" },
  ],
  DZ: [
    { name: "الجزائر", value: "algiers" },
    { name: "وهران", value: "oran" },
    { name: "قسنطينة", value: "constantine" },
  ],
  MA: [
    { name: "الرباط", value: "rabat" },
    { name: "الدار البيضاء", value: "casablanca" },
    { name: "مراكش", value: "marrakech" },
    { name: "فاس", value: "fes" },
  ],
};

export const citiesArray = [
  { name: "العين", value: "alain" },
  { name: "أبو ظبي", value: "abudhabi" },
  { name: "دبي", value: "dubai" },
  { name: "الرياض", value: "riyadh" },
  { name: "جدة", value: "jeddah" },
  { name: "مدينة الكويت", value: "kuwait-city" },
];

export const carType = [
  { name: "سيارات جديدة", value: "new" },
  { name: "سيارات متجرية", value: "commercial" },
  { name: "سيارات سويد", value: "suv" },
  { name: "سيارات سيدان", value: "sedan" },
  { name: "سيارات رياضية", value: "sports" },
];

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
  { name: "نيسان", value: "nissan" },
  { name: "سوزوكي", value: "suzuki" },
  { name: "سيارات سويد", value: "suv" },
  { name: "سيارات سيدان", value: "sedan" },
  { name: "سيارات رياضية", value: "sports" },
];

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
];

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
];

export const categories = [
  {
    id: "cars",
    title: "سيارات",
    image: "/Images/سيارات.png",
    href: "/cars",
  },
  {
    id: "spare-parts",
    title: "قطع غيار",
    image: "/Images/قطع غيار.png",
    href: "/spare-parts",
  },
  {
    id: "car-numbers",
    title: "ارقام سيارات",
    image: "/Images/لوحات.png",
    href: "/car-numbers",
  },
  {
    id: "services",
    title: "خدمات",
    image: "/Images/خدمات.png",
    href: "/services",
  },
  {
    id: "accident-cars",
    title: "سيارات حوادث و سكراب",
    image: "/Images/سيارات حوادث.png",
    href: "/accident-cars",
  },
  {
    id: "showrooms",
    title: "معارض",
    image: "/Images/معارض.png",
    href: "/showrooms",
  },
];

export const languages = [
  { code: "ar", name: "العربية", flag: "/Flags/Saudi Arabia (SA).png" },
  { code: "en", name: "English", flag: "/Flags/United Kingdom (GB).png" },
];

export const UserLink = [
  {
    name: "حسابي",
    href: "/user",
    href2: "/user/change-Password",
    image: "/Icons/identity-card.png",
    alt: "identity",
  },
  {
    name: "عناويني",
    href: "/user/address",
    href2: "/user/address/add-address",
    image: "/Icons/location.png",
    alt: "Address",
  },
  {
    name: "بطاقات الدفع",
    href: "/user/payment",
    href2: "/user/payment/add-payment",
    image: "/Icons/credit-card.png",
    alt: "payment",
  },
  {
    name: "ترقية حسابي",
    href: "/user/upgrade-account",
    image: "/Icons/award-02.png",
    alt: "newt",
  },
  {
    name: "تسجيل الخروج",
    href: "/",
    image: "/Icons/logout-01.png",
    alt: "logout",
  },
];

export const addresses = [
  {
    id: 1,
    city: "ابو ظبي",
    address: "25 شارع الشيخ المكتوي، شارع هزاع الشيخ خليفة",
    phone: "971+ 1234 56789 910",
  },
  {
    id: 2,
    city: "ابو ظبي",
    address: "25 شارع الشيخ المكتوي، شارع هزاع الشيخ خليفة",
    phone: "971+ 1234 56789 910",
  },
  {
    id: 3,
    city: "ابو ظبي",
    address: "25 شارع الشيخ المكتوي، شارع هزاع الشيخ خليفة",
    phone: "971+ 1234 56789 910",
  },
];

export const specializations = [
  { name: "الكل", value: "all" },
  { name: "تقنية المعلومات", value: "it" },
  { name: "الطب", value: "medical" },
  { name: "الهندسة", value: "engineering" },
];
