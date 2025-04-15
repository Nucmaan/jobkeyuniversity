import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jobkey University",
  description: "JOBKEY University is non-profit educational Institute that has been established to serve the whole Somali society at large and function as focal point of their development process.",
  metadataBase: new URL('https://jobkey.edu.so'),
  openGraph: {
    title: "Jobkey University",
    description: "JOBKEY University is non-profit educational Institute that has been established to serve the whole Somali society at large and function as focal point of their development process.",
    url: "https://jobkey.edu.so",
    siteName: "Jobkey University",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jobkey University Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobkey University",
    description: "JOBKEY University is non-profit educational Institute that has been established to serve the whole Somali society at large and function as focal point of their development process.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
        <Footer />
        <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#33d1ff",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
      </body>

    </html>
  );
}
