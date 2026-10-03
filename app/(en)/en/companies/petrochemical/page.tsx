import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petrochemical | M.A.B Holding",
  description:
    "Petrochemical, one of the companies within M.A.B Holding.",
};

export default function PetrochemicalPage() {
  return (
    <main className="min-h-screen bg-[#5f9fbd] text-[#a94f4f]">
      {/* Header */}
      <header className="border-b border-[#a94f4f]/20 bg-[#5f9fbd]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="/en"
            className="text-2xl font-bold tracking-[0.25em] text-[#d4af5a]"
          >
            M.A.B
          </a>

          <div className="flex items-center gap-4">
            <a
              href="/fa/companies/petrochemical"
              className="rounded-full border border-[#d4af5a] px-5 py-2 text-xs tracking-widest text-[#a94f4f] transition hover:bg-[#d4af5a] hover:text-[#17384a]"
            >
              FA
            </a>

            <a
              href="/en#companies"
              className="text-sm text-[#a94f4f]/70 transition hover:text-[#d4af5a]"
            >
              ← Back to our companies
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#a94f4f]/20 bg-[#5f9fbd]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs tracking-[0.4em] text-[#4f7f5f]">
            M.A.B GROUP / 02
          </p>

          <h1 className="mt-8 text-6xl font-semibold tracking-tight text-[#a94f4f] md:text-8xl">
            Petrochemical
          </h1>

          <p className="mt-5 text-sm tracking-[0.25em] text-[#d4af5a]">
            PETROCHEMICAL
          </p>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[#a94f4f]/15 bg-[#79b4cf]/55 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs tracking-[0.35em] text-[#d4af5a]">
              ABOUT THE COMPANY
            </p>

            <div className="mt-8 h-px w-20 bg-[#d4af5a]" />
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight text-[#a94f4f] md:text-5xl">
              Petrochemical
              <br />
              One of M.A.B Companies
            </h2>

            <p className="mt-10 text-lg leading-9 text-[#a94f4f]/80">
              Petrochemical is one of the companies within Birami Holding.
              Detailed information about its activities, products, services,
              business areas, and vision will be presented here.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="border-y border-[#a94f4f]/15 bg-[#6faac5]/35 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-[#d4af5a]">
            COMPANY INFORMATION
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="BUSINESS AREA"
              text="Petrochemical"
            />

            <InfoCard
              title="LOCATION"
              text="Sweden"
            />

            <InfoCard
              title="WEBSITE"
              text="Coming soon."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17384a] py-10 text-[#a94f4f]">
        <div className="mx-auto flex max-w-7xl justify-between px-6">
          <span className="font-bold tracking-[0.2em] text-[#d4af5a]">
            M.A.B
          </span>

          <span className="text-sm text-[#a94f4f]/50">
            Petrochemical
          </span>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-[#a94f4f]/20 bg-[#a94f4f]/10 p-7 backdrop-blur-sm transition hover:border-[#d4af5a]/60 hover:bg-[#a94f4f]/15">
      <p className="text-xs tracking-[0.2em] text-[#d4af5a]">
        {title}
      </p>

      <p className="mt-5 text-lg text-[#a94f4f]">
        {text}
      </p>
    </article>
  );
}
