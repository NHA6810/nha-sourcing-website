import Link from 'next/link';
import {
  MapPin,
  Building2,
  Users,
  Globe2,
  ShieldCheck,
  HandshakeIcon,
  Award,
  Target,
  Clock,
  Languages,
  BadgePercent,
  CheckCircle2,
  ArrowRight,
  Building,
  Factory,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about NHA Sourcing Service (Shanghai) Co., Ltd. — a Shanghai-based sourcing agency with 15+ years of experience connecting global buyers with quality Asian manufacturers.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About NHA Sourcing"
        title="Your Shanghai-Based Partner for Asia Sourcing"
        description="Founded and headquartered in Shanghai, NHA Sourcing Service connects international buyers with verified manufacturers across Asia. We bridge language gaps, manage quality, and reduce risk so you can focus on growing your business."
        primaryCta={{ text: 'Meet Our Team', href: '#team' }}
        secondaryCta={{ text: 'Contact Us', href: '/contact' }}
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                Our Story
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
                Built on Trust, Rooted in Shanghai
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  NHA Sourcing Service (Shanghai) Co., Ltd. was founded with a
                  clear mission: to make Asia sourcing accessible, transparent,
                  and reliable for businesses of all sizes around the world.
                </p>
                <p>
                  Based in the Pudong district of Shanghai — at the very heart
                  of the Yangtze River Delta, China&apos;s most advanced
                  manufacturing region — we leverage our strategic location and
                  deep local network to deliver exceptional value to our clients.
                </p>
                <p>
                  Our team of sourcing professionals combines decades of
                  experience in manufacturing, quality control, international
                  trade, and supply chain management. We speak your language
                  and we understand the local market — that&apos;s what makes
                  the difference.
                </p>
                <p>
                  Today, we serve clients across North America, Europe,
                  Australia, and beyond, helping them source quality products
                  at competitive prices while minimizing risk and maximizing
                  efficiency.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-nha-navy to-nha-navy-light rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 nha-grid-pattern opacity-20" />
                <div className="relative">
                  <div className="w-16 h-16 bg-nha-gold/20 rounded-2xl flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-nha-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Our Shanghai Advantage</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: MapPin,
                        title: 'Strategic Location',
                        desc: 'Pudong, Shanghai — minutes from the world\'s busiest port',
                      },
                      {
                        icon: Factory,
                        title: 'Yangtze Delta Access',
                        desc: 'Direct access to China\'s densest manufacturing cluster',
                      },
                      {
                        icon: Globe2,
                        title: 'Global Connectivity',
                        desc: 'Shanghai Pudong Airport + Port of Shanghai = global reach',
                      },
                      {
                        icon: Users,
                        title: 'Local Expertise',
                        desc: 'Bilingual team with deep supplier relationships',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-nha-gold" />
                        </div>
                        <div>
                          <div className="font-semibold mb-0.5">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-red/10 text-nha-red border-nha-red/20">
              Mission & Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg">
              Our commitment to excellence and integrity guides everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'To empower businesses worldwide with reliable, cost-effective sourcing solutions from Asia, backed by quality assurance and transparent communication.',
              },
              {
                icon: Award,
                title: 'Our Vision',
                description:
                  'To be the most trusted sourcing partner for global buyers — known for integrity, expertise, and delivering measurable value to every client.',
              },
              {
                icon: ShieldCheck,
                title: 'Integrity First',
                description:
                  'Honest advice, transparent pricing, and no hidden agendas. We succeed only when our clients succeed — that&apos;s our guiding principle.',
              },
              {
                icon: HandshakeIcon,
                title: 'Long-Term Partnerships',
                description:
                  'We build lasting relationships with both clients and suppliers. Most of our clients have been with us for years, and so have our factory partners.',
              },
            ].map((item, index) => (
              <Card key={index} className="card-hover p-6 border-gray-200">
                <div className="w-12 h-12 bg-nha-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-nha-blue" />
                </div>
                <h3 className="font-semibold text-nha-navy mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Details */}
      <section className="py-20 lg:py-28 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge className="mb-4 bg-nha-gold/10 text-nha-gold border-nha-gold/20">
                Our Team
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
                Experienced Professionals,
                <br />
                Dedicated to Your Success
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team brings together expertise in manufacturing, quality
                assurance, international trade, and supply chain management.
                Every client is assigned a dedicated account manager who
                serves as your single point of contact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Team Members', value: '25+' },
                  { label: 'Years Avg. Experience', value: '10+ yrs' },
                  { label: 'Languages Spoken', value: '5+' },
                  { label: 'Countries Served', value: '30+' },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5">
                    <div className="text-2xl font-bold text-nha-navy mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  name: 'Bilingual Project Managers',
                  desc: 'Fluent in English and Chinese, your dedicated PM handles all communication.',
                  icon: Languages,
                },
                {
                  name: 'QC Inspectors on the Ground',
                  desc: 'Our inspectors are at factories within hours, not days.',
                  icon: ShieldCheck,
                },
                {
                  name: 'Supply Chain Experts',
                  desc: 'Deep industry knowledge across electronics, apparel, home goods, and more.',
                  icon: Building,
                },
                {
                  name: 'Logistics Specialists',
                  desc: 'Experienced with sea, air, rail, and complex cross-border shipping.',
                  icon: Globe2,
                },
                {
                  name: 'Client-First Culture',
                  desc: 'We measure success by your satisfaction and long-term partnership.',
                  icon: HandshakeIcon,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-nha-blue/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-nha-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-nha-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nha-navy mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
              Certifications & Standards
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
              Committed to Quality & Compliance
            </h2>
            <p className="text-gray-600 text-lg">
              We work with certified suppliers and follow international quality
              standards to ensure the best results for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'ISO 9001',
              'ISO 14001',
              'BSCI',
              'Sedex',
              'CE',
              'FDA',
              'RoHS',
              'REACH',
              'FSC',
              'GOTS',
              'SA8000',
              'ICTI',
            ].map((cert, index) => (
              <Card
                key={index}
                className="p-5 text-center border-gray-200 card-hover"
              >
                <div className="text-lg font-bold text-nha-navy">{cert}</div>
                <div className="text-xs text-gray-500 mt-1">Certified</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Ready to Work With a Trusted Shanghai Partner?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Schedule a free consultation with our team and discover how NHA
            Sourcing can help your business succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@nhasourcing.com">Send Email</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
