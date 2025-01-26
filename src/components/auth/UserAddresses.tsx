import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { addresses } from "@/constants";

const UserAddresses = () => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-background rounded-xl" dir="rtl">
      {addresses.map((address) => (
        <Card
          key={address.id}
          className="overflow-hidden bg-transparent border border-border rounded-xl"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{address.city}</h3>
                <p className="text-gray-600">{address.address}</p>
                <p className="text-gray-600">{address.phone}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-600"
              >
                <Link href={"/user/address/edit-address"}>
                  <Image
                    src={"/Icons/pencil-edit-02.png"}
                    alt="edit"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button size={"lg"} variant="secondary" className="w-full h-12">
        <Link href={"/user/address/add-address"}>أضف عنوان جديد</Link>
      </Button>
    </div>
  );
};

export default UserAddresses;
