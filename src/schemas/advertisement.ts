import * as z from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

export const formSchema = z.object({
  name: z.string().min(1, { message: "الاسم مطلوب" }),
  countryCode: z.string(),
  PhoneNumber: z
    .string()
    .min(9, "رقم الهاتف يجب أن يكون 9 أرقام على الأقل")
    .max(15, "رقم الهاتف يجب أن لا يتجاوز 15 رقم"),
  country: z.string().min(1, { message: "الدولة مطلوبة" }),
  city: z.string().min(1, { message: "المدينة مطلوبة" }),
  address: z.string().min(1, { message: "العنوان مطلوب" }),
  mainImage: z
    .custom<FileList>()
    .refine((files) => files?.length >= 1, "الصورة مطلوبة")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "حجم الملف يجب أن يكون أقل من 10MB"
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "نوع الملف غير مدعوم"
    ),
  additionalImages: z
    .custom<FileList>()
    .refine(
      (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
      "حجم الملف يجب أن يكون أقل من 10MB"
    )
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ACCEPTED_FILE_TYPES.includes(file.type)
        ),
      "نوع الملف غير مدعوم"
    )
    .optional(),
  whatsappPreferred: z.boolean().default(false),
  featured: z.boolean().default(false),
});

export const vehicleFormSchema = z.object({
  brand: z.string().min(1, { message: "الماركة مطلوبة" }),
  financing: z.string().min(1, { message: "التمويل مطلوب" }),
  bodyType: z.string().min(1, { message: "الهيكل مطلوب" }),
  transmission: z.string().min(1, { message: "ناقل الحركة مطلوب" }),
  fuelType: z.string().min(1, { message: "نوع الوقود مطلوب" }),
  regionalSpecs: z.string().min(1, { message: "المواصفات الإقليمية مطلوبة" }),
  engineCapacity: z.string().min(1, { message: "سعة المحرك مطلوبة" }),
  horsePower: z.string().min(1, { message: "قوة الحصان مطلوبة" }),
  seatsCount: z.string().min(1, { message: "عدد المقاعد مطلوب" }),
  cylindersCount: z.string().min(1, { message: "عدد الاسطوانات مطلوب" }),
  exteriorColor: z.string().min(1, { message: "اللون الخارجي مطلوب" }),
  interiorColor: z.string().min(1, { message: "اللون الداخلي مطلوب" }),
  priceInDirhams: z.string().min(1, { message: "السعر مطلوب" }),
  manufacturingYear: z.string().min(1, { message: "سنة الصنع مطلوبة" }),
  condition: z.string().min(1, { message: "الحالة مطلوبة" }),
  conditionPrice: z.string().min(1, { message: "الحالة مطلوبة" }),
  mileage: z.string().min(1, { message: "المسافة المقطوعة مطلوبة" }),
  Warranty: z.string().min(1, { message: "الضمان مطلوب" }),
  description: z.string().min(1, { message: "الوصف مطلوب" }),
});

export type FormValues = z.infer<typeof formSchema>;
export type VehicleFormValues = z.infer<typeof vehicleFormSchema>;
