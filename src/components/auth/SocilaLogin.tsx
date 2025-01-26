import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Button
        variant="outline"
        className="justify-center w-full gap-2 !text-bodyS "
        type="button"
      >
        <Image
          src="/Logo/facebook logo.png"
          alt="facebook"
          width={20}
          height={20}
          className="w-4 h-4"
        />
        تسجيل الدخول بإستخدام الفيسبوك
      </Button>

      <Button
        variant="outline"
        className="justify-center w-full gap-2 !text-bodyS"
        type="button"
      >
        <Image
          src="/Logo/Google logo.png"
          alt="google"
          width={20}
          height={20}
          className="w-4 h-4"
        />
        تسجيل الدخول بإستخدام جوجل
      </Button>
    </div>
  );
}
