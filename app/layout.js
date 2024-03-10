import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
 
export const metadata = {
  title: "Five Tutoring",
  description: "We're a team of sophomore and junior students working together in order to spread what we believe is most important: education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-mori")}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}