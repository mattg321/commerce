import Price from "components/price";
import { getCollectionProducts, getProducts } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";

export async function FeaturedCollectionCards() {
  const carouselProducts = await getCollectionProducts({
    collection: "hidden-homepage-carousel",
  });

  const featuredProducts = carouselProducts.length
    ? []
    : await getCollectionProducts({
        collection: "hidden-homepage-featured-items",
      });

  const allProducts =
    carouselProducts.length || featuredProducts.length
      ? []
      : await getProducts({ sortKey: "BEST_SELLING" });

  const products =
    carouselProducts.length > 0
      ? carouselProducts
      : featuredProducts.length > 0
        ? featuredProducts
        : allProducts;

  if (!products.length) {
    return (
      <div className="px-4">
        <div className="rounded-2xl border border-neutral-700 bg-[#050916] px-6 py-10 text-sm text-neutral-300">
          No products found yet. Add products in Shopify and publish them to the Online Store channel.
        </div>
      </div>
    );
  }

  return (
    <div className="px-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <li
            key={product.handle}
            className="overflow-hidden rounded-2xl border border-neutral-700 bg-[#050916] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.45)]"
          >
            <Link href={`/product/${product.handle}`} className="block h-full">
              <div className="relative aspect-[4/5] w-full bg-white">
                {product.featuredImage?.url ? (
                  <Image
                    alt={product.featuredImage.altText || product.title}
                    src={product.featuredImage.url}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : null}
              </div>

              <div className="space-y-2 px-4 py-4">
                <p className="min-h-[72px] text-sm leading-6 text-white">
                  {product.title}
                </p>
                <Price
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                  className="text-[28px] font-semibold tracking-tight text-white"
                  currencyCodeClassName="text-base font-medium text-neutral-300"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
