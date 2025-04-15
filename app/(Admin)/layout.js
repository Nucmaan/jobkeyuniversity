import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
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
