import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./fonts/stylesheet.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <div className="grid">
                <div className="grid-col-4">
                  <div className="grid-rows-1 pt-16 pl-16">
                  </div>
                </div>
              </div>

              {children}
            </SidebarProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
