import Footer from "components/layout/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Basic privacy policy for BCYL Pokishop.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-neutral-950 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-200 md:text-lg">
            This Privacy Policy explains how BCYL Pokishop collects, uses, and protects your information when you use
            our website or place an order.
          </p>

          <div className="mt-10 space-y-6">
            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">1. Information We Collect</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                We may collect personal details you provide, including your name, email address, shipping address,
                billing information, and order history. We may also collect technical information such as browser type,
                IP address, and basic usage data.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">2. How We Use Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                We use collected information to process orders, provide customer support, send order updates, improve
                site performance, and prevent fraudulent activity.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">3. Sharing of Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                We do not sell your personal information. We may share necessary data with trusted third-party services
                that help us operate the store, such as payment processors, shipping providers, and hosting platforms.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">4. Cookies and Analytics</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                Our site may use cookies or similar tools to remember preferences, maintain cart sessions, and analyze
                traffic. You can manage cookie behavior through your browser settings.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">5. Data Security</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                We take reasonable measures to protect your data. However, no online transmission or storage method is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </article>

            <article className="rounded-xl border border-cyan-400/80 bg-[#121733]/85 p-5 md:p-6">
              <h2 className="text-xl font-semibold text-cyan-300 md:text-2xl">6. Subject to Change</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-100 md:text-base">
                This Privacy Policy is subject to change at any time, with or without prior notice. Any updates become
                effective once posted on this page. Continued use of the site after updates means you accept the
                revised policy.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">7. Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-base">
                If you have questions about this Privacy Policy, please reach out through the Contact page.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
