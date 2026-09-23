export default function FarsiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="fa" dir="rtl" className="min-h-full">
      {children}
    </div>
  );
}
