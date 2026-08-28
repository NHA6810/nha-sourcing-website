import Link from 'next/link';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for NHA Sourcing Service (Shanghai) Co., Ltd.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms of Service"
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: January 2026. Please read these Terms of Service carefully before using our website or services."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 lg:p-12 border-gray-200 prose prose-gray max-w-none">
            <h2>1. Services</h2>
            <p>
              NHA Sourcing Service (Shanghai) Co., Ltd. provides product sourcing,
              quality control, factory audit, logistics, and related supply chain
              services to international buyers. Specific service terms are outlined
              in individual service agreements.
            </p>

            <h2>2. Use of Website</h2>
            <p>
              You may use our website for lawful purposes and in accordance with
              these Terms. You agree not to use the website in any way that could
              damage, disable, or impair the website or interfere with other users&apos;
              use of the website.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of NHA Sourcing Service (Shanghai) Co., Ltd.
              and is protected by copyright and other intellectual property laws.
            </p>

            <h2>4. Disclaimer</h2>
            <p>
              While we strive for accuracy, the information on this website is
              provided for general informational purposes only. We make no
              representations or warranties of any kind about the completeness,
              accuracy, or reliability of the information.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, NHA Sourcing Service (Shanghai)
              Co., Ltd. shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our website
              or services.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the People&apos;s Republic of China. Any disputes shall be
              resolved through the courts of Shanghai, China.
            </p>

            <h2>7. Contact</h2>
            <p>
              For questions about these Terms, please contact us at
              info@nhasourcing.com.
            </p>
          </Card>

          <div className="text-center mt-10">
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
