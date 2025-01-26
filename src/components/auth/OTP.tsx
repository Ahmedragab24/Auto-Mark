"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { OTPFormValues, otpSchema } from "@/schemas";
import { ModelType } from "./LoginModel";

interface OTPVerificationProps {
  setTypeModel: (type: ModelType) => void;
}

export default function OTPVerification({
  setTypeModel,
}: OTPVerificationProps) {
  const [timer, setTimer] = useState(20);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const form = useForm<OTPFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    setCanResend(false);
    setTimer(20);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResend = () => {
    if (canResend) {
      // Here you would implement your OTP resend logic
      console.log("Resending OTP...");
      startTimer();
      form.reset();
      inputRefs.current[0]?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;
  };

  const handleInputChange = (index: number, value: string) => {
    const newValue = value.replace(/[^0-9]/g, "");

    if (newValue.length <= 1) {
      const otpArray = form.getValues("otp")?.split("") || Array(5).fill("");
      otpArray[index] = newValue;
      form.setValue("otp", otpArray.join(""));

      if (newValue.length === 1 && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && !form.getValues("otp")[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  function onSubmit(data: OTPFormValues) {
    console.log(data);
    // Handle OTP verification
    setTypeModel("ChangePassword");
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1 text-center">
        <p className="text-sm text-muted-foreground">
          لقد ارسلنا رسالة قصيرة تحتوي على رمز التفعيل
          <br />
          على هاتفك
          <span className="px-2 text-primary" dir="ltr">
            +971 248 567 4 11
          </span>
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            dir="rtl"
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center gap-2">
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <input
                            key={index}
                            ref={(el) => {
                              inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={field.value[index] || ""}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-12 h-12 text-lg text-center border-2 rounded-lg outline-none focus:border-red-500 focus:ring-red-500"
                          />
                        ))}
                    </div>
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Button
                  type="button"
                  variant="link"
                  className={`p-0 h-auto ${
                    !canResend
                      ? "text-primary cursor-not-allowed"
                      : "text-primary"
                  }`}
                  onClick={handleResend}
                  disabled={!canResend}
                >
                  {canResend ? "ارسل الكود مرة اخرى" : formatTime(timer)}
                </Button>
              </div>

              <Button type="submit" className="w-full">
                تأكيد
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
