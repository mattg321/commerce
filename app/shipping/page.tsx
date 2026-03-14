import Footer from "components/layout/footer";

export const metadata = {
  title: "Shipping Info",
  description: "Basic shipping information for BCYL Pokishop.",
};

export default function ShippingPage() {
  return (
    <>
      <section className="bg-neutral-950 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Shipping Info</h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-200 md:text-lg">
            We process orders as quickly as possible. Most orders are packed within 1 to 3 business days.
          </p>

          <div className="mt-8 rounded-xl border border-neutral-700/70 bg-[#121733]/80 p-5 md:p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-200 md:text-base">
              <li>Processing time: 1 to 3 business days.</li>
              <li>Shipping speed depends on the carrier and destination.</li>
              <li>Tracking details are sent once your order ships.</li>
              <li>Delivery delays may happen during holidays or high-volume periods.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
