import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import CertificationsAndBeyond from "@/components/CertificationsAndBeyond";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Anuj Sharma",
  description:
    "Interactive resume for Anuj Sharma — presales professional in ERP, GST, and tax technology.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="section pt-28 md:pt-36">
          <div className="container-narrow text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
              Resume
            </h1>
            <p className="text-grey max-w-xl mx-auto mb-8">
              An interactive view of my experience — or download the PDF
              version below.
            </p>
            <a
              href="/Anuj_Sharma_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-medium px-6 py-3 hover:bg-secondary transition-colors"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-narrow max-w-2xl">
            <h2 className="text-2xl font-bold text-text mb-2">Education</h2>
            <ul className="space-y-1 text-text">
              <li className="font-medium">MBA — Marketing &amp; Finance</li>
              <li className="font-medium">
                Bachelor of Commerce (B.Com) — Taxation
              </li>
            </ul>
          </div>
        </section>

        <Experience />
        <CertificationsAndBeyond />
      </main>
      <Footer />
    </>
  );
}
