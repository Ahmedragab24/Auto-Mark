export interface navigationLinkType {
  title: string
  href: string
}
export interface CategoryType {
  id: string
  title: string
  image: string
  href: string
}

export interface ProductType {
    id: number
    title: string
    price: number
    image: string
    href: string
    location: string
    typeCar: string
    speedometer: string
    special: boolean
    category: string
}