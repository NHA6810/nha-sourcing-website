import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Tag,
  TrendingDown,
  Award,
  Clock,
  ShieldCheck,
  ChevronRight,
  Calendar,
  Factory,
  CheckCircle2,
  DollarSign,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/layout/page-hero";

export const metadata = {
  title: "Case Studies — NHA Sourcing Service (Shanghai) Co., Ltd.",
  description:
    "Real success stories from our clients. See how NHA Sourcing helped businesses save costs, improve quality, and streamline their China & Asia supply chain.",
};

const caseStudies = [
  {
    title: "Automotive Brake Components Sourcing",
    client: "Dana Inc.",
    country: "USA",
    industry: "Automotive",
    category: "Product Sourcing",
    duration: "6 months",
    image: "/images/products/braking-disc.png",
    challenge:
      "Client needed reliable sourcing for automotive brake discs with strict quality standards and competitive pricing from China.",
    solution:
      "We identified 12 foundries, conducted full factory audits, managed tooling development, and implemented pre-shipment quality inspections.",
    results: [
      "28% cost reduction vs. previous supplier",
      "0 quality defects in first 10 containers",
      "Lead time reduced from 90 to 60 days",
    ],
    metrics: [
      { label: "Cost Saved", value: "28%", icon: TrendingDown },
      { label: "Factories Audited", value: "12", icon: Factory },
      { label: "Lead Time", value: "-33%", icon: Clock },
    ],
  },
  {
    title: "European Beer Regulator Localization Project",
    client: "European Beverage Equipment Co.",
    country: "Germany / Europe",
    industry: "Beverage & Industrial Equipment",
    category: "OEM / ODM",
    duration: "14 months",
    image: "/images/company/factory-2.jpg",
    featured: true,
    challenge:
      "European beer equipment manufacturer needed to localize their CO2 pressure regulator production to Asia while maintaining EU PED (Pressure Equipment Directive) compliance and German engineering standards.",
    solution:
      "Managed full localization: supplier identification, design transfer, tooling development, material certification, PED/CE compliance documentation, and production ramp-up with on-site QC.",
    results: [
      "Localized 8 regulator models for Asian production",
      "All units passed PED 2014/68/EU certification",
      "Unit cost reduced by 38% vs. European production",
      "Zero quality issues in first 10,000 units",
    ],
    metrics: [
      { label: "Cost Saved", value: "38%", icon: DollarSign },
      { label: "Models Localized", value: "8", icon: Award },
      { label: "PED Certified", value: "100%", icon: ShieldCheck },
    ],
  },
  {
    title: "Aluminum Casting Factory Audit & Setup",
    client: "GMC",
    country: "USA",
    industry: "Automotive / Industrial",
    category: "Factory Audit",
    duration: "3 months",
    image: "/images/products/aluminum-casting.png",
    challenge:
      "Client wanted to establish a new casting supplier but had concerns about factory capability, compliance, and environmental standards.",
    solution:
      "Comprehensive factory audit covering quality systems, environmental compliance, social responsibility, and production capacity verification.",
    results: [
      "One factory fully certified and onboarded",
      "ISO 9001 compliance verified",
      "Environmental permit documentation validated",
    ],
    metrics: [
      { label: "Audit Areas", value: "8", icon: ShieldCheck },
      { label: "Issues Found", value: "12", icon: CheckCircle2 },
      { label: "Corrected", value: "100%", icon: Award },
    ],
  },
  {
    title: "Full Container Logistics & Consolidation",
    client: "Grainger",
    country: "USA",
    industry: "Industrial Distribution",
    category: "Logistics",
    duration: "Ongoing",
    image: "/images/products/product-banner.png",
    challenge:
      "Industrial distributor was sourcing from 15+ Chinese suppliers and facing high shipping costs and customs delays.",
    solution:
      "Consolidated all orders into our Shanghai warehouse, optimized container loading, handled all documentation and customs clearance.",
    results: [
      "35% reduction in shipping costs",
      "Customs clearance time cut from 7 to 2 days",
      "Zero lost or damaged shipments in 2 years",
    ],
    metrics: [
      { label: "Cost Saved", value: "35%", icon: DollarSign },
      { label: "Suppliers", value: "15+", icon: Building2 },
      { label: "Containers", value: "50+/yr", icon: TrendingDown },
    ],
  },
  {
    title: "Custom OEM Tool Development",
    client: "Westward",
    country: "Canada",
    industry: "Hardware Tools",
    category: "OEM / ODM",
    duration: "8 months",
    image: "/images/products/gear-inspection.png",
    challenge:
      "Client needed a custom line of precision gear tools developed from scratch with specific performance requirements.",
    solution:
      "Managed the entire product development cycle: design collaboration, prototyping, tooling, testing, and production ramp-up.",
    results: [
      "12 new SKUs developed and launched",
      "All passed ANSI performance standards",
      "First production batch delivered on schedule",
    ],
    metrics: [
      { label: "Products", value: "12", icon: Award },
      { label: "Prototypes", value: "3 rounds", icon: Factory },
      { label: "Time to Market", value: "8 mo", icon: Clock },
    ],
  },
  {
    title: "WC Powder Supply Chain Optimization",
    client: "Confidential Industrial Group",
    country: "Europe",
    industry: "Industrial Materials",
    category: "Supply Chain",
    duration: "12 months",
    image: "/images/products/wc-powder.png",
    challenge:
      "European industrial group was dealing with multiple intermediaries for tungsten carbide powder, facing price volatility and quality inconsistency.",
    solution:
      "Directly connected client with top-tier Chinese powder manufacturers, negotiated long-term pricing, and established third-party testing protocol.",
    results: [
      "40% cost reduction on raw material",
      "Price stability with 12-month contracts",
      "Quality consistency improved dramatically",
    ],
    metrics: [
      { label: "Cost Saved", value: "40%", icon: TrendingDown },
      { label: "Factories", value: "3", icon: Factory },
      { label: "Contract", value: "12 mo", icon: Clock },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Success Stories & Case Studies"
        description="Real results from real clients. See how NHA Sourcing helps businesses worldwide reduce costs, improve quality, and build reliable supply chains in China & Asia."
      />

      {/* Stats Bar */}
      <section className="bg-nha-navy py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Successful Projects" },
              { value: "28%", label: "Avg. Cost Savings" },
              { value: "15+", label: "Countries Served" },
              { value: "98%", label: "Client Retention Rate" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              return (
                <Card
                  key={index}
                  className={`card-hover border-gray-200 overflow-hidden relative group ${
                    study.featured ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Background image for featured cards */}
                  {study.featured && study.image && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                      {/* Gradient overlay to make text readable */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/70" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50" />
                    </div>
                  )}

                  {/* Floating product image - bottom right corner (non-featured cards only) */}
                  {!study.featured && study.image && (
                    <div className="absolute z-10 w-36 h-28 md:w-40 md:h-32 rounded-xl shadow-lg overflow-hidden border-2 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl bottom-16 right-6 -rotate-1">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-contain bg-white p-1"
                        sizes="160px"
                      />
                    </div>
                  )}

                  {/* Accent bar */}
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-nha-green" />

                  <div
                    className={`p-6 lg:p-8 relative z-10 ${
                      study.featured ? "md:pr-96 min-h-[500px]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                        {study.category}
                      </Badge>
                      <Badge variant="outline" className="text-gray-500 border-gray-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        {study.duration}
                      </Badge>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-nha-navy mb-3">
                      {study.title}
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {study.country}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Tag className="w-4 h-4" />
                        {study.industry}
                      </span>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {study.metrics.map((metric, i) => {
                        const IconComponent = metric.icon;
                        return (
                          <div
                            key={i}
                            className="bg-nha-blue/5 rounded-xl p-3 lg:p-4 text-center"
                          >
                            <IconComponent className="w-5 h-5 text-nha-blue mx-auto mb-1.5" />
                            <div className="text-xl font-bold text-nha-navy">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-nha-navy mb-1">
                        The Challenge
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-nha-navy mb-1">
                        Our Solution
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-nha-navy mb-2">
                        Key Results
                      </h4>
                      <ul className="space-y-1.5">
                        {study.results.slice(0, 3).map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 lg:px-8 py-4 bg-gray-50 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-nha-blue font-medium text-sm hover:text-nha-navy transition-colors"
                    >
                      Discuss a similar project
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-nha-navy to-nha-blue py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to see results like these for your business?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your sourcing needs and show you exactly how NHA can help reduce costs and improve quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-nha-green hover:bg-nha-green-dark text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              Get Your Free Consultation
            </Link>
            <a
              href="mailto:13816334552@139.com"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all"
            >
              13816334552@139.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
