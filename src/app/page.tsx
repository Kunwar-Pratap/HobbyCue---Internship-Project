import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Hobby from "@/components/Hobby";
import Testimonials from "@/components/Testimonials";
import AddTestimonials from "@/components/Testimonials/AddTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <AddTestimonials />
      <Testimonials />
      <Hobby/>
    </>
  );
}
