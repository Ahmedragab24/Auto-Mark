import CategoriesSection from "@/components/sections/CategoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import SpecialSection from "@/components/sections/SpecialSection";

export default function Home() {
  return (
    <main className="container px-4 mx-auto">
      <HeroSection />
      <CategoriesSection />
      <SpecialSection />
    </main>
  );
}
