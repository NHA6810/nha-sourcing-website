import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  Factory,
  Car,
  Flame,
  Cog,
  Droplets,
  Box,
  Activity,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Industries',
  description:
    'Explore the industries NHA Sourcing Service specializes in — from electronics to apparel, home goods to industrial supplies. Find sourcing expertise for your category.',
};

const industries = [
  {
    icon: Wrench,
    title: 'Industrial Products & Hardware',
    supplierCount: '100+ Factories',
    image: '/images/products/cutting-blades.png',
    description:
      'Comprehensive sourcing of industrial hardware, cutting tools, machining components, and precision parts with strict quality standards.',
    products: [
      'Cutting blades & tools',
      'Brass & copper components',
      'Stainless steel parts',
      'Fasteners & hardware',
      'Hand & power tools',
    ],
    color: 'blue',
  },
  {
    icon: Droplets,
    title: 'Gas Control Equipment',
    supplierCount: '15+ Specialized',
    image: '/images/products/regulators.png',
    description:
      'Complete supply chain for gas control products including regulators, torches, nozzles, and precision gas handling components.',
    products: [
      'Gas regulators',
      'Welding & cutting torches',
      'Nozzles & testing equipment',
      'Regulator assemblies',
      'Gas control components',
    ],
    color: 'green',
  },
  {
    icon: Car,
    title: 'Automotive & Motorcycle Parts',
    supplierCount: '40+ Factories',
    image: '/images/products/auto-part-1.png',
    description:
      'Wide range of automotive and motorcycle components from machining parts and castings to complete assemblies with OEM-level quality.',
    products: [
      'Machining & cast parts',
      'Forging & sheet metal',
      'Brakes (disc & drum)',
      'Ignition coils & motors',
      'Controllers & absorbers',
    ],
    color: 'slate',
  },
  {
    icon: Activity,
    title: 'Plastic Equipment & Machinery',
    supplierCount: '20+ Specialized',
    image: '/images/products/screw-barrels.png',
    description:
      'Precision components for plastic machinery including screw barrels, tungsten carbide powder, and hydraulic power units.',
    products: [
      'Screw barrels',
      'Tungsten carbide powder',
      'Mixers & extruder parts',
      'Hydraulic power units',
      'Electrical control systems',
    ],
    color: 'amber',
  },
  {
    icon: Flame,
    title: 'Pulp & Paper Industry',
    supplierCount: '25+ Factories',
    image: '/images/products/lime-kiln.png',
    description:
      'Industrial equipment and chemical products for pulp and paper manufacturing, including lime kilns, pressure vessels, and generators.',
    products: [
      'Chemical products for pulp',
      'Packing wires',
      'Lime kiln equipment',
      'Pressure containers',
      'Generators & boilers',
    ],
    color: 'orange',
  },
  {
    icon: Factory,
    title: 'Hospital & Medical Equipment',
    supplierCount: '18+ Certified',
    image: '/images/products/turbine-generator.png',
    description:
      'Medical and hospital equipment sourcing with compliance verification and regulatory adherence for international markets.',
    products: [
      'Hospital equipment',
      'Medical devices',
      'Lab & testing instruments',
      'Healthcare supplies',
      'Certified manufacturing',
    ],
    color: 'teal',
  },
  {
    icon: Cog,
    title: 'Tooling & Machine Parts',
    supplierCount: '30+ Precision',
    image: '/images/products/gear-inspection.png',
    description:
      'Custom tooling, molds, and precision machine parts — from design and prototyping to full production with quality inspection.',
    products: [
      'Custom tooling & molds',
      'Plastic machine parts',
      'Precision machining',
      'Gear & transmission parts',
      'Prototype development',
    ],
    color: 'purple',
  },
  {
    icon: Box,
    title: 'Aluminum & Metal Casting',
    supplierCount: '20+ Foundries',
    image: '/images/products/aluminum-casting.png',
    description:
      'Aluminum pressure casting, forging, and metal fabrication with full quality control and material testing capabilities.',
    products: [
      'Aluminum pressure casting',
      'Hot & cold forging',
      'Stamping & sheet metal',
      'Brass & copper casting',
      'Steel structure components',
    ],
    color: 'red',
  },
];

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100' },
  green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-600', light: 'bg-pink-100' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-100' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-100' },
  slate: { bg: 'bg-slate-500', text: 'text-slate-600', light: 'bg-slate-100' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-600', light: 'bg-teal-100' },
  red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-100' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600', light: 'bg-rose-100' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-100' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-100' },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Industries"
        eyebrow="Industries We Serve"
        title="Sourcing Expertise Across Diverse Industries"
        description="With 500+ verified suppliers spanning 12+ industry categories, NHA Sourcing has the depth and breadth to handle virtually any product sourcing need from Asia."
        primaryCta={{ text: 'Find Your Product Category', href: '#categories' }}
        secondaryCta={{ text: 'Request Quote', href: '/contact' }}
      />

      {/* Industries Grid */}
      <section className="py-20 lg:py-28 bg-white" id="categories">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const colors = colorMap[industry.color];
              return (
                <Card key={index} className="card-hover border-gray-200 overflow-hidden">
                  {industry.image && (
                    <div className="relative h-44 bg-gray-50 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-lg font-bold text-white">
                          {industry.title}
                        </h3>
                      </div>
                    </div>
                  )}
                  <div className="p-6 lg:p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 ${colors.light} rounded-xl flex items-center justify-center`}>
                        <industry.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                        <Factory className="w-3 h-3 mr-1.5" />
                        {industry.supplierCount}
                      </Badge>
                    </div>

                    {!industry.image && (
                      <h3 className="text-xl font-semibold text-nha-navy mb-3">
                        {industry.title}
                      </h3>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-nha-navy mb-2.5">
                        Popular Products
                      </h4>
                      <ul className="space-y-1.5">
                        {industry.products.map((product, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-nha-green flex-shrink-0 mt-0.5" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-nha-blue font-medium text-sm hover:text-nha-navy transition-colors"
                      >
                        Source this category
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't see your industry */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-nha-navy rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 nha-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-nha-blue/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Our supplier network extends far beyond these categories. If you
                don&apos;t see your product or industry listed, chances are we
                can still help. Send us your requirements and we&apos;ll find
                the right suppliers for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-nha-green hover:bg-nha-green-dark">
                  <Link href="/contact">
                    Tell Us What You Need
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="mailto:info@nhasourcing.com">Email Our Team</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asia Coverage */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
              Asia Coverage
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Sourcing Across Asia&apos;s Manufacturing Hubs
            </h2>
            <p className="text-gray-600 text-lg">
              Our reach extends beyond China to other key manufacturing centers
              across Asia, giving you flexibility and diversification.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { region: 'Shanghai', type: 'HQ & East China' },
              { region: 'Guangdong', type: 'South China Mfg.' },
              { region: 'Zhejiang', type: 'East Coast Hub' },
              { region: 'Yiwu', type: 'Commodities City' },
              { region: 'Vietnam', type: 'Southeast Asia' },
              { region: 'Bangladesh', type: 'Textile Hub' },
            ].map((hub, index) => (
              <Card
                key={index}
                className="p-5 text-center border-gray-200 card-hover"
              >
                <div className="w-10 h-10 mx-auto mb-3 bg-nha-blue/10 rounded-lg flex items-center justify-center">
                  <Factory className="w-5 h-5 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy text-sm">{hub.region}</h3>
                <p className="text-xs text-gray-500 mt-1">{hub.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
