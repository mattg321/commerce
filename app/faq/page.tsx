import Footer from "components/layout/footer";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions for BCYL Pokishop.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-neutral-950 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">FAQ</h1>

          <div className="mt-8 space-y-4">
            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-lg font-semibold md:text-xl">How long does shipping take?</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-200 md:text-base">
                Orders are usually processed in 1 to 3 business days. Transit time depends on destination.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-lg font-semibold md:text-xl">Can I change my order after placing it?</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-200 md:text-base">
                Contact us as soon as possible. We can only make changes before your order is packed and shipped.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-lg font-semibold md:text-xl">How can I contact support?</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-200 md:text-base">
                Use the Contact page and we will get back to you as soon as possible.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
