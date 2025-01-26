"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { vehicleFormSchema, VehicleFormValues } from "@/schemas/advertisement";
import { useRouter } from "next/navigation";

export function AddScrapFormStepTow() {
  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: {
      brand: "",
      financing: "",
      bodyType: "",
      transmission: "",
      fuelType: "",
      regionalSpecs: "",
      engineCapacity: "",
      horsePower: "",
      seatsCount: "",
      cylindersCount: "",
      exteriorColor: "",
      interiorColor: "",
      priceInDirhams: "",
      manufacturingYear: "",
      condition: "",
      conditionPrice: "",
      mileage: "",
      Warranty: "",
      description: "",
    },
  });
  const router = useRouter();

  function onSubmit(data: VehicleFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-[80%] mx-auto space-y-6"
        dir="rtl"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الماركة *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="البراند" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="toyota">تويوتا</SelectItem>
                    <SelectItem value="honda">هوندا</SelectItem>
                    <SelectItem value="nissan">نيسان</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="engineCapacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>سعة المحرك *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1600" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="financing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>التمويل *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="نوع التمويل" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cash">كاش</SelectItem>
                    <SelectItem value="installment">تقسيط</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="horsePower"
            render={({ field }) => (
              <FormItem>
                <FormLabel>قوة الحصان *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="800" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bodyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الهيكل *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="سيدان" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sedan">سيدان</SelectItem>
                    <SelectItem value="suv">دفع رباعي</SelectItem>
                    <SelectItem value="hatchback">هاتشباك</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seatsCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>عدد المقاعد *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="4" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ناقل الحركة *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اوتوماتيك" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="automatic">اوتوماتيك</SelectItem>
                    <SelectItem value="manual">يدوي</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cylindersCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>عدد الاسطوانات *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نوع الوقود *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="بنزين" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="petrol">بنزين</SelectItem>
                    <SelectItem value="diesel">ديزل</SelectItem>
                    <SelectItem value="electric">كهربائي</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exteriorColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اللون الخارجي *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر اللون" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="black">أسود</SelectItem>
                    <SelectItem value="white">أبيض</SelectItem>
                    <SelectItem value="silver">فضي</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="regionalSpecs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المواصفات الاقليمية *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="مواصفات خليجية" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gcc">مواصفات خليجية</SelectItem>
                    <SelectItem value="american">مواصفات أمريكية</SelectItem>
                    <SelectItem value="european">مواصفات أوروبية</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interiorColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اللون الداخلي *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر اللون" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="black">أسود</SelectItem>
                    <SelectItem value="beige">بيج</SelectItem>
                    <SelectItem value="brown">بني</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="manufacturingYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>سنة الصنع *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="2020" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceInDirhams"
            render={({ field }) => (
              <FormItem>
                <FormLabel>السعر بالدرهم *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="200000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الحالة *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="جديد" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">جديد</SelectItem>
                    <SelectItem value="used">مستعمل</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="conditionPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>حالة السعر *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="قابلة للتفاوض" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">قابلة للتفاوض</SelectItem>
                    <SelectItem value="used">غير قابلة للتفاوض</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mileage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المسافة المقطوعة *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="50000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Warranty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الضمان *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="دبي" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dubai">يوجد</SelectItem>
                    <SelectItem value="abudhabi">لايوجد</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الوصف *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="اكتب وصفاً تفصيلياً هنا"
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-8">
          <Button size={"lg"} type="submit" className="md:px-20 w-fit">
            حفظ
          </Button>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="md:px-20 w-fit"
            onClick={() => router.back()}
          >
            العودة
          </Button>
        </div>
      </form>
    </Form>
  );
}
