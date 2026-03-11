import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-8 px-4 pb-4 pt-6 text-black md:flex-row dark:text-white">
        <aside className="order-first w-full flex-none md:w-[240px] lg:w-[260px]">
          <div className="space-y-8 border-b border-neutral-800 pb-8 md:border-b-0 md:border-r md:border-neutral-800 md:pr-6">
            <FilterList list={sorting} title="Sort by" />
            <Collections />
          </div>
        </aside>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}
