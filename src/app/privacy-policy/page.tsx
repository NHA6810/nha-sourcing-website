import Link from 'next/link';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for NHA Sourcing Service (Shanghai) Co., Ltd.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 2026. This Privacy Policy explains how NHA Sourcing Service (Shanghai) Co., Ltd. collects, uses, and protects your personal information."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 lg:p-12 border-gray-200 prose prose-gray max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your name,
              email address, phone number, company information, and project details
              when you submit an inquiry form or contact us via email.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries,
              provide sourcing services, communicate about your projects, and
              improve our services. We do not sell your personal information to
              third parties.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We may share your information with our employees and trusted suppliers
              who need to know in order to provide the services you requested. We
              require all parties to maintain the confidentiality of your information.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at
              13816334552@139.com.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance
              your browsing experience and analyze website traffic. You can
              control cookie preferences through your browser settings.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              at 13816334552@139.com.
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
