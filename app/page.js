 import Events from "@/Components/Events";
import Herro from "@/Components/Herro";
import News from "@/Components/News";
import OurPartners from "@/Components/OurPartners";
 import OurPrograms from "@/Components/OurPrograms";
import Testimonials from "@/Components/Testimonials";
import WhyJobkey from "@/Components/WhyJobkey";

export default function Home() {
  return (
    <>
    <Herro />
    <WhyJobkey />
    <OurPrograms />
    <News />
    <Events />
    <Testimonials />

    <OurPartners />
    </>
  );
}
