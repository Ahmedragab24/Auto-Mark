import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import ProductCart from "./ProductCart";
import LocationCart from "./LocationCart";
import { Button } from "./ui/button";

interface LocationCardProps {
  variant: "car" | "map";
  title: string;
  price?: string;
  location: string;
  phone?: string;
  imageUrl: string;
  isFavorite?: boolean;
  typeCar?: string;
  Speedometer?: string;
}

export function Cart({
  variant,
  title,
  price,
  location,
  phone,
  imageUrl,
  typeCar,
  Speedometer,
}: LocationCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rtl">
      <div className="relative">
        {/* Image Container with exact padding */}
        <div className="relative h-56 w-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-3xl"
          />
          {variant === "car" && (
            <div className="relative top-8 flex items-center gap-2">
              <Button
                variant={"secondary"}
                size={"icon"}
                className="absolute left-4 rounded-full"
              >
                <Image
                  src="/Icons/redHeart.png"
                  alt="heart"
                  width={20}
                  height={20}
                  className="text-primary"
                />
              </Button>
              <span className="absolute right-4 rounded-lg gradient-spacial px-4 py-2 text-bodyS font-medium">
                مميز
              </span>
            </div>
          )}
          {variant === "map" && (
            <div className="absolute left-2 top-0">
              <Button variant="secondary" size="sm" className="!text-bodyS">
                <MapPin size={20} />
                عرض على الخريطة
              </Button>
            </div>
          )}
        </div>

        {/* Content Container */}
        {variant === "car" && (
          <ProductCart
            title={title}
            price={price}
            location={location}
            typeCar={typeCar}
            Speedometer={Speedometer}
          />
        )}
        {variant === "map" && (
          <LocationCart title={title} location={location} phone={phone} />
        )}
      </div>
    </Card>
  );
}
