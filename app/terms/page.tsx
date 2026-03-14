import Footer from "components/layout/footer";

export const metadata = {
  title: "Terms of Service",
  description: "Basic terms for using BCYL Pokishop.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-neutral-950 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-200 md:text-lg">
            Welcome to BCYL Pokishop. By browsing this website or placing an order, you agree to the terms below.
            These terms are provided as basic store terms and are intended to set clear expectations for all customers.
          </p>

          <div className="mt-10 space-y-6">
            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">1. Store Use</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                You agree to use this website for lawful purposes only. You must not attempt to interfere with site
                functionality, abuse checkout systems, or use automated tools to disrupt service.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">2. Products and Pricing</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                Product availability, pricing, and descriptions may change without notice. We do our best to keep all
                listing information accurate, but occasional errors may occur.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">3. Orders and Payments</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                Orders are subject to acceptance and verification. We reserve the right to cancel or limit any order,
                including suspected fraud, pricing errors, or inventory issues. Payment must be completed before an
                order is processed.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">4. Shipping, Returns, and Support</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                Shipping timelines are estimates and may vary. Return and exchange eligibility, if offered, depends on
                item condition and policy terms at the time of purchase. For support, please contact us through the
                Contact page.
              </p>
            </article>

            <article className="rounded-xl border border-cyan-400/80 bg-[#121733]/85 p-5 md:p-6">
              <h2 className="text-xl font-semibold text-cyan-300 md:text-2xl">5. Subject to Change</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-100 md:text-base">
                These Terms of Service are subject to change at any time, with or without prior notice. Any updates
                become effective once posted on this page. Continued use of the site after updates means you accept
                the revised terms.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">6. Limitation of Liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                To the fullest extent allowed by law, BCYL Pokishop is not liable for indirect, incidental, or
                consequential damages resulting from use of this website or purchased products.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
