import Footer from "components/layout/footer";

export const metadata = {
  title: "About Us",
  description: "Learn about the people behind BCYL Pokishop.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[radial-gradient(120%_100%_at_0%_20%,#19204c_0%,#090b1f_52%,#060815_100%)] px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
            <div className="lg:col-start-2">
              <h1 className="text-6xl font-medium tracking-tight">About Us</h1>
              <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-neutral-100">
                Hey we are Benji and Yuri and to simply to put it ... one of us is addicted to Pokemon and the
                other is addicted to blind boxes. You can guess who&apos;s addiction is whose. We started bclypokishop
                in our small bedroom and our passion runs deep. We hope to create a trusting community.
              </p>
            </div>

            <div className="lg:row-start-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/aboutus.jpg"
                alt="Benji and Yuri"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="space-y-4 lg:row-start-2">
              <article className="rounded-xl border border-cyan-400 bg-[#15192d]/85 p-5 md:p-6">
                <h2 className="text-4xl font-semibold">Hi I&apos;m Yuri :)</h2>
                <p className="mt-4 text-2xl leading-relaxed text-neutral-100">
                  It began with smiskis. Not sure if it&apos;s popular anymore but I collected every set I can possibly
                  find. When it was popular at the time, it was almost impossible to even find a box. Later on,
                  popmart has been on the rise and I developed a new obsession... opening these goofy looking
                  monsters called Labubus.
                </p>
              </article>

              <article className="rounded-xl border border-cyan-400 bg-[#15192d]/85 p-5 md:p-6">
                <h2 className="text-4xl font-semibold">Hi I&apos;m Benji :D</h2>
                <p className="mt-4 text-2xl leading-relaxed text-neutral-100">
                  I&apos;ve played all the Pokemon games from DS to now. I grew up with Pokemon, collecting since I was a
                  kid. I got back into a 2 years ago and I don&apos;t plan on stopping ripping packs. I hope to share this
                  with the people in our community and bond through Pokemon.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
