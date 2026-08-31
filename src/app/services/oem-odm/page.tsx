import Link from 'next/link';
import {
  Settings,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  FileCheck,
  Box,
  Palette,
  ShieldCheck,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'OEM / ODM / Custom Product Development',
  description:
    'Bring your product ideas to life with OEM/ODM manufacturing in China & Asia. From design and prototyping to mass production — NHA Sourcing manages the entire process.',
};

export default function OemOdmPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services / OEM / ODM"
        eyebrow="OEM / ODM Services"
        title="Bring Your Unique Product Ideas to Life"
        description="Custom product development from concept to mass production. We work with OEM and ODM manufacturers to turn your vision into reality — with full quality control and IP protection."
        primaryCta={{ text: 'Discuss Your Product', href: '/contact' }}
        secondaryCta={{ text: 'All Services', href: '/services' }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-green/10 text-nha-red border-nha-green/20">
              Development Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              From Concept to Mass Production
            </h2>
            <p className="text-gray-600 text-lg">
              We manage every step of product development, ensuring your vision
              is realized efficiently and to the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                step: '01',
                title: 'Concept & Design',
                desc: 'Review your design, refine specifications, and identify the right manufacturing approach.',
              },
              {
                icon: Palette,
                step: '02',
                title: 'Prototype Development',
                desc: 'Create samples and prototypes with iterative refinement until you are fully satisfied.',
              },
              {
                icon: Settings,
                step: '03',
                title: 'Tooling & Setup',
                desc: 'Manage mold making, tooling, production line setup, and first article inspection.',
              },
              {
                icon: Box,
                step: '04',
                title: 'Mass Production',
                desc: 'Oversee full production with rigorous quality control at every stage.',
              },
              {
                icon: FileCheck,
                step: '05',
                title: 'Testing & Certification',
                desc: 'Coordinate third-party testing and certification for your target markets.',
              },
              {
                icon: ShieldCheck,
                step: '06',
                title: 'IP Protection',
                desc: 'Protect your designs with NDAs, trademark support, and secure manufacturing agreements.',
              },
            ].map((item, index) => (
              <Card key={index} className="card-hover p-6 border-gray-200">
                <div className="text-3xl font-bold text-nha-blue/20 mb-3">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-nha-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Have a Product Idea?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let&apos;s discuss your product and explore manufacturing options.
            Free consultation — no obligation.
          </p>
          <Button asChild size="lg" className="bg-nha-green hover:bg-nha-green-dark">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
