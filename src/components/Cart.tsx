import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import ProductCart from "./ProductCart";
import LocationCart from "./LocationCart";
import { Button } from "./ui/button";

interface IProps {
  variant: "car" | "map";
  title: string;
  price?: number;
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
}: IProps) {
  return (
    <Card className="w-full overflow-hidden rtl">
      <div className="relative">
        {/* Image Container with exact padding */}
        <div className="relative w-full h-56">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-3xl"
          />
          {variant === "car" && (
            <div className="relative flex items-center gap-2 top-8">
              <Button
                variant={"secondary"}
                size={"icon"}
                className="absolute rounded-full left-4"
              >
                <Image
                  src="/Icons/redHeart.png"
                  alt="heart"
                  width={20}
                  height={20}
                  className="text-primary"
                />
              </Button>
              <span className="absolute px-4 py-2 font-medium rounded-lg right-4 gradient-spacial text-bodyS">
                مميز
              </span>
            </div>
          )}
          {variant === "map" && (
            <div className="absolute top-0 left-2">
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
