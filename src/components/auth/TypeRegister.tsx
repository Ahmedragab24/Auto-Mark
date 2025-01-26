// import { Store, Car, User, AlertTriangle } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { AlertTriangle, Car, Store, User } from "lucide-react";
import { ModelType } from "./LoginModel";

interface RegisterFormProps {
  setTypeModel: (type: ModelType) => void;
}

const TypeRegister = ({ setTypeModel }: RegisterFormProps) => {
  return (
    <div className="flex items-center justify-center w-full p-4">
      <div className="p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-6 mb-8 w-max md:grid-cols-3">
          <button className="focus:outline-none group">
            <Card
              className="w-full p-8 text-center transition-colors hover:bg-secondary"
              onClick={() => setTypeModel("Register")}
            >
              <div className="flex justify-center mb-4">
                <User className="w-16 h-16 text-gray-400 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-medium">مستخدم عادي</h2>
            </Card>
          </button>

          <button className="focus:outline-none group">
            <Card
              className="w-full p-8 text-center transition-colors hover:bg-secondary"
              onClick={() => setTypeModel("Register")}
            >
              <div className="flex justify-center mb-4">
                <Car className="w-16 h-16 text-gray-400 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-medium">تاجر</h2>
            </Card>
          </button>

          <button className="focus:outline-none group">
            <Card
              className="w-full p-8 text-center transition-colors hover:bg-secondary"
              onClick={() => setTypeModel("ExhibitionsRegister")}
            >
              <div className="flex justify-center mb-4">
                <Store className="w-16 h-16 text-gray-400 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-medium">معرض</h2>
            </Card>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 p-4 rounded-lg text-amber-600 bg-amber-50">
          <AlertTriangle className="w-5 h-5" />
          <p className="text-sm text-right">
            المستخدم والتاجر ليس لهما صفحة عرض (بروفايل) لعرض اعلانتهما اما
            المعرض له صفحة للاعلانات بشكل منفصل
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypeRegister;
