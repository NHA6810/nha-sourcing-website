import Link from 'next/link';
import {
  Search,
  Factory,
  ClipboardList,
  Boxes,
  Ship,
  MessageSquare,
  FileCheck,
  PackageCheck,
  HandshakeIcon,
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'How It Works',
  description:
    'Learn how NHA Sourcing Service works — a simple 5-step process from inquiry to delivery. Transparent, efficient, and reliable sourcing from Asia.',
};

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Inquiry & Requirements',
    duration: 'Within 24 hours',
    description:
      'Share your product requirements, specifications, target quantities, and any quality standards or certifications needed. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product description and specifications',
      'Target price range (optional but helpful)',
      'Quantity requirements and order frequency',
      'Quality standards and certifications needed',
      'Target delivery timeline and destination',
    ],
    deliverables: 'Acknowledgment + initial consultation call',
  },
  {
    number: '02',
    icon: Factory,
    title: 'Supplier Sourcing & Quotation',
    duration: '3-7 business days',
    description:
      'We leverage our network of 500+ verified manufacturers to find the best matches. We negotiate pricing and MOQs on your behalf and present you with 3-5 qualified options.',
    details: [
      'Database search + supplier outreach',
      'Initial qualification screening',
      'Price and MOQ negotiation',
      'Sample availability check',
      'Detailed comparative quotation',
    ],
    deliverables: '3-5 supplier quotes with comparison sheet',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Sampling & Factory Audit',
    duration: '1-4 weeks',
    description:
      'Once you shortlist suppliers, we arrange sample development and can conduct on-site factory audits to verify manufacturing capability, quality systems, and compliance.',
    details: [
      'Sample development and management',
      'Sample evaluation and testing coordination',
      'On-site factory audit (optional but recommended)',
      'Capability and capacity verification',
      'Social compliance assessment',
    ],
    deliverables: 'Physical samples + audit report with photos',
  },
  {
    number: '04',
    icon: Boxes,
    title: 'Production & Quality Control',
    duration: 'Per production schedule',
    description:
      'We manage the entire production process on your behalf — from confirming order details to monitoring progress, conducting quality inspections, and ensuring on-time delivery.',
    details: [
      'Order confirmation and production scheduling',
      'Pre-production inspection (raw materials)',
      'During production inspection (20-30%)',
      'Final random inspection (100% finished)',
      'Container loading supervision',
    ],
    deliverables: 'Regular updates + QC reports with photos/videos',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & After-Sales',
    duration: '5-45 days (varies by method)',
    description:
      'We handle all logistics arrangements, customs documentation, and delivery coordination. After delivery, we continue to support with reorders, product improvements, and any issues.',
    details: [
      'Shipping method recommendation and booking',
      'Customs documentation and clearance',
      'Shipment tracking and updates',
      'After-sales support and issue resolution',
      'Reorder management and product optimization',
    ],
    deliverables: 'Products delivered + ongoing support',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        breadcrumb="How It Works"
        eyebrow="Our Process"
        title="A Simple, Transparent Sourcing Process"
        description="From initial inquiry to final delivery — a proven 5-step process designed to minimize risk, maximize savings, and keep you fully informed at every stage."
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ text: 'View Services', href: '/services' }}
      />

      {/* Process Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div key={index} className="relative lg:grid lg:grid-cols-12 lg:gap-12">
                {/* Timeline marker */}
                <div className="hidden lg:flex lg:col-span-1 justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 bg-nha-blue rounded-full flex items-center justify-center text-white font-bold z-10">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-12 bottom-0 w-0.5 bg-gray-200" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-11">
                  <Card className="p-6 lg:p-10 border-gray-200 card-hover">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex items-center md:hidden gap-4">
                        <div className="w-12 h-12 bg-nha-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-nha-navy">
                            {step.title}
                          </h3>
                          <Badge variant="outline" className="mt-1 border-nha-gold/30 text-nha-gold">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                      </div>

                      <div className="hidden md:flex md:items-center gap-4 mb-2">
                        <div className="w-14 h-14 bg-nha-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-7 h-7 text-nha-blue" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-nha-navy">
                            Step {step.number}: {step.title}
                          </h3>
                          <Badge variant="outline" className="mt-1 border-nha-gold/30 text-nha-gold">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                      </div>

                      <div className="md:ml-[72px]">
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-nha-navy mb-3 text-sm uppercase tracking-wide">
                              What We Do
                            </h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-nha-navy mb-3 text-sm uppercase tracking-wide">
                              You Receive
                            </h4>
                            <div className="bg-nha-blue/5 rounded-xl p-4 border border-nha-blue/10">
                              <div className="flex items-start gap-3">
                                <FileCheck className="w-5 h-5 text-nha-blue flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-gray-700">
                                  {step.deliverables}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
              Communication
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Stay Informed Every Step of the Way
            </h2>
            <p className="text-gray-600 text-lg">
              We believe in full transparency. You&apos;ll always know what&apos;s
              happening with your order.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: 'Regular Updates',
                description:
                  'Scheduled progress reports at key milestones — never wonder what&apos;s happening with your order.',
                items: ['Weekly email updates', 'Production status dashboard', 'Photo and video documentation'],
              },
              {
                icon: MessageSquare,
                title: 'Direct Communication',
                description:
                  'Your dedicated account manager is always reachable via email, WhatsApp, WeChat, or phone call.',
                items: ['Dedicated account manager', '24-hour response guarantee', 'Bilingual support'],
              },
              {
                icon: AlertCircle,
                title: 'Issue Escalation',
                description:
                  'If problems arise, you hear about them first — along with proposed solutions and recommendations.',
                items: ['Immediate issue notification', 'Proposed solutions', 'Decision support from our team'],
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 border-gray-200 card-hover">
                <div className="w-12 h-12 bg-nha-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-nha-gold/10 text-nha-gold border-nha-gold/20">
              FAQ
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does the sourcing process take?',
                a: 'It depends on the complexity of your product. Simple products can be sourced in 1-2 weeks, while custom or OEM projects may take 4-8 weeks from inquiry to production. We provide timeline estimates upfront based on your specific requirements.',
              },
              {
                q: 'Do you charge for the initial quotation?',
                a: 'No, our initial sourcing and quotation service is completely free. We only charge once you decide to move forward with a supplier and enter into a formal agreement. There is no obligation from the initial consultation.',
              },
              {
                q: 'What is your minimum order quantity?',
                a: 'MOQs vary by product and supplier. For standard products, MOQs can be as low as 100-500 units. For custom/OEM products, MOQs are typically higher but we always negotiate the best terms on your behalf. Let us know your requirements and we will find suitable options.',
              },
              {
                q: 'How do you ensure quality?',
                a: 'Quality is ensured through multiple layers: supplier pre-qualification, factory audits, pre-production inspections, during-production inspections, and final pre-shipment inspections. We use international standards (AQL) and provide detailed photo/video reports.',
              },
              {
                q: 'Can you handle shipping to my country?',
                a: 'Yes, we offer shipping to virtually any country via sea freight, air freight, and rail (for Europe). We can handle FOB, CIF, or DDP terms — whatever works best for your business. We have partners with major freight forwarders for competitive rates.',
              },
              {
                q: 'What if there are quality issues after delivery?',
                a: 'We stand behind our work. If quality issues arise that our inspections missed, we work directly with the factory on your behalf to resolve them — whether that means replacement, rework, or compensation. Our goal is your complete satisfaction.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-gray-200">
                <h3 className="font-semibold text-nha-navy mb-2">
                  {index + 1}. {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Your first step is simple — send us your requirements and we&apos;ll
            get back with recommendations within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
              <Link href="/contact">
                Request Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
