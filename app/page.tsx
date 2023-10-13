import Navbar from "@component/components/navbar/navbar";
import { HeroSection } from "./sections/hero";
import Footer from "@component/components/footer/footer";
import PopularMenu from "./sections/popular";
import Categories from "./sections/categories";

export default function Home() {
  return (
    <main className="container-md bg-white">
      <Navbar />
      <HeroSection />
      <PopularMenu />
      <Categories />
      <Footer />
    </main>
  );
}
