import { ProductType } from "@/types";
import { CarFront, CircleGauge, MapPin } from "lucide-react";
import React from "react";

interface IProps {
  product: ProductType;
}

const ProductContent = ({ product }: IProps) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Title and Price Row */}
      {product.price && (
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-semibold text-primary text-h6">
              {product.price}
            </span>
            <span className="font-semibold text-primary text-h6">
              {product.country?.symbol}
            </span>
          </div>

          {product.type && (
            <span className="p-2 font-semibold text-gray-700 border border-gray-700 rounded-full text-[9px]">
              {product.type}
            </span>
          )}
        </div>
      )}
      <h3 className="text-bodyL font-regular">{product.name}</h3>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPin size={16} />
        <span>{product.city?.name}</span>
      </div>

      {/* Speedometer and TypeCar */}
      {Array.isArray(product.standardSpecification) &&
        product.standardSpecification.length >= 2 &&
        product.standardSpecification[0]?.value_ar &&
        product.standardSpecification[1]?.value_ar && (
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CircleGauge className="w-5 h-5" />
              {product.standardSpecification && (
                <span>{product.standardSpecification[0].value_ar}</span>
              )}
            </div>

            <div className="w-[1px] h-8 bg-gray-500"></div>

            <div className="flex items-center gap-2">
              <CarFront className="w-5 h-5" />
              {product.standardSpecification && (
                <span>{product.standardSpecification[1].value_ar}</span>
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default ProductContent;
