"use client";

import { AlertTriangle, Car, Store } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";

interface AccountTypeOption {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const accountTypes: AccountTypeOption[] = [
  {
    id: "merchant",
    title: "معرض",
    icon: <Store className="!w-20 !h-20 text-gray-500" />,
  },
  {
    id: "dealer",
    title: "تاجر",
    icon: <Car className="!w-20 !h-20 text-gray-500" />,
  },
];

export default function AccountTypeSelector() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Card className="w-full p-12">
      <div
        className="max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col gap-10"
        dir="rtl"
      >
        {/* Header */}
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">✨ هل تريد ترقية حسابك؟</h2>
          <p className="text-sm text-muted-foreground">
            يمكنك التحول الان الى اي نوع من حسابات و استمتع بمميزات خاصة في
            حسابك
          </p>
        </div>

        {/* Account Type Selection */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          {accountTypes.map((type) => (
            <Button
              variant={"outline"}
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={cn(
                "relative w-auto h-auto rounded-2xl border-2 px-20 py-8 flex flex-col items-center justify-center gap-2 transition-all group",
                selectedType === type.id
                  ? "border-primary bg-background text-primary"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              {type.icon}
              <span className="font-medium">{type.title}</span>
            </Button>
          ))}
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-2 p-4 text-sm rounded-lg bg-yellow-50 dark:bg-yellow-500 ">
          <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-900 shrink-0 mt-0.5" />
          <p className="text-muted-foreground dark:text-white">
            المستخدم والتاجر ليس لهما محتوى متشابه ( بروفايل ), لغرض استخدامها
            اما المعرض له صفحة اعلانات بشكل مختلف
          </p>
        </div>
      </div>
    </Card>
  );
}
