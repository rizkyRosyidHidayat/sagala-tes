import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "./components/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <Flex alignItems='flex-start'>
            <Sidebar />
            <Box w='100%' h='100vh' bg='primary.50'>{children}</Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
