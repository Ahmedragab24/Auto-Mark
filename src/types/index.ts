export interface navigationLinkType {
  title: string;
  href: string;
}

export type langType = "ar" | "en";

export interface MainCategoriesType {
  id: number;
  key: string;
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

export interface specificationType {
  product_id: number;
  key: string;
  title_en: string;
  title_ar: string;
  value_en: string;
  value_ar: string;
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
}

export interface ProductType {
  id: number;
  category_id: number;
  name: string;
  price: number;
  image: string;
  images?: imagesType[];
  country?: countryWithProductType;
  city?: cityType;
  type: string;
  is_paid_advertisement?: boolean;
  is_favorited?: boolean;
  days?: number;
  user_type?: string;
  standard_specification?: specificationType[];
}
