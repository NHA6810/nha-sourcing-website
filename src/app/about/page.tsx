import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Building2,
  Users,
  Globe2,
  ShieldCheck,
  HandshakeIcon,
  Award,
  Target,
  Languages,
  BadgePercent,
  CheckCircle2,
  ArrowRight,
  Building,
  Factory,
  PackageSearch,
  ClipboardList,
  FileCheck2,
  Settings2,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About Us',
  description:
    'NHA Sourcing Industrial Co., Ltd. — a leading sourcing agent in China headquartered in Shanghai. Over 10 years of experience helping global buyers source quality products at the lowest cost.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About NHA Sourcing"
        title="Your Success Is Our Business"
        description="NHA Sourcing Industrial Co., Ltd. is a leading sourcing agent in China, dedicated to helping companies source products from China with the best quality, regulatory compliance, and at the lowest cost. Headquartered in Shanghai — China's biggest city and industrial hub."
        primaryCta={{ text: 'Start Sourcing Today', href: '/contact' }}
        secondaryCta={{ text: 'View Our Services', href: '/services' }}
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                Who We Are
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
                A Leading Sourcing Agent in China
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  NHA Sourcing Industrial Co., Ltd. is a leading sourcing agent
                  in China, dedicated to helping all kinds of companies to
                  source products from China, to ensure the best quality,
                  regulatory complied and at the lowest cost.
                </p>
                <p>
                  Our sourcing services include: product sourcing, price
                  negotiation, supplier verification, factory audit, production
                  monitoring, lab testing, order follow-up, quality control,
                  quality inspection, logistics support and more.
                </p>
                <p>
                  We provide complete service for some world-famous companies
                  as a turnkey basis sourcing to have huge cost savings.
                </p>
                <p>
                  We are well experienced in China manufacturing and familiar
                  with Chinese culture, which is certainly important for
                  business success in China. We have been working on sourcing
                  for more than ten years.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/company/team-photo.png"
                  alt="NHA Sourcing team and facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-nha-navy text-white rounded-xl p-5 shadow-2xl">
                <div className="text-3xl font-bold text-nha-green">10+</div>
                <div className="text-sm text-gray-300">Years of Sourcing Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-nha-green/10 text-nha-green border-nha-green/20">
              Mission &amp; Values
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

      {/* What We Do / Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                Our Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
                Bridging the East-West Gap
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are a sourcing company that believes sourcing &amp; QC
                doesn&apos;t need to be so archaic in the 21st century, so we
                are on a mission to change how sourcing is done using the power
                of technology.
              </p>

              <div className="space-y-5 text-gray-600 leading-relaxed mb-8">
                <p>
                  With over 50 combined years of Sourcing, Project Management
                  &amp; QC experience dealing with Chinese suppliers and a
                  fully bilingual team with enough sourcing experience
                  background, you can be sure you&apos;re in good hands.
                </p>
                <p>
                  Our highly trained team is familiar with all the latest
                  industry technology as well as our own custom software,
                  created to specifically fit the needs of e-commerce sellers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Combined Experience', value: '50+ yrs' },
                  { label: 'Industries Served', value: '10+' },
                  { label: 'Cost Savings Range', value: '30-70%' },
                  { label: 'Avg. Response Time', value: '< 24h' },
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
                  name: 'End-to-End Sourcing',
                  desc: 'We handle everything from supplier selection to shipping — a complete turnkey service.',
                  icon: PackageSearch,
                },
                {
                  name: 'Full Project Management',
                  desc: 'We provide full project management oversight to protect you against import risks, particularly quality risks.',
                  icon: ClipboardList,
                },
                {
                  name: 'Transparent Reporting',
                  desc: 'The full reports we provide facilitate your involvement while keeping you focused on your core business.',
                  icon: FileCheck2,
                },
                {
                  name: 'Bilingual Team',
                  desc: 'Fully bilingual team with deep knowledge of Chinese business culture and Western company standards.',
                  icon: Languages,
                },
                {
                  name: 'Technology-Driven',
                  desc: 'Custom software and the latest industry technology to ensure efficiency and accuracy.',
                  icon: Settings2,
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
            <Button asChild size="lg" className="bg-nha-green hover:bg-nha-green-dark">
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
