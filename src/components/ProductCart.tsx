import { CarFront, CircleGauge, MapPin } from "lucide-react";
import React from "react";

interface IProps {
  title: string;
  price?: number;
  location?: string;
  Speedometer?: string;
  typeCar?: string;
}

const ProductCart = ({
  title,
  price,
  location,
  typeCar,
  Speedometer,
}: IProps) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Title and Price Row */}
      {price && (
        <div className="flex justify-between">
          <span className="font-semibold text-primary text-h6">{price}</span>
          <span className="px-2 py-1 font-semibold text-gray-700 border border-gray-700 rounded-full text-bodyS">
            غير قابل للتفاوض
          </span>
        </div>
      )}
      <h3 className="text-bodyL font-regular">{title}</h3>

      {/* Location */}

      {location && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      )}

      {/* Speedometer and TypeCar */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <CircleGauge className="w-5 h-5" />
          <span>{Speedometer}</span>
        </div>

        <div className="w-[1px] h-8 bg-gray-600"></div>

        <div className="flex items-center gap-2">
          <CarFront className="w-5 h-5" />
          <span>{typeCar}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
