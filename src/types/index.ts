export interface navigationLinkType {
  title: string;
  href: string;
}

export type langType = "ar" | "en";

export type CategoriesKeyType =
  | "car"
  | "scrap"
  | "services"
  | "showroom"
  | "spare_parts"
  | "car_numbers";

export interface MainCategoriesType {
  id: number;
  key: CategoriesKeyType;
  name_en: string;
  name_ar: string;
  image?: string;
  status?: number;
  is_home?: number;
  arrange?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CategoryCarsType {
  id: number;
  image?: string;
  key: string;
  name: string;
  is_home?: number;
  subcategories?: SupCategoryCarsType[];
}

export interface SupCategoryCarsType {
  id: number;
  category_id: number;
  image: string;
  name: string;
}

export interface imagesType {
  id: number;
  image: string;
  product_id: number;
}

export interface countryType {
  id: number;
  name_ar: string;
  name_en: string;
  image?: string;
  latitude?: number;
  created_at?: string;
  status?: number;
  longitude?: number;
  symbol_ar?: string;
  symbol_en?: string;
  code?: string;
  exchange_rate?: string;
  country_tax?: string;
  updated_at?: string;
}

export interface cityType {
  id: number;
  name: string;
}

export interface countryWithProductType {
  id: number;
  name: string;
  symbol: string;
  code?: string;
  image?: string;
}

export interface sub_categoryInProductType {
  id: number;
  category_id: number;
  name_en: string;
  name_ar: string;
  image: string;
  status: number;
  is_home: number;
  created_at: string;
  updated_at: string;
}

export interface model_brandInProductType {
  id: number;
  name_en: string;
  name_ar: string;
  status?: number;
  brand_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface brandInProductType {
  id: number;
  name_en: string;
  name_ar: string;
  category_id?: number;
  image?: string;
}

export interface specificationType {
  id: number;
  product_id?: number;
  key: string;
  key_id?: number;
  title_en: string;
  title_ar: string;
  value_en?: string;
  value_ar?: string;
}

export interface userInProductType {
  id: number;
  name: string;
  type?: string;
  showroom_status?: string;
  phone?: string;
}

export interface ProductType {
  id: number;
  category_id: number;
  sub_category_id?: number;
  name: string;
  price: number;
  phone: string;
  address: string;
  image: string;
  images: imagesType[];
  description_en?: string;
  description_ar?: string;
  country?: countryWithProductType;
  city?: cityType;
  whatsapp?: string | number;
  type: string;
  model_id?: number;
  brand_id?: number;
  days?: number;
  user_name?: string;
  motion_vector?: string;
  warranty?: number;
  city_id?: number;
  user_id?: number;
  country_id?: number;
  latitude?: string;
  longitude?: string;
  is_paid_advertisement?: boolean;
  is_favorited?: boolean;
  sub_category?: sub_categoryInProductType;
  model_brand?: model_brandInProductType;
  brand?: brandInProductType;
  standardSpecification?: specificationType[];
  user?: userInProductType;
}

export interface relatedProductsType {
  related_products?: ProductType[];
}
