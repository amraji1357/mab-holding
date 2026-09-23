export default function PetrochemicalPage() {
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

        <div className="flex items-center gap-4">
  <a
    href="/fa/companies/petrochemical"
    className="rounded-full border border-black/20 px-5 py-2 text-xs tracking-widest transition hover:bg-black hover:text-white"
  >
    FA
  </a>

  <a
    href="/en#companies"
    className="text-sm text-black/55 transition hover:text-black"
  >
    ← Back to our companies
  </a>
</div>
        </div>
      </header>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs tracking-[0.4em] text-black/40">
            M.A.B GROUP / 02
          </p>

          <h1 className="mt-8 text-6xl font-semibold tracking-tight md:text-8xl">
            Petrochemical
          </h1>

          <p className="mt-5 text-sm tracking-[0.25em] text-black/40">
            PETROCHEMICAL
          </p>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs tracking-[0.35em] text-black/40">
              ABOUT THE COMPANY
            </p>

            <div className="mt-8 h-px w-20 bg-black" />
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Petrochemical
              <br />
              One of M.A.B Companies
            </h2>

            <p className="mt-10 text-lg leading-9 text-black/55">
              Petrochemical is one of the companies within Birami Holding.
              Detailed information about its activities, products, services,
              business areas, and vision will be presented here.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f1f1ee] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-black/40">
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

      <footer className="bg-[#171717] py-10 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-6">
          <span className="font-bold tracking-[0.2em]">
            M.A.B
          </span>

          <span className="text-sm text-white/30">
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
    <article className="rounded-2xl border border-black/10 bg-white p-7">
      <p className="text-xs tracking-[0.2em] text-black/35">
        {title}
      </p>

      <p className="mt-5 text-lg">
        {text}
      </p>
    </article>
  );
}
