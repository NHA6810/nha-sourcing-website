import Link from 'next/link';
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
    title: '28% Cost Reduction for UK Retail Brand',
    category: 'Cost Savings',
    client: 'Horizon Goods Ltd.',
    country: 'United Kingdom',
    industry: 'Home & Garden',
    duration: '3 months',
    image: '',
    metrics: [
      { label: 'Cost Reduction', value: '28%', icon: TrendingDown },
      { label: 'Lead Time', value: '-15%', icon: Clock },
      { label: 'Defect Rate', value: '95% ↓', icon: ShieldCheck },
    ],
    challenge:
      'A UK-based home goods retailer was sourcing through a middleman and paying too much. Quality was inconsistent and communication was slow. They needed a reliable direct sourcing solution that could cut costs without sacrificing quality.',
    solution:
      'NHA identified 5 direct factories in Zhejiang province, conducted full factory audits, and negotiated direct pricing. We set up a multi-layer QC process and assigned a dedicated account manager for weekly updates.',
    results: [
      '28% reduction in landed cost vs. previous supplier',
      'Defect rate dropped from 8% to under 0.4%',
      'Lead time reduced from 45 days to 38 days',
      'Direct factory relationship with full transparency',
      'Client has re-ordered 6 times since initial order',
    ],
  },
  {
    title: 'Full Supply Chain Overhaul for US E-commerce',
    category: 'Quality & Efficiency',
    client: 'Pacific Brands Co.',
    country: 'United States',
    industry: 'Consumer Electronics',
    duration: '6 months',
    metrics: [
      { label: 'SKUs Sourced', value: '120+', icon: Building2 },
      { label: 'QC Pass Rate', value: '99.2%', icon: ShieldCheck },
      { label: 'Avg. Savings', value: '22%', icon: TrendingDown },
    ],
    challenge:
      'A fast-growing US e-commerce brand was juggling 8 different suppliers with inconsistent quality, frequent stockouts, and no unified quality control. They needed a single partner to consolidate their supply chain.',
    solution:
      'NHA consolidated their 120+ SKU sourcing under our management. We vetted and on-boarded 15 primary factories, set up uniform QC standards, and established a Shanghai consolidation warehouse for combined shipments.',
    results: [
      '120+ SKUs now sourced through single partner',
      'Overall QC pass rate of 99.2%',
      'Average 22% savings across product lines',
      'Consolidation reduced shipping cost by 30%',
      'Client grew revenue 4x in first year',
    ],
  },
  {
    title: 'From Concept to Shelf: OEM Product Launch',
    category: 'OEM / Product Development',
    client: 'Nordic Home AB',
    country: 'Sweden',
    industry: 'Furniture & Decor',
    duration: '5 months',
    metrics: [
      { label: 'Time to Market', value: '5 mo', icon: Clock },
      { label: 'Factories Audited', value: '7', icon: Building2 },
      { label: 'First Order', value: '10k+', icon: TrendingDown },
    ],
    challenge:
      'A Swedish design brand wanted to launch a new furniture line but had no existing manufacturing relationships in Asia. They needed help with everything from factory selection to tooling, samples, and production ramp-up.',
    solution:
      'NHA guided the full product development cycle — from design review and material selection to factory identification, tooling management, prototype iteration, and final production setup with QC protocols.',
    results: [
      'Successfully launched 12 SKU furniture line',
      'First 10,000 unit order delivered on schedule',
      'Design iteration and testing in 5 months total',
      'Factory passed all EU safety and quality standards',
      'Client now in 3rd production run',
    ],
  },
  {
    title: 'Quality Crisis Resolution for German Importer',
    category: 'Quality Control',
    client: 'AlpenTrading GmbH',
    country: 'Germany',
    industry: 'Hardware & Tools',
    duration: '2 months',
    metrics: [
      { label: 'Return Rate', value: '90% ↓', icon: ShieldCheck },
      { label: 'Inspections', value: 'Full', icon: TrendingDown },
      { label: 'Recovery Time', value: '8 wks', icon: Clock },
    ],
    challenge:
      'A German hardware importer was facing a quality crisis — 15% of products were being returned due to defects. Their current supplier refused to take responsibility and communication had broken down.',
    solution:
      'NHA conducted an immediate factory audit and root cause analysis. We identified process gaps and worked with the factory to implement corrective actions. We then set up full pre-shipment inspection for every order.',
    results: [
      'Return rate dropped from 15% to 1.5%',
      'Full quality control process implemented',
      'Factory improved quality systems and training',
      'Client saved €200K+ in replacement costs',
      'Relationship with factory restored and improved',
    ],
  },
  {
    title: 'Amazon FBA Supply Chain Optimization',
    category: 'Logistics & FBA',
    client: 'Sunrise Brands Inc.',
    country: 'Canada',
    industry: 'Beauty & Personal Care',
    duration: '4 months',
    metrics: [
      { label: 'Logistics Cost', value: '-25%', icon: TrendingDown },
      { label: 'FBA Prep', value: 'Included', icon: ShieldCheck },
      { label: 'Stockouts', value: 'Eliminated', icon: Clock },
    ],
    challenge:
      'A Canadian Amazon seller was dealing with high logistics costs, frequent stockouts, and issues with FBA prep requirements. They needed a partner who understood Amazon FBA and could optimize their entire supply chain.',
    solution:
      'NHA set up FBA-ready packaging and labeling at our Shanghai warehouse, implemented a rolling 3-month production schedule to avoid stockouts, and negotiated better freight rates through volume consolidation.',
    results: [
      'Logistics costs reduced by 25%',
      'Zero stockouts in 12 months of cooperation',
      'FBA acceptance rate of 99.8%',
      'Inventory turnover improved by 40%',
      'Client expanded from 5 to 20 products',
    ],
  },
  {
    title: 'Multi-Country Sourcing Strategy Setup',
    category: 'Strategic Sourcing',
    client: 'Global Trading Partners',
    country: 'Australia',
    industry: 'Apparel & Textiles',
    duration: '4 months',
    metrics: [
      { label: 'Factories Onboarded', value: '12', icon: Building2 },
      { label: 'Countries', value: '3', icon: MapPin },
      { label: 'Tariff Savings', value: '$500K+/yr', icon: TrendingDown },
    ],
    challenge:
      'An Australian trading group wanted to diversify their sourcing base beyond China due to tariff concerns. They needed reliable alternative sourcing in Vietnam and Bangladesh while maintaining quality and delivery standards.',
    solution:
      'NHA conducted a full sourcing strategy review. We identified and vetted 5 factories in Vietnam and 4 in Bangladesh, set up uniform quality standards, and established a multi-country sourcing portfolio.',
    results: [
      '12 factories across 3 countries onboarded',
      'Estimated $500K+ annual tariff savings',
      'Diversified supply chain reduces risk',
      'Uniform QC standards across all factories',
      'Client now uses China+Vietnam+Bangladesh mix',
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
            <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@nhasourcing.com">Email Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
