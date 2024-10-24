import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

            <main>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">About</Link>
              {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
