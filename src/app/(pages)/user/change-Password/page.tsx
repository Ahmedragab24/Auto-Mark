import AsideUser from "@/components/AsideUser";
import PasswordForm from "@/components/auth/ChangePasswordForm";
import { Breadcrumbs } from "@/components/Breadcrumbs ";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <div className="bg-secondary">
      <div className="container w-full py-10">
        <Breadcrumbs />
      </div>

      <main className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-[240px,1fr] gap-8">
          <AsideUser />

          <PasswordForm />
        </div>
      </main>
    </div>
  );
};

export default ChangePasswordPage;
