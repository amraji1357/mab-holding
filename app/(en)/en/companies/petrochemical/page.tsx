
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petrochemical | M.A.B Holding",
  description:
    "Buying and selling a wide range of petrochemical products through M.A.B Holding.",
};

const productSections = [
  {
    number: "01",
    title: "Chemical Products",
    products: [
      "Methanol and Acetic Acid",
      "Methanol",
      "Yutilini",
    ],
  },
  {
    number: "02",
    title: "Polymers and Petroleum Products",
    products: [
      "Polyethylene",
      "Olefin Feedstock",
      "Polymers and Aromatics",
      "Bitumen",
    ],
  },
  {
    number: "03",
    title: "Agricultural Products",
    products: [
      "Urea and Ammonia",
      "Chemical Fertilizers",
    ],
  },
];

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
              Petrochemical is one of the companies within Birami
              Holding. The company operates in the buying and
              selling of petrochemical products.
            </p>
          </div>
        </div>
      </section>

      {/* Petrochemical Products */}
      <section
        id="products"
        className="border-y border-[#a94f4f]/15 bg-[#6faac5]/35 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#d4af5a]">
            M.A.B HOLDING / PRODUCTS
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-relaxed text-[#a94f4f] md:text-5xl">
            Buying and Selling All Petrochemical Products
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#a94f4f]/80">
            Our product portfolio covers chemical products,
            polymers and petroleum products, as well as
            fertilizers and agricultural chemicals.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {productSections.map((section) => (
              <article
                key={section.number}
                className="group rounded-2xl border border-[#a94f4f]/20 bg-[#5f9fbd]/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d4af5a]/70 hover:bg-[#79b4cf]/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light text-[#d4af5a]">
                    {section.number}
                  </span>

                  <span className="h-px w-12 bg-[#d4af5a]/70" />
                </div>

                <h3 className="mt-7 border-b border-[#a94f4f]/20 pb-5 text-xl font-bold leading-8 text-[#a94f4f]">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-4">
                  {section.products.map((product, index) => (
                    <li
                      key={`${section.number}-${index}`}
                      className="flex items-start gap-3 text-base leading-7 text-[#a94f4f]/90"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af5a]" />
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="border-y border-[#a94f4f]/15 bg-[#6faac5]/35 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-[#d4af5a]">
            COMPANY INFORMATION
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <InfoCard
              title="BUSINESS AREA"
              text="Buying and selling petrochemical products"
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

          <span className="text-sm text-[#a94f4f]/70">
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

