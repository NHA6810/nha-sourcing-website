import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingDown,
  Clock,
  ShieldCheck,
  ArrowRight,
  Calendar,
  Building2,
  MapPin,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Case Studies',
  description:
    'Real results from real clients. Read case studies of how NHA Sourcing Service has helped businesses save costs, improve quality, and streamline their supply chains.',
};

const caseStudies = [
  {
    title: 'Full Supply Chain Establishment for Swedish Gas Control Company',
    category: 'Complete Sourcing Solution',
    client: 'Swedish Gas Control Company',
    country: 'Sweden',
    industry: 'Industrial Gas Equipment',
    duration: 'Ongoing (10+ years)',
    image: '/images/products/regulators.png',
    metrics: [
      { label: 'Cost Savings', value: '30-70%', icon: TrendingDown },
      { label: 'Products', value: '200+', icon: Building2 },
      { label: 'Partnership', value: '10+ yrs', icon: Clock },
    ],
    challenge:
      'A leading Swedish gas control company needed to establish a complete supply chain in China for their gas control components. They required high-quality precision parts at competitive prices, with reliable long-term suppliers.',
    solution:
      'NHA Sourcing established the entire supply chain from scratch. We identified and vetted specialized manufacturers for brass, copper, stainless steel parts, plastic components, hot and cold forging, stamping, aluminum casting and forging, tooling, regulators, and cutting & welding nozzles. We implemented strict quality control protocols and built long-term relationships with key vendors.',
    results: [
      'Complete supply chain established with 200+ product SKUs',
      'Cost savings ranging from 30% to 70% across product lines',
      'Key vendors have been working with the client for around 10 years',
      'Consistent quality with ISO 9000 compliant manufacturing',
      'Dedicated team managing all sourcing, QC, and logistics',
    ],
  },
  {
    title: 'Massive Cost Reduction for World-Class Pulp Maker from Brazil',
    category: 'Industrial Procurement',
    client: 'Global Pulp Manufacturer',
    country: 'Brazil',
    industry: 'Pulp & Paper Industry',
    duration: 'Ongoing',
    image: '/images/products/lime-kiln.png',
    metrics: [
      { label: 'Cost Savings', value: '40-60%', icon: TrendingDown },
      { label: 'Equipment', value: 'Full Range', icon: Building2 },
      { label: 'Project Scale', value: 'Very Large', icon: ShieldCheck },
    ],
    challenge:
      'One of the largest pulp makers in the world needed to source chemical products for pulp and paper making, packing wires, and new project construction products including motors, lime kiln, pressure containers, generators, steel structures, and boilers from China. The scale was massive and required managing multiple specialized suppliers.',
    solution:
      'NHA Sourcing managed the full procurement of chemical products, packing materials, and heavy industrial equipment. We identified and audited specialized manufacturers for each product category, negotiated volume pricing, managed production timelines across multiple suppliers, and coordinated logistics for large-scale project deliveries.',
    results: [
      'Total cost savings of approximately 40-60%',
      'Successfully sourced chemical products and packing wires',
      'Delivered complete project construction equipment: motors, lime kiln, pressure containers, generators, steel structures, boilers',
      'Managed multiple specialized suppliers across different regions',
      'On-time delivery for large-scale construction projects',
    ],
  },
  {
    title: 'Supply Chain Build for Leading Plastic Equipment Parts Supplier',
    category: 'Industrial Components',
    client: 'Xaloy / Nordson Xaloy',
    country: 'USA',
    industry: 'Plastic Machinery & Equipment',
    duration: 'Ongoing',
    image: '/images/products/screw-barrels.png',
    metrics: [
      { label: 'Cost Savings', value: '30-70%', icon: TrendingDown },
      { label: 'Components', value: 'Full Range', icon: Building2 },
      { label: 'Quality', value: 'Precision', icon: ShieldCheck },
    ],
    challenge:
      'A leading parts supplier for plastic equipment (Xaloy / Nordson Xaloy) needed to establish a complete supply chain in China for precision components used in plastic machinery. High precision and material quality were critical for these industrial components.',
    solution:
      'NHA Sourcing established the complete supply chain for the full range of plastic equipment parts including steel bars, tungsten carbide powder, metal parts, cast parts, mixers, stainless steel parts, welding parts, hydraulic power units, and electrical control systems. We identified specialist manufacturers, conducted rigorous material testing, and set up precision quality inspection protocols.',
    results: [
      'Complete supply chain established for Xaloy / Nordson Xaloy',
      'Cost savings of more than 30-70% across product lines',
      'Precision components meeting international quality standards',
      'Wide range of parts: steel bars, WC powder, castings, weldments, HPU systems',
      'Reliable long-term manufacturing partnerships',
    ],
  },
  {
    title: 'Automotive & Motorcycle Parts Sourcing Program',
    category: 'Automotive Components',
    client: 'Multiple Automotive Clients',
    country: 'Global',
    industry: 'Automotive & Motorcycle',
    duration: 'Multi-year',
    image: '/images/products/auto-part-1.png',
    metrics: [
      { label: 'Parts Range', value: '50+ types', icon: Building2 },
      { label: 'Quality Grade', value: 'OEM-level', icon: ShieldCheck },
      { label: 'Vendors', value: 'High-Quality', icon: TrendingDown },
    ],
    challenge:
      'Automotive and motorcycle product buyers needed reliable sourcing for a wide range of precision components including machining parts, cast parts, forging parts, sheet metal parts, plastic parts, connectors, ignition coils, various motors, brakes (disc, drum), controllers, attachments, and absorbers. Quality and consistency are critical in the automotive industry.',
    solution:
      'NHA Sourcing leveraged our many years of experience in the automotive sector to build a network of high-quality vendors. We implement the same rigorous sourcing procedures — supplier verification, factory audits, sample approval, production monitoring, and pre-shipment inspection — to guarantee goods quality and on-time delivery.',
    results: [
      '50+ types of automotive and motorcycle components sourced',
      'Accumulated many high-quality vendors in the automotive industry',
      'Comprehensive quality control from pre-production to pre-shipment',
      'Parts include: machining, casting, forging, sheet metal, plastic, connectors, ignition coils, motors, brakes, controllers, absorbers',
      'Guaranteed quality and on-time delivery',
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Case Studies"
        eyebrow="Case Studies"
        title="Real Results from Real Clients"
        description="See how businesses around the world have partnered with NHA Sourcing to reduce costs, improve quality, and transform their supply chains. These are actual client outcomes."
        primaryCta={{ text: 'Get Your Success Story', href: '/contact' }}
        secondaryCta={{ text: 'How We Work', href: '/how-it-works' }}
      />

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-hover border-gray-200 overflow-hidden">
                {study.image && (
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 lg:p-8">
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
                    {study.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-nha-blue/5 rounded-xl p-4 text-center"
                      >
                        <metric.icon className="w-5 h-5 text-nha-blue mx-auto mb-1.5" />
                        <div className="text-xl font-bold text-nha-navy">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-nha-navy mb-1">The Challenge</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-nha-navy mb-1">Our Solution</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Every business is different, but our commitment to results is the same.
            Let&apos;s discuss how we can help you achieve your sourcing goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-nha-green hover:bg-nha-green-dark">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:13816334552@139.com">Email Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
