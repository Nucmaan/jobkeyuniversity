"use client";  

import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: { background: "#33d1ff", color: "white" },
        },
        error: {
          style: { background: "red", color: "white" },
        },
      }}
    />
  );
}


