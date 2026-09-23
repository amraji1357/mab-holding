import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شرکت بی‌رامی | هلدینگ M.A.B",
  description:
    "وب‌سایت رسمی شرکت بی‌رامی، هلدینگ M.A.B و مجموعه شرکت‌های زیرمجموعه آن.",
  alternates: {
    canonical: "/fa",
  },
};
export default function PersianHome() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f8f8f6] text-[#171717]">
      <header className="border-b border-black/10 bg-[#f8f8f6]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="/fa"
            className="text-2xl font-bold tracking-[0.25em]"
          >
            M.A.B
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-black/50">
              درباره ما
            </a>

            <a href="#companies" className="transition hover:text-black/50">
              شرکت‌های ما
            </a>

            <a href="#contact" className="transition hover:text-black/50">
              تماس با ما
            </a>
          </nav>

          <a
            href="/en"
            className="rounded-full border border-black/20 px-5 py-2 text-xs tracking-widest transition hover:bg-black hover:text-white"
          >
            EN
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

          <div className="mt-10 max-w-2xl border-r-2 border-black pr-6">
            <h2 className="text-3xl font-medium">
              شرکت بی‌رامی
            </h2>

            <p className="mt-5 text-lg leading-9 text-black/55">
              یک هلدینگ با نگاهی بلندمدت به توسعه، سرمایه‌گذاری
              و ساختن آینده‌ای پایدار.
            </p>
          </div>

          <a
            href="#companies"
            className="mt-10 inline-flex rounded-full bg-[#171717] px-7 py-4 text-sm text-white transition hover:bg-black/75"
          >
            آشنایی با مجموعه
          </a>
        </div>
      </section>

      <section id="about" className="border-t border-black/10 bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.35em] text-black/40">
            ABOUT M.A.B
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            توسعه امروز،
            <br />
            ساختن فردا.
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-black/55">
            شرکت بی‌رامی به‌عنوان یک هلدینگ، مجموعه‌ای از کسب‌وکارها
            را در کنار یکدیگر گرد هم می‌آورد و با تمرکز بر رشد،
            توسعه و ایجاد ارزش بلندمدت فعالیت می‌کند.
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
            شرکت‌های ما
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <CompanyCard
              number="01"
              name="رایان زمرد"
              english="RAYAN ZOMOROD"
              href="/fa/companies/rayan-zomorod"
            />

            <CompanyCard
              number="02"
              name="پتروشیمی"
              english="PETROCHEMICAL"
              href="/fa/companies/petrochemical"
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
            با ما
            <br />
            در ارتباط باشید.
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-8 text-white/50">
            برای ارتباط با شرکت بی‌رامی،
            اطلاعات تماس و راه‌های ارتباطی در این بخش قرار خواهد گرفت.
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
  english,
  href,
}: {
  number: string;
  name: string;
  english: string;
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
            {english}
          </p>

          <h3 className="mt-4 text-4xl font-semibold">
            {name}
          </h3>

          <div className="mt-8 text-sm text-black/50 transition group-hover:text-black">
            مشاهده شرکت ←
          </div>
        </div>
      </div>
    </a>
  );
}
