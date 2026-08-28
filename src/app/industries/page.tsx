import Link from 'next/link';
import {
  Smartphone,
  Home,
  Shirt,
  Baby,
  Sofa,
  Wrench,
  Package,
  Box,
  Utensils,
  Palette,
  Gamepad2,
  ShoppingBag,
  ArrowRight,
  Factory,
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
    icon: Smartphone,
    title: 'Consumer Electronics',
    supplierCount: '80+ Suppliers',
    description:
      'From gadgets and accessories to smart home devices and audio equipment, we source quality electronics from certified manufacturers.',
    products: [
      'Smartphones & accessories',
      'Audio & headphones',
      'Smart home devices',
      'Wearables & fitness trackers',
      'Chargers & cables',
    ],
    color: 'blue',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    supplierCount: '120+ Suppliers',
    description:
      'Everything for the home — kitchenware, bedding, decor, furniture, and outdoor living products from leading Chinese factories.',
    products: [
      'Kitchen & dining',
      'Bedding & textiles',
      'Home decor & lighting',
      'Garden & outdoor',
      'Storage & organization',
    ],
    color: 'green',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    supplierCount: '90+ Suppliers',
    description:
      'Clothing, footwear, and textile products from factories across China, Vietnam, and Bangladesh with verified compliance.',
    products: [
      'Fashion apparel',
      'Sportswear & activewear',
      'Footwear & accessories',
      'Home textiles',
      'Fabric & materials',
    ],
    color: 'pink',
  },
  {
    icon: Baby,
    title: 'Toys & Gifts',
    supplierCount: '70+ Suppliers',
    description:
      'Toys, games, promotional gifts, and novelty items from factories in the Yiwu and Shantou manufacturing hubs.',
    products: [
      'Educational toys',
      'Plastic & plush toys',
      'Promotional gifts',
      'Stationery & crafts',
      'Party supplies',
    ],
    color: 'amber',
  },
  {
    icon: Sofa,
    title: 'Furniture & Decor',
    supplierCount: '60+ Suppliers',
    description:
      'Indoor and outdoor furniture, lighting, and home decor items from Foshan and other furniture manufacturing centers.',
    products: [
      'Living room furniture',
      'Office furniture',
      'Outdoor furniture',
      'Lighting fixtures',
      'Home decor items',
    ],
    color: 'orange',
  },
  {
    icon: Wrench,
    title: 'Hardware & Tools',
    supplierCount: '85+ Suppliers',
    description:
      'Hand tools, power tools, hardware, and industrial supplies from established manufacturers in the Zhejiang and Guangdong regions.',
    products: [
      'Hand tools',
      'Power tools',
      'Building materials',
      'Fasteners & hardware',
      'Safety equipment',
    ],
    color: 'slate',
  },
  {
    icon: Package,
    title: 'Packaging Materials',
    supplierCount: '50+ Suppliers',
    description:
      'Custom packaging solutions — boxes, bags, labels, and printing services to make your products stand out on the shelf.',
    products: [
      'Custom boxes & cartons',
      'Plastic packaging',
      'Paper bags & boxes',
      'Labels & stickers',
      'Gift packaging',
    ],
    color: 'purple',
  },
  {
    icon: Box,
    title: 'Plastic & Rubber',
    supplierCount: '65+ Suppliers',
    description:
      'Injection molding, extrusion, silicone products, and rubber components with full tooling and design support.',
    products: [
      'Injection molded parts',
      'Silicone products',
      'Rubber components',
      'Plastic sheets & films',
      'Custom mold design',
    ],
    color: 'teal',
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    supplierCount: '45+ Suppliers',
    description:
      'Food products, beverages, ingredients, and packaging from certified factories with proper export documentation.',
    products: [
      'Snacks & confectionery',
      'Beverages & drinks',
      'Food ingredients',
      'Kitchenware',
      'Food packaging',
    ],
    color: 'red',
  },
  {
    icon: Palette,
    title: 'Beauty & Personal Care',
    supplierCount: '55+ Suppliers',
    description:
      'Cosmetics, skincare, hair care, and personal care products with private label and OEM/ODM capabilities.',
    products: [
      'Skincare products',
      'Makeup & cosmetics',
      'Hair care',
      'Personal care tools',
      'Beauty accessories',
    ],
    color: 'rose',
  },
  {
    icon: Gamepad2,
    title: 'Sports & Outdoors',
    supplierCount: '50+ Suppliers',
    description:
      'Sporting goods, fitness equipment, outdoor gear, and recreational products from quality-focused manufacturers.',
    products: [
      'Fitness equipment',
      'Sporting goods',
      'Camping & hiking',
      'Water sports',
      'Yoga & wellness',
    ],
    color: 'emerald',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Promotional',
    supplierCount: '75+ Suppliers',
    description:
      'Retail merchandise, promotional products, point-of-sale displays, and marketing materials for brands and retailers.',
    products: [
      'Promotional merchandise',
      'Retail displays',
      'Custom premiums',
      'Gift sets',
      'Point-of-sale materials',
    ],
    color: 'indigo',
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
                <Card key={index} className="card-hover p-6 lg:p-8 border-gray-200 overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center`}>
                      <industry.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                      <Factory className="w-3 h-3 mr-1.5" />
                      {industry.supplierCount}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-nha-navy mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {industry.description}
                  </p>

                  <div className="border-t border-gray-100 pt-5">
                    <h4 className="text-sm font-semibold text-nha-navy mb-3">
                      Popular Products
                    </h4>
                    <ul className="space-y-2">
                      {industry.products.map((product, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-nha-blue font-medium text-sm hover:text-nha-navy transition-colors"
                    >
                      Source this category
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
                <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
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
