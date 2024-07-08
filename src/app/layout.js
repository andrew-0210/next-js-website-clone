import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js by Vercel - The React Framework",
  description: "The Framework for React. Fast. Powerful. Scalable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>{children}</body>
    </html>
  );
}
