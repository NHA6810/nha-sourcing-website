import Link from 'next/link';
import {
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  FileCheck,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Factory Audit & Supplier Vetting Services',
  description:
    'Thorough factory audits and supplier vetting services in China. Verify manufacturing capability, quality systems, compliance, and social responsibility with NHA Sourcing.',
};

const auditAreas = [
  'Manufacturing capability & capacity',
  'Quality management systems',
  'Certifications & compliance',
  'Social responsibility & labor practices',
  'Environmental compliance',
  'Financial stability & business legitimacy',
  'Supply chain transparency',
  'R&D and engineering capabilities',
];

export default function FactoryAuditPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services / Factory Audit"
        eyebrow="Factory Audits"
        title="Verify Suppliers Before You Commit"
        description="Comprehensive on-site factory audits to verify capability, compliance, and reliability. Make informed decisions with full visibility into your potential partners."
        primaryCta={{ text: 'Schedule an Audit', href: '/contact' }}
        secondaryCta={{ text: 'All Services', href: '/services' }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                What We Audit
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-6">
                Complete Factory Assessment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our auditors conduct thorough on-site evaluations to give you
                a complete picture of a factory&apos;s capabilities, systems,
                and compliance status.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {auditAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <Card className="p-6 border-gray-200 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nha-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-nha-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">Detailed Report</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive audit report with photos, findings, scoring, and recommendations.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-gray-200 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">Certification Verification</h3>
                    <p className="text-sm text-gray-600">
                      Verify ISO, CE, BSCI, Sedex, and other certifications are legitimate and current.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-gray-200 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">On-Site Interviews</h3>
                    <p className="text-sm text-gray-600">
                      We speak with management, QC staff, and production workers for honest assessment.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Ready to Audit a Supplier?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Schedule a factory audit and get a complete picture before you place
            your order. Reports delivered within 48 hours of the audit.
          </p>
          <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
            <Link href="/contact">
              Schedule Factory Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
