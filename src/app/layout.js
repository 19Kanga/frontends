
import { Inter } from "next/font/google";
import "./globals.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import Providers from "./provider";
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/font/iconly.min.css' // Adjusted path
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ottoman Beds",
  description: "Ottoman bed, divan beds, custom bed, mattress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <body> */}
        <Toaster />
        <div className="backdrop" style={{display:'block'}}></div>
        {/* <Navbar /> */}
        <Providers>
          <Suspense fallback={<p>Loading data...</p>}>
            {children}
          </Suspense>
          </Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
