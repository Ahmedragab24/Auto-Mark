import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CreditCard {
  id: string;
  holderName: string;
  lastFourDigits: string;
  expiryDate: string;
}

export default function CreditCardList() {
  const cards: CreditCard[] = [
    {
      id: "1",
      holderName: "أحمد جمال",
      lastFourDigits: "20",
      expiryDate: "05/2000",
    },
    {
      id: "2",
      holderName: "أحمد جمال",
      lastFourDigits: "20",
      expiryDate: "05/2000",
    },
  ];

  return (
    <div className="w-full mx-auto p-8 flex flex-col gap-4 bg-background rounded-xl">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="p-4 lg:px-28 lg:py-10 flex  justify-between border border-border rounded-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-auto">
              <Image
                src="/Logo/logos_visa.png"
                alt="Visa Logo"
                className="w-full h-auto"
                width={200}
                height={200}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 text-right">
              <h3 className="font-medium text-lg">{card.holderName}</h3>
              <p className="text-sm text-gray-600">
                **** **** **** {card.lastFourDigits}
              </p>
              <p className="text-sm text-gray-600">{card.expiryDate}</p>
            </div>
          </div>

          <Button
            variant={"ghost"}
            className=" transition-colors rounded-full p-2"
          >
            <Link href="/user/payment/edit-payment">
              <Image
                src="/Icons/pencil-edit-02.png"
                alt="Edit"
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </Card>
      ))}

      <Button variant="secondary" className="w-[60%] mx-auto  h-12">
        <Link href="/user/payment/add-payment">اضف بطاقة جديدة</Link>
      </Button>
    </div>
  );
}
