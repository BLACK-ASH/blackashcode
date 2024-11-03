import Divider from "@/components/Divider";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Language from "@/components/Language";
import PlayCz from "@/components/PlayCz";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <Language />
      <Divider />
      <Features />
      <Divider />
      <PlayCz />
      <Divider />
    </>
  );
}
