import CallCenter from "@/Components/CallCenter";
import Events from "@/Components/Events";
import Herro from "@/Components/Herro";
import News from "@/Components/News";
import OurPartners from "@/Components/OurPartners";
 import OurPrograms from "@/Components/OurPrograms";
import Testimonials from "@/Components/Testimonials";
import UniversityStats from "@/Components/UniversityStatus";
import WhyJobkey from "@/Components/WhyJobkey";

export default function Home() {
  return (
    <>
    <Herro />
    <CallCenter />
    <UniversityStats />
    <WhyJobkey />
    <OurPrograms />
    <News />
    <Events />
    <OurPartners />
    <Testimonials />
   
    </>
  );
}
