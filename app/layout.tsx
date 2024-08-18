import type { Metadata } from "next";
import { Inter, Nunito, Roboto, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb",
};

const font = Poppins({
  subsets: ['latin'],
  weight: ['500']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
