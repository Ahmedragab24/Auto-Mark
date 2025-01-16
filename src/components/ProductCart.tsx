import { CarFront, CircleGauge, MapPin } from "lucide-react";
import React from "react";

interface IProps {
  title: string;
  price?: string;
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
          <span className="text-h6 font-semibold text-red-600">{price}</span>
          <span className="text-bodyS font-semibold text-gray-70 border border-gray-70 rounded-full px-2 py-1">
            غير قابل للتفاوض
          </span>
        </div>
      )}
      <h3 className="text-bodyL font-regular">{title}</h3>

      {/* Subtitle */}
      {/* {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>} */}

      {/* Location */}

      {location && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      )}
      {/* {phone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span dir="ltr">{phone}</span>
                </div>
              )} */}

      {/* Speedometer and TypeCar */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <CircleGauge className="w-5 h-5" />
          <span>{Speedometer}</span>
        </div>

        <div className="w-[1px] h-8 bg-gray-60"></div>

        <div className="flex items-center gap-2">
          <CarFront className="w-5 h-5" />
          <span>{typeCar}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
