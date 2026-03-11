import { FeaturedCollectionCards } from "components/featured-collection-cards";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import { HeroSection } from "components/hero-section";
import { CategoryBadges } from "components/category-badges";

export const metadata = {
  description:
    "BCYL Pokishop - 100% Authentic Pokémon TCG, Fast U.S. Shipping, NYC Based",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBadges />
      <div className="bg-neutral-900 py-12">
        <div className="w-full px-0">
          <h2 className="mb-8 pl-4 text-left text-3xl font-bold text-white">Featured collection</h2>
          <FeaturedCollectionCards />
        </div>
      </div>
      <ThreeItemGrid />
      <Footer />
    </>
  );
}
