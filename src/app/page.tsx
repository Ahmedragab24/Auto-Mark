import CategoriesSection from "@/components/sections/CategoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="container px-4 mx-auto">
      <HeroSection />
      <CategoriesSection />
    </main>
  );
}
