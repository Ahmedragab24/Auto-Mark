import { Breadcrumbs } from "@/components/Breadcrumbs ";
import AsideUser from "@/components/AsideUser";
import CreditCardList from "@/components/auth/PaymentUser";

const PaymentPage = () => {
  return (
    <div className="bg-secondary">
      <div className="container w-full py-10">
        <Breadcrumbs />
      </div>

      <main className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-[240px,1fr] gap-8">
          <AsideUser />

          <CreditCardList />
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
