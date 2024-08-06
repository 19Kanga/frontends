
// import { Inter } from "next/font/google";
import "./globals.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import Providers from "./provider"; // Adjusted path

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ottoman Beds",
  description: "Ottoman bed, divan beds, custom bed, mattress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <div className="backdrop"></div>
        {/* <Navbar /> */}
        <Providers>{children}</Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
