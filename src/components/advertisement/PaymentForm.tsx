"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { FormSchema } from "@/schemas/payment";

export default function PaymentForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "creditCard",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      saveCard: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className=" border-2 border-border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-right">
          معلومات الدفع
        </CardTitle>
      </CardHeader>
      <CardContent className=" space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-sm font-regular text-gray-500">
                    أختر وسيلة الدفع
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="group flex items-center space-x-3 space-y-0 border py-2 px-4 justify-between rounded-lg focus-within:border-red-500 focus-within:bg-red-50">
                        <FormControl>
                          <RadioGroupItem value="creditCard" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2 peer-focus:text-red-500">
                          بطاقة ائتمان
                          <Image
                            src="/Logo/pament logo (1).png"
                            alt="Credit Card Logo"
                            width={40}
                            height={40}
                            className="w-7 h-7"
                          />
                        </FormLabel>
                      </FormItem>

                      <FormItem className="group flex items-center space-x-3 space-y-0 border py-2 px-4 justify-between rounded-lg focus-within:border-red-500 focus-within:bg-red-50">
                        <FormControl>
                          <RadioGroupItem value="paypal" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2 peer-focus:text-red-500">
                          باي بال
                          <Image
                            src="/Logo/pament logo.png"
                            alt="PayPal Logo"
                            width={40}
                            height={40}
                            className="w-7 h-7"
                          />
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-1 text-sm text-right">
                    الاسم على البطاقة *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-right h-12"
                      placeholder="اسم صاحب البطاقة"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-1 text-sm text-right">
                    رقم البطاقة *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-right h-12"
                      placeholder="xxxx xxxx xxxx xxxx"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-1 text-sm text-right">
                      الرقم السري
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-right h-12"
                        placeholder="123"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-1 text-sm text-right">
                      تاريخ الانتهاء *
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-righ h-12"
                        placeholder="05/25"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="saveCard"
              render={({ field }) => (
                <FormItem className="flex flex-row-reverse items-center justify-between">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-red-500"
                    />
                  </FormControl>
                  <FormLabel className="text-sm">حفظ معلومات البطاقة</FormLabel>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12">
              700 / درهم
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
