import { ProductType } from "@/types";
import { CarFront, CircleGauge, MapPin } from "lucide-react";
import React from "react";

const ProductCart = ({
  name,
  price,
  city,
  country,
  type,
  standard_specification,
}: ProductType) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Title and Price Row */}
      {price && (
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-semibold text-primary text-h6">{price}</span>
            <span className="font-semibold text-primary text-h6">
              {country?.symbol}
            </span>
          </div>

          {type && (
            <span className="p-2 font-semibold text-gray-700 border border-gray-700 rounded-full text-[9px]">
              {type}
            </span>
          )}
        </div>
      )}
      <h3 className="text-bodyL font-regular">{name}</h3>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPin size={16} />
        <span>{city?.name}</span>
      </div>

      {/* Speedometer and TypeCar */}
      {Array.isArray(standard_specification) &&
        standard_specification.length >= 2 &&
        standard_specification[0]?.value_ar &&
        standard_specification[1]?.value_ar && (
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CircleGauge className="w-5 h-5" />
              {standard_specification && (
                <span>{standard_specification[0].value_ar}</span>
              )}
            </div>

            <div className="w-[1px] h-8 bg-gray-500"></div>

            <div className="flex items-center gap-2">
              <CarFront className="w-5 h-5" />
              {standard_specification && (
                <span>{standard_specification[1].value_ar}</span>
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default ProductCart;
