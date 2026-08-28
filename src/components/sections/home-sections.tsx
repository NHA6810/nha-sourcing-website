'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  PackageSearch,
  ClipboardList,
  Truck,
  Settings2,
  Globe2,
  TrendingDown,
  Award,
  Users,
  Container,
  BadgePercent,
  Building2,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Quote,
  Sparkles,
  Target,
  HandshakeIcon,
  FileCheck2,
  Search,
  Boxes,
  Ship,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 nha-hero-gradient overflow-hidden">
      <div className="absolute inset-0 nha-grid-pattern opacity-40" />

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-nha-blue/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-nha-red/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-nha-gold" />
              Trusted Shanghai Sourcing Partner
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted Partner for{' '}
              <span className="text-nha-gold">Sourcing Materials & Services</span>{' '}
              Across Asia
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Based in Shanghai — the heart of Asia&apos;s manufacturing powerhouse.
              We help global buyers source quality products, reduce costs by 10–20%,
              and mitigate supply chain risks with end-to-end support.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-nha-red hover:bg-nha-red-dark text-white px-8 h-12 text-base shadow-lg shadow-nha-red/20"
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white h-12 text-base"
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                24h response time
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                500+ verified factories
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Main card */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-nha-navy-light/50 to-nha-navy flex items-center justify-center relative overflow-hidden">
                  {/* Stylized port/skyline illustration */}
                  <div className="absolute inset-0 flex items-end justify-center pb-12">
                    {/* Container stacks */}
                    <div className="flex items-end gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          {[...Array(3 + i)].map((_, j) => (
                            <div
                              key={j}
                              className={`w-8 h-5 rounded-sm ${
                                (i + j) % 3 === 0
                                  ? 'bg-nha-red/60'
                                  : (i + j) % 3 === 1
                                  ? 'bg-nha-blue/60'
                                  : 'bg-nha-gold/60'
                              }`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ship silhouette */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-4 bg-white/20 rounded-full" />

                  {/* Floating stats cards */}
                  <div className="absolute top-8 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-nha-navy">100%</div>
                        <div className="text-xs text-gray-500">QC Inspection</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute top-20 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float"
                    style={{ animationDelay: '1s' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-nha-navy">10-20%</div>
                        <div className="text-xs text-gray-500">Cost Savings</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-24 -right-2 bg-white rounded-xl shadow-xl p-4 animate-float"
                    style={{ animationDelay: '2s' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-nha-navy">ISO</div>
                        <div className="text-xs text-gray-500">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  const stats = [
    { icon: Factory, value: '500+', label: 'Verified Factories' },
    { icon: Users, value: '15+', label: 'Years Experience' },
    { icon: Container, value: '10,000+', label: 'Containers Shipped' },
    { icon: BadgePercent, value: '10-20%', label: 'Avg. Cost Savings' },
    { icon: Globe2, value: '30+', label: 'Countries Served' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-nha-blue/10 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-nha-blue" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-nha-navy mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  const services = [
    {
      icon: PackageSearch,
      title: 'Product Sourcing',
      description:
        'Find the right products at the best prices from our extensive network of verified manufacturers across China and Asia.',
      href: '/services/product-sourcing',
    },
    {
      icon: ClipboardList,
      title: 'Quality Control',
      description:
        'Comprehensive inspections at every stage — pre-production, during production, and pre-shipment to ensure quality.',
      href: '/services/quality-control',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Audits',
      description:
        'Thorough on-site factory assessments including capability, compliance, social responsibility, and quality systems.',
      href: '/services/factory-audit',
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping',
      description:
        'End-to-end logistics solutions — sea, air, rail freight, warehousing, consolidation, and door-to-door delivery.',
      href: '/services/logistics',
    },
    {
      icon: Settings2,
      title: 'OEM / ODM Services',
      description:
        'Custom product development from design to production — work with factories to bring your unique products to life.',
      href: '/services/oem-odm',
    },
    {
      icon: Building2,
      title: 'Supplier Vetting',
      description:
        'Rigorous supplier identification and verification to ensure you partner with reliable, capable manufacturers.',
      href: '/services',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
            Our Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            End-to-End Sourcing Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From identifying the right supplier to delivering your products safely —
            we handle every step of the sourcing process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover p-6 lg:p-8 cursor-pointer group border-gray-200"
            >
              <div className="w-14 h-14 bg-nha-blue/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-nha-blue/20 transition-colors">
                <service.icon className="w-7 h-7 text-nha-blue" />
              </div>
              <h3 className="text-xl font-semibold text-nha-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-nha-blue font-medium text-sm group-hover:text-nha-navy transition-colors"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-nha-navy/20">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    {
      icon: MapPin,
      title: 'Shanghai Strategic Location',
      description:
        'Headquartered in Shanghai, at the center of the Yangtze River Delta — China&apos;s most advanced manufacturing region with world-class ports and logistics.',
    },
    {
      icon: Target,
      title: 'Significant Cost Savings',
      description:
        'Our established factory relationships and volume leverage help clients reduce costs by 10–20% compared to direct sourcing.',
    },
    {
      icon: ShieldCheck,
      title: 'Risk Mitigation',
      description:
        'Factory audits, quality inspections, and compliance verification at every step protect your business from costly surprises.',
    },
    {
      icon: Users,
      title: 'Dedicated Account Managers',
      description:
        'A dedicated bilingual account manager oversees your project from inquiry to delivery — one point of contact, full accountability.',
    },
    {
      icon: FileCheck2,
      title: 'Transparent Communication',
      description:
        'Regular progress updates, detailed reports, photo documentation, and full visibility into every stage of your order.',
    },
    {
      icon: HandshakeIcon,
      title: 'No Hidden Fees',
      description:
        'Clear pricing structure with transparent commission or project-based fees. You always know exactly what you&apos;re paying for.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge className="mb-4 bg-nha-red/10 text-nha-red border-nha-red/20">
              Why Choose NHA
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
              A Local Partner You Can Trust
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 15 years of experience in Asia sourcing and deep roots in
              Shanghai&apos;s manufacturing ecosystem, we bridge the gap between
              international buyers and quality Asian suppliers. We handle language,
              negotiations, and local relationships — so you don&apos;t have to.
            </p>

            <div className="bg-nha-navy rounded-2xl p-6 lg:p-8 text-white">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-nha-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 italic mb-4 leading-relaxed">
                    &quot;Working with NHA has been transformative. Their team in
                    Shanghai found us a factory that cut our production costs by 28%
                    while maintaining the same quality. The communication is excellent
                    and they truly act as our local partner.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-nha-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-nha-gold font-semibold">MR</span>
                    </div>
                    <div>
                      <div className="font-semibold">Mark Richardson</div>
                      <div className="text-sm text-gray-400">
                        CEO, Horizon Goods Ltd. — UK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-100 hover:border-nha-blue/30 hover:shadow-md transition-all bg-white"
              >
                <div className="w-11 h-11 bg-nha-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-5.5 h-5.5 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksPreview() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description:
        'Tell us what you need — product specs, quantities, target price, and timeline. We&apos;ll get back within 24 hours.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Supplier Shortlist & Quotes',
      description:
        'We identify 3–5 qualified suppliers from our verified network, negotiate on your behalf, and present detailed quotes.',
      icon: Factory,
    },
    {
      number: '03',
      title: 'Sampling & Factory Audits',
      description:
        'Arrange sample development and conduct on-site factory audits to verify capability, quality systems, and compliance.',
      icon: ClipboardList,
    },
    {
      number: '04',
      title: 'Production Follow-Up & QC',
      description:
        'We manage production scheduling, conduct in-process inspections, and perform final pre-shipment quality checks.',
      icon: Boxes,
    },
    {
      number: '05',
      title: 'Shipping & After-Sales',
      description:
        'Handle logistics, customs, and delivery to your door. Plus ongoing support for reorders and product improvements.',
      icon: Ship,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-nha-gold/10 text-nha-gold border-nha-gold/20">
            How It Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Simple 5-Step Sourcing Process
          </h2>
          <p className="text-gray-600 text-lg">
            A transparent, proven process that takes the complexity out of global sourcing.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-nha-blue/0 via-nha-blue/20 to-nha-blue/0" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 card-hover h-full">
                  <div className="text-4xl font-bold text-nha-blue/10 mb-3">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-nha-blue rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-nha-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
            <Link href="/how-it-works">
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function IndustriesPreview() {
  const industries = [
    { name: 'Consumer Electronics', count: '80+ Suppliers' },
    { name: 'Home & Garden', count: '120+ Suppliers' },
    { name: 'Apparel & Textiles', count: '90+ Suppliers' },
    { name: 'Toys & Gifts', count: '70+ Suppliers' },
    { name: 'Furniture & Decor', count: '60+ Suppliers' },
    { name: 'Hardware & Tools', count: '85+ Suppliers' },
    { name: 'Packaging Materials', count: '50+ Suppliers' },
    { name: 'Plastic & Rubber', count: '65+ Suppliers' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
            Industries
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Sourcing Expertise Across Industries
          </h2>
          <p className="text-gray-600 text-lg">
            From electronics to apparel, our supplier network spans diverse
            industries to meet all your sourcing needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-nha-blue/30 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
            >
              <h3 className="font-semibold text-nha-navy mb-1 group-hover:text-nha-blue transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-500">{industry.count}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/industries">
              View All Industries
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'NHA transformed our supply chain. They found a better factory at 25% lower cost and their QC team caught issues we never would have seen.',
      name: 'Sarah Mitchell',
      title: 'Operations Director',
      company: 'Prime Retail Group',
      country: 'USA',
      rating: 5,
    },
    {
      quote:
        'Their Shanghai team is incredibly responsive. We get replies within hours, not days. It&apos;s like having our own office in China.',
      name: 'Daniel Bergstrom',
      title: 'Founder & CEO',
      company: 'Nordic Home AB',
      country: 'Sweden',
      rating: 5,
    },
    {
      quote:
        'We tried 3 other sourcing agents before NHA. The difference in professionalism, attention to detail, and follow-through is night and day.',
      name: 'Amelia Chen',
      title: 'Procurement Manager',
      company: 'Pacific Brands Ltd.',
      country: 'Australia',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 nha-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 nha-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-nha-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Buyers Worldwide
          </h2>
          <p className="text-gray-300 text-lg">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 p-6 lg:p-8 text-white"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-nha-gold fill-nha-gold" />
                ))}
              </div>
              <p className="text-gray-200 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="w-11 h-11 bg-nha-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-nha-gold font-semibold">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.title}, {testimonial.company}
                  </div>
                  <div className="text-xs text-nha-gold mt-0.5">
                    {testimonial.country}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-nha-navy rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 nha-grid-pattern opacity-30" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-nha-blue/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-nha-red/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Sourcing from Asia?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Get a free consultation and quote within 24 hours. No obligation,
              no hidden fees — just honest advice and competitive pricing from
              our Shanghai-based team.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-nha-red hover:bg-nha-red-dark text-white px-8 h-14 text-base"
              >
                <Link href="/contact">
                  Request Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white h-14 text-base"
              >
                <a href="mailto:info@nhasourcing.com">
                  <Mail className="w-5 h-5 mr-2" />
                  info@nhasourcing.com
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-nha-gold" />
                +86 21 XXXX XXXX
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-nha-gold" />
                Response within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-nha-gold" />
                English & Chinese support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Clock = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
