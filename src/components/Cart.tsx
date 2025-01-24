import { Card } from "@/components/ui/card";
import Image from "next/image";
import ProductCart from "./ProductCart";
import Link from "next/link";
import { ProductType } from "@/types";
import FavoriteButton from "./auth/FavoriteButton";

interface IProps {
  product: ProductType;
}

export function Cart({ product }: IProps) {
  return (
    <Link href={`/categories/${product.id}`}>
      <Card className="w-full duration-300 rtl group rounded-3xl hover:shadow-lg hover:bg-secondary">
        <div className="relative ">
          {/* Image Container with exact padding */}
          <div className="relative w-full h-56 overflow-hidden rounded-3xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.image}`}
              alt={product.name}
              fill
              className="object-cover duration-300 rounded-3xl group-hover:scale-110"
            />
            <div className="relative flex items-center gap-2 top-8">
              <FavoriteButton product={product} />
              <span className="absolute px-4 py-2 font-medium rounded-lg right-4 gradient-spacial text-bodyS">
                مميز
              </span>
            </div>
          </div>

          {/* Content Container */}
          <ProductCart
            name={product.name}
            price={product.price}
            category_id={product.id}
            city={product.city}
            country={product.country}
            image={product.image}
            id={product.id}
            standard_specification={product.standard_specification}
            type={product.type}
          />
        </div>
      </Card>
    </Link>
  );
}
