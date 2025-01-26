import { Breadcrumbs } from "@/components/Breadcrumbs ";
import AsideUser from "@/components/AsideUser";
import PaymentForm from "@/components/auth/PaymentForm";

const AddPaymentPage = () => {
  return (
    <div className="bg-secondary">
      <div className="container w-full py-10">
        <Breadcrumbs />
      </div>

      <main className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-[240px,1fr] gap-8">
          <AsideUser />

          <PaymentForm />
        </div>
      </main>
    </div>
  );
};

export default AddPaymentPage;
