import { Card } from "@/components/ui/card";
import Image from "next/image";
import ProductCart from "./ProductCart";
import { Button } from "./ui/button";
import Link from "next/link";
import { ProductType } from "@/types";

export function Cart({
  id,
  name,
  price,
  city,
  country,
  type,
  image,
  standard_specification,
}: ProductType) {
  return (
    <Link href={`/categories/${id}`}>
      <Card className="w-full duration-300 rtl group rounded-3xl hover:shadow-lg hover:bg-secondary">
        <div className="relative ">
          {/* Image Container with exact padding */}
          <div className="relative w-full h-56 overflow-hidden rounded-3xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
              alt={name}
              fill
              className="object-cover duration-300 rounded-3xl group-hover:scale-110"
            />
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
            {/* {variant === "map" && (
              <div className="absolute top-0 left-2">
                <Button variant="secondary" size="sm" className="!text-bodyS">
                  <MapPin size={20} />
                  عرض على الخريطة
                </Button>
              </div>
            )} */}
          </div>

          {/* Content Container */}

          <ProductCart
            name={name}
            price={price}
            category_id={id}
            city={city}
            country={country}
            image={image}
            id={id}
            standard_specification={standard_specification}
            type={type}
          />
          {/* 
          {variant === "map" && (
            <LocationCart title={title} location={location} phone={phone} />
          )} */}
        </div>
      </Card>
    </Link>
  );
}
