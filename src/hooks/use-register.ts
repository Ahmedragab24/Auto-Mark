import { useState } from "react";
import { usePostRegisterMutation } from "@/store/apis/auth";
import { RegisterFormData } from "@/schemas";

export const useRegister = () => {
  const [postRegister] = usePostRegisterMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await postRegister(data).unwrap();
      return result;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى."
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
