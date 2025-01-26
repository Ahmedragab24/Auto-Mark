import { Breadcrumbs } from "@/components/Breadcrumbs ";
import AsideUser from "@/components/AsideUser";
import UserAddresses from "@/components/auth/UserAddresses";

const UserAccount = () => {
  return (
    <div className="min-h-screen bg-secondary pb-10">
      <div className="container w-full py-10">
        <Breadcrumbs />
      </div>

      <main className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-[240px,1fr] gap-8">
          <AsideUser />

          <UserAddresses />
        </div>
      </main>
    </div>
  );
};

export default UserAccount;
