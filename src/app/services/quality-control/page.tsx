import Link from 'next/link';
import {
  ClipboardCheck,
  CheckCircle2,
  Factory,
  ArrowRight,
  ShieldCheck,
  Eye,
  Package,
  Search,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Quality Control & Inspection Services',
  description:
    'Comprehensive quality control and inspection services in China & Asia. Pre-production, during production, and pre-shipment inspections by NHA Sourcing.',
};

const inspectionTypes = [
  {
    icon: Search,
    title: 'Pre-Production Inspection (PPI)',
    desc: 'Verify raw materials, components, and production setup before mass production begins. Catch issues early.',
  },
  {
    icon: Eye,
    title: 'During Production Inspection (DPI)',
    desc: 'Check product quality during the production process, typically at 20-30% completion. Monitor quality consistency.',
  },
  {
    icon: ClipboardCheck,
    title: 'Final Random Inspection (FRI)',
    desc: 'Full AQL-based inspection when 100% of goods are finished and packed. Verify overall quality.',
  },
  {
    icon: Package,
    title: 'Container Loading Supervision',
    desc: 'Verify correct products, correct quantities, proper packaging and loading. Zero mix-ups or damage.',
  },
];

export default function QualityControlPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services / Quality Control"
        eyebrow="Quality Control"
        title="Protect Your Brand with Rigorous Quality Inspections"
        description="Comprehensive quality control services at every production stage. Our on-site inspectors ensure your products meet specifications before they leave the factory."
        primaryCta={{ text: 'Book an Inspection', href: '/contact' }}
        secondaryCta={{ text: 'All Services', href: '/services' }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
              Inspection Types
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Multi-Stage Quality Control
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the inspection stages that fit your needs — or use all four for complete
              maximum quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inspectionTypes.map((item, index) => (
            <Card key={index} className="card-hover p-8 border-gray-200">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-nha-navy mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Need Quality Control for Your Products?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Book a quality inspection or set up a recurring QC program.
            Get a same-day quote.
          </p>
          <Button asChild size="lg" className="bg-nha-green hover:bg-nha-green-dark">
            <Link href="/contact">
              Get Inspection Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
