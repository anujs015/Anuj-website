import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactDashboard from "@/components/ImpactDashboard";
import JourneyTimeline from "@/components/JourneyTimeline";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Industries from "@/components/Industries";
import ConsultantMindset from "@/components/ConsultantMindset";
import VoiceOfCustomer from "@/components/VoiceOfCustomer";
import CaseStudies from "@/components/CaseStudies";
import LearningDashboard from "@/components/LearningDashboard";
import CertificationsAndBeyond from "@/components/CertificationsAndBeyond";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ImpactDashboard />
        <JourneyTimeline />
        <WhatIDo />
        <Experience />
        <Industries />
        <ConsultantMindset />
        <VoiceOfCustomer />
        <CaseStudies />
        <LearningDashboard />
        <CertificationsAndBeyond />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
