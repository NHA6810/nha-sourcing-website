import Link from 'next/link';
import {
  PackageSearch,
  CheckCircle2,
  Factory,
  ArrowRight,
  Target,
  BadgePercent,
  Clock,
  Globe2,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Product Sourcing Services',
  description:
    'Professional product sourcing from China and Asia. NHA Sourcing finds the best suppliers, negotiates prices, and manages the entire sourcing process.',
};

export default function ProductSourcingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services / Product Sourcing"
        eyebrow="Product Sourcing"
        title="Find the Best Products at the Best Prices"
        description="Leverage our 500+ verified supplier network and on-the-ground expertise in China to source quality products at competitive prices. We handle everything from supplier identification to price negotiation."
        primaryCta={{ text: 'Get Sourcing Quote', href: '/contact' }}
        secondaryCta={{ text: 'All Services', href: '/services' }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                How It Works
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
                Our Sourcing Process
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A systematic approach to finding the right suppliers and
                negotiating the best terms for your business.
              </p>

              <div className="space-y-5">
                {[
                  { step: '1', title: 'Requirement Analysis', desc: 'We review your product specs, target price, and quality standards to define the sourcing strategy.' },
                  { step: '2', title: 'Supplier Identification', desc: 'We tap our verified network and conduct market research to identify 3-5 qualified suppliers.' },
                  { step: '3', title: 'Quotation & Negotiation', desc: 'We obtain detailed quotes and negotiate pricing, MOQs, and payment terms on your behalf.' },
                  { step: '4', title: 'Sample Evaluation', desc: 'We arrange samples, coordinate testing, and provide a comparative analysis report.' },
                  { step: '5', title: 'Supplier Selection', desc: 'We present our recommendations with full transparency so you can make an informed decision.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-nha-blue/5 transition-colors">
                    <div className="w-10 h-10 bg-nha-blue rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-nha-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-gray-200 bg-gradient-to-br from-nha-blue/5 to-transparent">
                <div className="w-14 h-14 bg-nha-blue rounded-2xl flex items-center justify-center mb-6">
                  <PackageSearch className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-nha-navy mb-4">
                  Why Choose NHA for Sourcing?
                </h3>
                <ul className="space-y-3">
                  {[
                    '500+ pre-vetted, audited suppliers',
                    'Direct factory pricing — no middlemen',
                    'Average 10-20% cost savings',
                    'Multi-supplier comparison for every project',
                    'Full transparency — you see all quotes',
                    'No hidden fees — only success-based pricing',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 text-center border-gray-200">
                  <BadgePercent className="w-8 h-8 text-nha-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-nha-navy">10-20%</div>
                  <div className="text-sm text-gray-500">Avg. Cost Savings</div>
                </Card>
                <Card className="p-5 text-center border-gray-200">
                  <Clock className="w-8 h-8 text-nha-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-nha-navy">3-7 days</div>
                  <div className="text-sm text-gray-500">Quote Turnaround</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Ready to Source Your Products?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us what you need and we&apos;ll start sourcing immediately.
            Free consultation, no obligation.
          </p>
          <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
            <Link href="/contact">
              Request Free Sourcing Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
