import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/components/provider";
import { Toaster } from "@/components/ui/toaster";
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace APP",
  description: "wellcome to marketplace app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body>
            <Providers attribute="class" defaultTheme="system" enableSystem>
              {children}
            </Providers>
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
