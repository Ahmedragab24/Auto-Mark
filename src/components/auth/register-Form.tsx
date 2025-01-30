"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { registerSchema, type RegisterFormData } from "@/schemas";
import type { ModelType } from "./LoginModel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NameInput } from "./NameInput";
import { EmailInput } from "./EmailInput";
import { PasswordInputReg } from "./PasswordInputReg";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { arabCountries } from "@/constants";
import { ScrollArea } from "../ui/scroll-area";
import { usePostRegisterMutation } from "@/store/apis/auth";
import { Loader } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import { providerRegisterType, TypeRegister } from "@/types";

interface RegisterFormProps {
  setTypeModel: (type: ModelType) => void;
}

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>حدث خطأ في تحميل النموذج:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>أعد المحاولة</button>
    </div>
  );
}

export default React.memo(function RegisterForm({
  setTypeModel,
}: RegisterFormProps) {
  const [postRegister, { isLoading }] = usePostRegisterMutation();
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "ahmed",
      login_type: "normal",
      email: "ahmed@gmail.com",
      phone: "0123456789",
      password: "Superahmed24",
      iso_code: "+971",
      type: "user",
    },
  });

  const router = useRouter();

  const onSubmit = useCallback(
    async (values: RegisterFormData) => {
      try {
        const requestData = {
          name: values.name,
          login_type: "normal" as providerRegisterType,
          email: values.email,
          phone: values.phone,
          password: values.password,
          iso_code: values.iso_code,
          type: "user" as TypeRegister,
        };
        const result = await postRegister(requestData).unwrap();

        localStorage.setItem("userDataAutoMark", JSON.stringify(result));
        setTypeModel("RegisterStepTwo");
        form.reset();
        router.push("/dashboard"); // Redirect to dashboard or appropriate page
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.";
        toast({
          title: "خطأ",
          description: errorMessage,
          variant: "destructive",
        });
      }
    },
    [postRegister, setTypeModel, form, router]
  );

  return (
    <div className="flex items-center justify-center w-full" dir="rtl">
      <ScrollArea className="w-full md:max-w-lg py-10 px-6 rounded-lg shadow-md h-[75vh]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center w-full gap-3 px-4"
            >
              <NameInput form={form} />
              <div
                className={`flex flex-col gap-3 ${
                  form.formState.errors.phone?.message && "mb-8"
                }`}
              >
                <FormLabel className="font-regular">رقم الهاتف</FormLabel>

                <div
                  className="relative flex items-center w-full border rounded-md focus-within:border-primary"
                  dir="rtl"
                >
                  {/* قائمة الدول */}
                  <div className="flex-shrink-0 border-l border-border">
                    <FormField
                      control={form.control}
                      name="iso_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              defaultValue={field.value}
                              {...field}
                              value={field.value}
                              onValueChange={(value) => field.onChange(value)}
                            >
                              <SelectTrigger className="relative z-10 w-full h-10 border-r rounded-none !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {arabCountries.map((country) => (
                                  <SelectItem
                                    key={country.code}
                                    value={country.dialCode}
                                  >
                                    <div className="flex items-center gap-2 px-1">
                                      <Image
                                        src={country.flag || "/placeholder.svg"}
                                        alt={country.name}
                                        width={20}
                                        height={20}
                                        className="w-4 h-4 rounded-sm"
                                      />
                                      <span>{country.dialCode}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* حقل إدخال رقم الهاتف */}
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="number"
                              className="text-right !border-none !ring-0 !outline-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-within:ring-0 shadow-none no-arrows !m-0 rounded-none"
                              placeholder="رقم الهاتف"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="absolute z-10 right-2 -bottom-6" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <EmailInput form={form} />
              <PasswordInputReg form={form} name="password" />
              {/* <PasswordInputReg form={form} name="confirmPassword" /> */}

              <Button type="submit" className="w-full">
                إنشاء حساب
              </Button>

              <div className="text-center" dir="rtl">
                <span className="text-sm text-gray-500">
                  أنت مستخدم بالفعل؟
                </span>
                <Button
                  variant="link"
                  className="hover:underline"
                  onClick={() => setTypeModel("Login")}
                >
                  {isLoading ? (
                    <div>
                      <Loader className="animate-spin" />
                      <p className="ml-2">تحميل...</p>
                    </div>
                  ) : (
                    <p> تسجيل دخول</p>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </ErrorBoundary>
      </ScrollArea>
    </div>
  );
});
