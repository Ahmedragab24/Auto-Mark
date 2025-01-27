"use client";

import ProductsGrid from "@/components/ProductsGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state: RootState) => state.Favorites);
  const [favoritesList, setFavoritesList] = useState<typeof favorites>([]);

  useEffect(() => {
    setFavoritesList(favorites);
  }, [favorites]);

  return (
    <Tabs
      defaultValue="All"
      className="container flex flex-col items-center justify-center w-full gap-10 px-4 py-10 mx-auto"
    >
      <TabsList
        className="flex flex-col items-center justify-center w-full gap-4 p-20 mx-auto md:p-8 md:flex-row md:w-fit rounded-2xl"
        dir="rtl"
      >
        <TabsTrigger
          value="All"
          className="w-1/2 data-[state=active]:bg-primary rounded-lg data-[state=active]:text-white px-16"
        >
          الكل
        </TabsTrigger>
        <TabsTrigger
          value="Vehicles"
          className="w-1/2 data-[state=active]:bg-primary rounded-lg data-[state=active]:text-white px-16"
        >
          المركبات
        </TabsTrigger>
        <TabsTrigger
          value="Exhibitions"
          className="w-1/2 data-[state=active]:bg-primary rounded-lg data-[state=active]:text-white px-16"
        >
          المعارض
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All">
        {favoritesList.length > 0 ? (
          <ProductsGrid products={favorites} className="lg:!grid-cols-3 " />
        ) : (
          <p>لا يوجد منتجات في المفضلة</p>
        )}
      </TabsContent>
      <TabsContent value="Vehicles">
        {favoritesList.length > 0 ? (
          <ProductsGrid products={favorites} className="lg:!grid-cols-3 " />
        ) : (
          <p>لا يوجد منتجات في المفضلة</p>
        )}
      </TabsContent>
      <TabsContent value="Exhibitions">
        {favoritesList.length > 0 ? (
          <ProductsGrid products={favorites} className="lg:!grid-cols-3 " />
        ) : (
          <p>لا يوجد منتجات في المفضلة</p>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default FavoritesPage;
