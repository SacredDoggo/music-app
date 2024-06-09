import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import ModalProvider from "@/components/providers/modals-provider";
import { Player } from "@/components/audio-player";
import ConvexClerkProvider from "@/components/providers/convex-clerk-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music app",
  description: "Listen to your Favorite music anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <ModalProvider />
            {children}
            <Player />
          </ThemeProvider>
        </ConvexClerkProvider>
      </body>
    </html>
  );
}
