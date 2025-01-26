import { Breadcrumbs } from "@/components/Breadcrumbs ";
import AsideUser from "@/components/AsideUser";
import EditAddressForm from "@/components/auth/EditeAddressForm";

const EditAddressPage = () => {
  return (
    <div className="bg-secondary">
      <div className="container w-full py-10">
        <Breadcrumbs />
      </div>

      <main className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-[240px,1fr] gap-8">
          <AsideUser />

          <EditAddressForm />
        </div>
      </main>
    </div>
  );
};

export default EditAddressPage;
