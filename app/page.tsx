'use client';

import { Navbar } from '@/components/landing/navbar';
import { HeroSection } from '@/components/landing/hero-section';
import { SocialProof } from '@/components/landing/social-proof';
import { FeaturesSection } from '@/components/landing/features-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { FAQSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-background-900 via-background-900 to-background-950">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}