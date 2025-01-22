import CategoriesSection from "@/components/sections/CategoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import ShortViewSection from "@/components/sections/ShortViewSection";

export default function Home() {
  return (
    <main className="container px-4 mx-auto">
      <HeroSection />
      <CategoriesSection />
      <ShortViewSection Content="Special" />
      <ShortViewSection Content="new" />
      <ShortViewSection Content="services" />
      <ShortViewSection Content="SpareParts" />
    </main>
  );
}
