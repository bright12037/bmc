import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/Nav/nav";
import Footer from "@/Footer/footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BMC",
  description: "Shop Here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
