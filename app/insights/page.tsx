import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights — Anuj Sharma",
  description:
    "Notes on GST, presales, consulting, and tax technology — coming soon.",
};

const categories = [
  "GST Learnings",
  "Presales Learnings",
  "Consulting Notes",
  "Tax Technology Observations",
];

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="section pt-28 md:pt-36">
          <div className="container-narrow text-center max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
              Insights
            </h1>
            <p className="text-grey mb-10">
              This is where I&apos;ll share what I&apos;m learning — notes on
              GST, presales, consulting, and tax technology. Coming soon.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {categories.map((c) => (
                <div
                  key={c}
                  className="rounded-xl border border-accent p-5 text-sm font-medium text-text bg-accent/30"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
