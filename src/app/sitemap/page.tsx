import Link from 'next/link';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap for NHA Sourcing Service website.',
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        breadcrumb="Sitemap"
        eyebrow="Site Map"
        title="Sitemap"
        description="A complete overview of all pages on the NHA Sourcing Service website."
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Main Pages',
                links: [
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/how-it-works', label: 'How It Works' },
                  { href: '/industries', label: 'Industries' },
                  { href: '/case-studies', label: 'Case Studies' },
                  { href: '/blog', label: 'Blog & Resources' },
                  { href: '/contact', label: 'Contact Us' },
                ],
              },
              {
                title: 'Services',
                links: [
                  { href: '/services', label: 'All Services' },
                  { href: '/services/product-sourcing', label: 'Product Sourcing' },
                  { href: '/services/quality-control', label: 'Quality Control' },
                  { href: '/services/factory-audit', label: 'Factory Audits' },
                  { href: '/services/logistics', label: 'Logistics & Shipping' },
                  { href: '/services/oem-odm', label: 'OEM / ODM Services' },
                ],
              },
              {
                title: 'Legal',
                links: [
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/terms-of-service', label: 'Terms of Service' },
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="p-6 border-gray-200">
                <h3 className="font-semibold text-nha-navy mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-nha-blue transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/">
                Back to Homepage
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
