import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.A.B Holding | Birami Holding",
  description:
    "Official website of Birami Holding (M.A.B), featuring its companies and business activities.",
  alternates: {
    canonical: "/en",
  },
};

const companies = [
  {
    name: "Rayan Zomorod",
    description:
      "One of the M.A.B companies with an innovative and forward-looking approach.",
    href: "/en/companies/rayan-zomorod",
  },
  {
    name: "Petrochemical",
    description:
      "One of M.A.B's areas of activity across industry and business.",
    href: "/en/companies/petrochemical",
  },
];

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-[#5f9fbd] text-[#a94f4f]">
      {/* Header */}
      <header className="border-b border-[#a94f4f]/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
            href="/en"
            className="text-3xl font-semibold tracking-[0.18em] text-[#d4af5a]"
          >
            M.A.B
          </a>

          <nav className="hidden items-center gap-10 text-sm text-[#a94f4f] md:flex">
            <a href="#about" className="transition hover:text-[#d4af5a]">
              About
            </a>
            <a href="#companies" className="transition hover:text-[#d4af5a]">
              Companies
            </a>
            <a href="#contact" className="transition hover:text-[#d4af5a]">
              Contact
            </a>
          </nav>

          <a
            href="/fa"
            className="rounded-full border border-[#d4af5a] px-5 py-2 text-sm text-[#a94f4f] transition hover:bg-[#d4af5a] hover:text-[#17384a]"
          >
            FA
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-6 text-sm tracking-[0.35em] text-[#4f7f5f]">
              M.A.B HOLDING
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Building
              <br />
              <span className="text-[#d4af5a]">For Tomorrow.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#a94f4f]">
              Birami Holding, M.A.B, takes a long-term approach to development,
              investment, and building lasting businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#companies"
                className="rounded-full bg-[#d4af5a] px-7 py-3.5 font-medium text-[#17384a] transition hover:bg-[#e2c474]"
              >
                Our Companies
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#a94f4f]/50 px-7 py-3.5 font-medium text-[#a94f4f] transition hover:border-[#d4af5a] hover:text-[#d4af5a]"
              >
                About M.A.B
              </a>
            </div>
          </div>

          {/* M.A.B visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-[#d4af5a]/60 bg-[#4d8daa]/40 shadow-2xl shadow-[#356d86]/30">
              <div className="absolute inset-8 rounded-full border border-[#a94f4f]/25" />
              <div className="absolute inset-20 rounded-full border border-[#d4af5a]/40" />

              <span className="relative text-6xl font-semibold tracking-[0.18em] text-[#d4af5a]">
                M.A.B
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[#a94f4f]/15 bg-[#548fab]/55"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-4 text-sm tracking-[0.3em] text-[#d4af5a]">
              ABOUT US
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              One Group,
              <br />
              <span className="text-[#d4af5a]">Many Paths.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#a94f4f]">
              M.A.B is a multi-sector holding company focused on sustainable
              development, value creation, and a long-term vision for the
              future.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#a94f4f]/20 pt-8">
              <div>
                <p className="text-4xl font-semibold text-[#d4af5a]">02</p>
                <p className="mt-2 text-sm text-[#a94f4f]/80">
                  Companies
                </p>
              </div>

              <div>
                <p className="text-4xl font-semibold text-[#d4af5a]">M.A.B</p>
                <p className="mt-2 text-sm text-[#a94f4f]/80">
                  One Holding, One Vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="bg-[#4d8daa]/35">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="mb-14">
            <p className="mb-4 text-sm tracking-[0.3em] text-[#d4af5a]">
              OUR COMPANIES
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              M.A.B
              <span className="text-[#d4af5a]"> Companies</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.href}
                className="group rounded-3xl border border-[#a94f4f]/20 bg-[#a94f4f]/10 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#d4af5a]/70 hover:bg-[#a94f4f]/15"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm tracking-[0.25em] text-[#d4af5a]">
                      M.A.B
                    </p>

                    <h3 className="mt-4 text-3xl font-bold text-[#a94f4f]">
                      {company.name}
                    </h3>

                    <p className="mt-5 leading-8 text-[#a94f4f]/85">
                      {company.description}
                    </p>
                  </div>

                  <span className="text-2xl text-[#d4af5a] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#17384a]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm tracking-[0.3em] text-[#d4af5a]">
                CONTACT
              </p>

              <h2 className="text-4xl font-bold text-[#a94f4f] sm:text-5xl">
                Get in touch with us.
              </h2>
            </div>

            <a
              href="mailto:info@mab-holding.com"
              className="w-fit border-b border-[#d4af5a] pb-2 text-[#d4af5a] transition hover:text-[#e2c474]"
            >
              info@mab-holding.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#a94f4f]/10 bg-[#17384a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#a94f4f]/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} M.A.B Holding</span>
          <span className="text-[#d4af5a]">Birami Holding</span>
        </div>
      </footer>
    </main>
  );
}
