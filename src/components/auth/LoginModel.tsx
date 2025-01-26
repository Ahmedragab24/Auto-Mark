"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ForgetPassword from "./ForgetPassword";
import RegisterForm from "./register-Form";
import LoginForm from "./login-Form";
import OTPVerification from "./OTP";
import PasswordOTPForm from "./ChangePasswordInOTP";
import TypeRegister from "./TypeRegister";
import ExRegistrationForm from "../exhibitions/ExhibitionsRegister";

interface LoginModelProps {
  className?: string;
  children: React.ReactNode;
}

export type ModelType =
  | "Login"
  | "Register"
  | "RegisterStepTwo"
  | "ForgetPassword"
  | "OTP"
  | "ChangePassword"
  | "ExhibitionsRegister";

const LoginModel: React.FC<LoginModelProps> = ({ className, children }) => {
  const [typeModel, setTypeModel] = React.useState<ModelType>("Login");
  const [isOpen, setIsOpen] = React.useState(false);

  const dialogTitles: Record<ModelType, string> = {
    Login: "اهلا بعودتك",
    Register: "إنشاء حساب جديد",
    RegisterStepTwo: "مرحبا بك في اوتو مارك",
    ForgetPassword: "استعادة كلمة المرور",
    OTP: "أدخل كود التحقق",
    ChangePassword: "تعيين كلمة المرور",
    ExhibitionsRegister: "أنشاء حساب جديد",
  };

  const dialogDescriptions: Record<ModelType, string> = {
    Login: "ادخل بيانات حسابك حتى تتمكن من الدخول",
    Register: "من الرائع الانضمام إلينا لتحظى الى تجربة مميزة",
    RegisterStepTwo: "اختر نوع حسابك وابدأ رحلتك واستمتع بتجربة مميزة",
    ForgetPassword: "أدخل رقم هاتفك لاستعادة كلمة المرور",
    OTP: "",
    ChangePassword: "الرجاء كتابة شيء تتذكره في المستقبل",
    ExhibitionsRegister: "من الرائع الانضمام إلينا نتمنى لك تجربة مميزة",
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="py-10">
        <DialogHeader className="flex flex-col gap-2 !text-center">
          <DialogTitle>
            {dialogTitles[typeModel]}
            <span role="img" aria-label="welcome" className="mx-2 text-2xl">
              {typeModel === "Login" && "😍"}
              {typeModel === "Register" ||
                (typeModel === "RegisterStepTwo" && "👋") ||
                (typeModel === "ExhibitionsRegister" && "👋")}
              {typeModel === "OTP" && "🔒"}
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            {dialogDescriptions[typeModel]}
          </DialogDescription>
        </DialogHeader>
        {typeModel === "Login" && <LoginForm setTypeModel={setTypeModel} />}
        {typeModel === "Register" && (
          <RegisterForm setTypeModel={setTypeModel} />
        )}
        {typeModel === "RegisterStepTwo" && (
          <TypeRegister setTypeModel={setTypeModel} />
        )}
        {typeModel === "ForgetPassword" && (
          <ForgetPassword setTypeModel={setTypeModel} />
        )}
        {typeModel === "OTP" && <OTPVerification setTypeModel={setTypeModel} />}
        {typeModel === "ChangePassword" && <PasswordOTPForm />}
        {typeModel === "ExhibitionsRegister" && (
          <ExRegistrationForm setIsOpen={setIsOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModel;
