import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.A.B Holding | Birami Holding",
  description:
    "Official website of Birami Holding (M.A.B), featuring its companies and business activities.",
  alternates: {
    canonical: "/en",
  },
};
export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#171717]">
      <header className="border-b border-black/10 bg-[#f8f8f6]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="/en"
            className="text-2xl font-bold tracking-[0.25em]"
          >
            M.A.B
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-black/50">
              About Us
            </a>

            <a href="#companies" className="transition hover:text-black/50">
              Our Companies
            </a>

            <a href="#contact" className="transition hover:text-black/50">
              Contact
            </a>
          </nav>

          <a
            href="/fa"
            className="rounded-full border border-black/20 px-5 py-2 text-xs tracking-widest transition hover:bg-black hover:text-white"
          >
            FA
          </a>
        </div>
      </header>

      <section className="flex min-h-[85vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-28">
          <p className="text-xs tracking-[0.4em] text-black/40">
            BIRAMI HOLDING
          </p>

          <h1 className="mt-8 text-7xl font-semibold tracking-tight md:text-[10rem]">
            M.A.B
          </h1>

          <div className="mt-10 max-w-2xl border-l-2 border-black pl-6">
            <h2 className="text-3xl font-medium">
              Birami Holding
            </h2>

            <p className="mt-5 text-lg leading-9 text-black/55">
              A holding company with a long-term vision for
              development, investment, and building a sustainable future.
            </p>
          </div>

          <a
            href="#companies"
            className="mt-10 inline-flex rounded-full bg-[#171717] px-7 py-4 text-sm text-white transition hover:bg-black/75"
          >
            Explore Our Companies
          </a>
        </div>
      </section>

      <section id="about" className="border-t border-black/10 bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-black/40">
            ABOUT M.A.B
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Developing today,
            <br />
            building tomorrow.
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-black/55">
            Birami Holding brings together a group of businesses
            with a focus on growth, development, and creating
            long-term value.
          </p>
        </div>
      </section>

      <section
        id="companies"
        className="border-t border-black/10 bg-[#f1f1ee] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-black/40">
            OUR COMPANIES
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            Our Companies
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <CompanyCard
              number="01"
              name="Rayan Zomorod"
              href="/en/companies/rayan-zomorod"
            />

            <CompanyCard
              number="02"
              name="Petrochemical"
              href="/en/companies/petrochemical"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#171717] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-white/40">
            CONTACT
          </p>

          <h2 className="mt-8 text-5xl font-semibold md:text-7xl">
            Get in
            <br />
            touch.
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-8 text-white/50">
            Contact information and communication channels
            for Birami Holding will be available here.
          </p>
        </div>
      </section>

      <footer className="bg-[#111111] py-8 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-6 text-sm">
          <span className="font-bold tracking-[0.2em]">
            M.A.B
          </span>

          <span className="text-white/30">
            Birami Holding © 2026
          </span>
        </div>
      </footer>
    </main>
  );
}

function CompanyCard({
  number,
  name,
  href,
}: {
  number: string;
  name: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block min-h-[320px] rounded-3xl bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex justify-between">
          <span className="text-sm text-black/30">
            {number}
          </span>

          <span className="text-xs tracking-[0.2em] text-black/30">
            M.A.B GROUP
          </span>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-black/35">
            M.A.B COMPANY
          </p>

          <h3 className="mt-4 text-4xl font-semibold">
            {name}
          </h3>

          <div className="mt-8 text-sm text-black/50 transition group-hover:text-black">
            View Company →
          </div>
        </div>
      </div>
    </a>
  );
}
