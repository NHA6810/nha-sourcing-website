import Link from 'next/link';
import {
  Ship,
  Plane,
  Train,
  Warehouse,
  ArrowRight,
  Package,
  Truck,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Logistics & Shipping Services',
  description:
    'End-to-end logistics and shipping from China. Sea freight, air freight, rail transport, warehousing, consolidation, and Amazon FBA preparation by NHA Sourcing.',
};

const shippingOptions = [
  {
    icon: Ship,
    title: 'Sea Freight',
    tag: 'Best Value',
    desc: 'FCL and LCL shipping from all major Chinese ports. Most cost-effective for large volumes.',
    transit: '20-45 days',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    tag: 'Fastest',
    desc: 'Express and economy air freight options. Door-to-door service for urgent shipments.',
    transit: '3-10 days',
  },
  {
    icon: Train,
    title: 'Rail Freight',
    tag: 'Balanced',
    desc: 'China-Europe rail links. Faster than sea, cheaper than air. Great for Europe-bound cargo.',
    transit: '15-25 days',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Consolidation',
    tag: 'Value-Added',
    desc: 'Consolidate from multiple suppliers, quality re-checks, repackaging, and FBA prep.',
    transit: 'As needed',
  },
];

export default function LogisticsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services / Logistics"
        eyebrow="Logistics & Shipping"
        title="Reliable Shipping Solutions from Asia"
        description="End-to-end logistics services — sea freight, air freight, rail transport, warehousing, and door-to-door delivery. We handle the complexity so you don't have to."
        primaryCta={{ text: 'Get Shipping Quote', href: '/contact' }}
        secondaryCta={{ text: 'All Services', href: '/services' }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
              Shipping Methods
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Choose Your Shipping Method
            </h2>
            <p className="text-gray-600 text-lg">
              We help you select the best shipping option based on your timeline,
              budget, and product requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="card-hover p-6 border-gray-200">
                <Badge className="mb-4 mx-auto bg-nha-gold/10 text-nha-gold border-nha-gold/20">
                  {option.tag}
                </Badge>
                <div className="w-14 h-14 mx-auto mb-4 bg-nha-blue/10 rounded-2xl flex items-center justify-center">
                  <option.icon className="w-7 h-7 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy text-center mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                  {option.desc}
                </p>
                <div className="text-center text-xs text-nha-gold font-medium">
                  Transit: {option.transit}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Ready to Ship Your Goods?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get a competitive shipping quote from our logistics team.
            We work with major carriers for the best rates and reliability.
          </p>
          <Button asChild size="lg" className="bg-nha-green hover:bg-nha-green-dark">
            <Link href="/contact">
              Request Shipping Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
