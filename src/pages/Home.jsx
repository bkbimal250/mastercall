import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Workflow from "../components/sections/Workflow";
import DashboardPreview from "../components/sections/DashboardPreview";
import Architecture from "../components/sections/Architecture";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import Roadmap from "../components/sections/Roadmap";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Workflow />
      <DashboardPreview />
      <Architecture />
      <Testimonials />
      <Pricing />
      <Roadmap />
      <CTA />
    </>
  );
}