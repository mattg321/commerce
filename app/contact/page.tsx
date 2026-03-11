import Footer from "components/layout/footer";

export const metadata = {
  title: "Contact",
  description: "Get in touch with BCYL Pokishop.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[radial-gradient(120%_100%_at_0%_20%,#19204c_0%,#090b1f_52%,#060815_100%)] px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-14 text-6xl font-medium tracking-tight">Contact</h1>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="h-12 w-full border border-neutral-500/80 bg-transparent px-4 text-lg text-white placeholder:text-neutral-300 focus:border-cyan-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  required
                  className="h-12 w-full border border-neutral-500/80 bg-transparent px-4 text-lg text-white placeholder:text-neutral-300 focus:border-cyan-300 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="h-12 w-full border border-neutral-500/80 bg-transparent px-4 text-lg text-white placeholder:text-neutral-300 focus:border-cyan-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="comment" className="sr-only">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Comment"
                rows={5}
                className="w-full resize-none border border-neutral-500/80 bg-transparent px-4 py-3 text-lg text-white placeholder:text-neutral-300 focus:border-cyan-300 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-12 min-w-[140px] bg-cyan-400 px-8 text-lg font-medium text-black transition-colors hover:bg-cyan-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
