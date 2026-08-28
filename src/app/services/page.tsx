import Link from 'next/link';
import {
  PackageSearch,
  ClipboardCheck,
  Building,
  Truck,
  Settings,
  Boxes,
  FileCheck,
  Warehouse,
  Ship,
  Plane,
  Train,
  Package,
  ShieldCheck,
  Users,
  Target,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const servicesList = [
  {
    icon: PackageSearch,
    title: 'Product & Material Sourcing',
    description:
      'We identify the best suppliers for your specific product or material requirements across our extensive network of verified manufacturers in China and Southeast Asia.',
    features: [
      '500+ pre-vetted suppliers in our database',
      'Competitive price negotiation on your behalf',
      'Sample procurement and evaluation',
      'Multi-supplier comparison with detailed quotes',
      'Raw material sourcing for manufacturing',
    ],
    href: '/services/product-sourcing',
    color: 'blue',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description:
      'Comprehensive quality inspection services at every production stage to ensure your products meet specifications and quality standards before shipment.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Final random inspection (FRI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (LS)',
    ],
    href: '/services/quality-control',
    color: 'green',
  },
  {
    icon: Building,
    title: 'Factory Audits & Supplier Vetting',
    description:
      'Thorough on-site factory assessments to verify manufacturing capability, quality systems, compliance, and social responsibility before you commit to a supplier.',
    features: [
      'On-site capability verification',
      'Quality management system audit',
      'Social compliance assessment',
      'Financial stability check',
      'Certification verification',
    ],
    href: '/services/factory-audit',
    color: 'amber',
  },
  {
    icon: Truck,
    title: 'Logistics & Shipping',
    description:
      'End-to-end logistics solutions including sea freight, air freight, rail transport, warehousing, and door-to-door delivery to your destination.',
    features: [
      'Sea freight (FCL & LCL)',
      'Air freight options',
      'Rail freight (China-Europe)',
      'Warehousing & consolidation',
      'Amazon FBA prep & shipping',
    ],
    href: '/services/logistics',
    color: 'purple',
  },
  {
    icon: Settings,
    title: 'OEM / ODM / Custom Development',
    description:
      'Bring your unique product ideas to life. We work with OEM and ODM manufacturers to develop custom products from concept to mass production.',
    features: [
      'Product design & engineering support',
      'Prototype development',
      'Tooling and mold management',
      'Custom branding and packaging',
      'Intellectual property protection',
    ],
    href: '/services/oem-odm',
    color: 'red',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Certification',
    description:
      'Navigate complex regulatory requirements with our compliance support, including product testing, certification, and documentation for target markets.',
    features: [
      'CE, FCC, RoHS, REACH support',
      'FDA, CPSIA assistance',
      'Third-party lab testing coordination',
      'Customs documentation',
      'Labeling and regulatory review',
    ],
    href: '/services',
    color: 'teal',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
};

export const metadata = {
  title: 'Services',
  description:
    'Comprehensive sourcing services from NHA Sourcing Service (Shanghai) Co., Ltd. — product sourcing, quality control, factory audits, logistics, OEM/ODM, and compliance support.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our Services"
        title="Comprehensive Sourcing Solutions for Global Buyers"
        description="From finding the right supplier to delivering your products at your doorstep, NHA provides end-to-end sourcing services tailored to your business needs."
        primaryCta={{ text: 'Request Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'How It Works', href: '/how-it-works' }}
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesList.map((service, index) => {
              const colors = colorMap[service.color as keyof typeof colorMap];
              return (
                <Card
                  key={index}
                  className="card-hover p-8 border-gray-200 overflow-hidden"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <service.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-nha-navy mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="inline-flex items-center font-medium text-nha-blue hover:text-nha-navy transition-colors text-sm"
                      >
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logistics breakdown */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
              Logistics Options
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Flexible Shipping Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the shipping method that best fits your timeline and budget.
              We handle all logistics arrangements and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Ship,
                title: 'Sea Freight',
                desc: 'Most cost-effective for large volumes. FCL and LCL options available from all major Chinese ports.',
                tag: 'Best Value',
              },
              {
                icon: Plane,
                title: 'Air Freight',
                desc: 'Fast delivery for urgent or high-value goods. Door-to-door service from Shanghai to your location.',
                tag: 'Fastest',
              },
              {
                icon: Train,
                title: 'Rail Freight',
                desc: 'China-Europe rail links. Faster than sea, cheaper than air — ideal for Europe-bound shipments.',
                tag: 'Balanced',
              },
              {
                icon: Warehouse,
                title: 'Warehousing',
                desc: 'Consolidation from multiple suppliers, quality re-checks, repackaging, and Amazon FBA preparation.',
                tag: 'Value-Added',
              },
            ].map((item, index) => (
              <Card key={index} className="card-hover p-6 text-center border-gray-200">
                <Badge className="mb-4 mx-auto bg-nha-gold/10 text-nha-gold border-nha-gold/20">
                  {item.tag}
                </Badge>
                <div className="w-14 h-14 mx-auto mb-4 bg-nha-blue/10 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
              Transparent Pricing
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Clear, Flexible Fee Structure
            </h2>
            <p className="text-gray-600 text-lg">
              No hidden fees, no surprise charges. Choose the pricing model that
              works best for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Commission-Based',
                price: '2-5%',
                subtitle: 'of order value',
                description:
                  'Perfect for ongoing sourcing needs. You only pay when we deliver results.',
                features: [
                  'Percentage of FOB order value',
                  'Covers all sourcing services',
                  'Scales with your order size',
                  'Great for repeat orders',
                ],
                highlighted: false,
              },
              {
                title: 'Project-Based',
                price: 'From $500',
                subtitle: 'per project',
                description:
                  'Ideal for one-time or specialized projects. Fixed fee for defined scope of work.',
                features: [
                  'Transparent fixed pricing',
                  'Clear deliverables and timeline',
                  'Includes reporting and updates',
                  'Customizable scope',
                ],
                highlighted: true,
              },
              {
                title: 'Hourly Consulting',
                price: '$50-80',
                subtitle: 'per hour',
                description:
                  'For ad-hoc consulting, factory visits, or specific troubleshooting needs.',
                features: [
                  'Flexible engagement',
                  'Expert advice when you need it',
                  'On-site representation',
                  'No long-term commitment',
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.highlighted
                    ? 'border-nha-blue bg-nha-blue/5 shadow-lg'
                    : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nha-red text-white">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-nha-navy mb-2">
                  {plan.title}
                </h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-nha-navy">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-nha-red hover:bg-nha-red-dark'
                      : 'bg-nha-navy hover:bg-nha-navy-light'
                  }`}
                >
                  <Link href="/contact">Get Custom Quote</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us about your project and we&apos;ll recommend the best approach.
            Free consultation, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@nhasourcing.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
