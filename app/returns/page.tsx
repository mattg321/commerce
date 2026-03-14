import Footer from "components/layout/footer";

export const metadata = {
  title: "Returns",
  description: "Returns policy for BCYL Pokishop.",
};

export default function ReturnsPage() {
  return (
    <>
      <section className="bg-neutral-950 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Returns</h1>

          <article className="mt-8 rounded-xl border border-cyan-400/80 bg-[#121733]/85 p-5 md:p-6">
            <h2 className="text-lg font-semibold text-cyan-300 md:text-xl">No Returns Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-100 md:text-base">
              All sales are final. We do not accept returns, exchanges, or refunds.
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
