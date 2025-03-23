import React from "react";
import Image from "next/image";

export default function OurPartners() {
   const partners = [
    { id: 1, logo: "/1p.png", alt: "Partner 1" },
    { id: 2, logo: "/2p.png", alt: "Partner 2" },
    { id: 3, logo: "/3p.png", alt: "Partner 3" },
    { id: 4, logo: "/4p.png", alt: "Partner 4" },
  ];

  return (
    <div className="py-12 px-6 ">
       <h2 className="text-3xl font-bold text-[#33d1ff] text-center mb-8">
         Our Partners
      </h2>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {partners.map((partner) => (
          <div key={partner.id} className=" bg-white ">
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
