import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>

      <body>{children}</body>
    </html>
  );
}
