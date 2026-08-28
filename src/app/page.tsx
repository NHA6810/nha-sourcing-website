import {
  HeroSection,
  StatsBar,
  ServicesOverview,
  WhyChooseUs,
  HowItWorksPreview,
  IndustriesPreview,
  TestimonialsSection,
  CTASection,
} from '@/components/sections/home-sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorksPreview />
      <IndustriesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
