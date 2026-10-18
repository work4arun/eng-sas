import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Programmes from "@/components/Programmes";
import Admissions from "@/components/Admissions";
import Family from "@/components/Family";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import CornerArrow from "@/components/CornerArrow";

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <CornerArrow />
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Marquee />
        <Story />
        <Programmes />
        <Admissions />
        <Family />
      </main>
      <Footer />
    </>
  );
}
