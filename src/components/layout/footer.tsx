import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Building2,
  Factory,
  ShieldCheck,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nha-navy text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center">
                <span className="text-nha-navy font-bold text-lg">NHA</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">NHA Sourcing Service</div>
                <div className="text-gray-400 text-xs">(Shanghai) Co., Ltd.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Your trusted partner for sourcing materials and services across Asia.
              Based in Shanghai, we connect global buyers with verified manufacturers,
              ensuring quality, cost savings, and peace of mind.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:info@nhasourcing.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-nha-gold group-hover:scale-110 transition-transform" />
                info@nhasourcing.com
              </a>
              <a
                href="tel:+86-21-XXXX-XXXX"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-nha-gold group-hover:scale-110 transition-transform" />
                +86 21 XXXX XXXX
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-nha-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  Unit XX, XX Building
                  <br />
                  Pudong New Area, Shanghai 200120
                  <br />
                  People&apos;s Republic of China
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-nha-gold" />
                <div>Mon–Sat: 9:00 AM – 6:00 PM (GMT+8)</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/product-sourcing" className="hover:text-white transition-colors">
                  Product Sourcing
                </Link>
              </li>
              <li>
                <Link href="/services/quality-control" className="hover:text-white transition-colors">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="/services/factory-audit" className="hover:text-white transition-colors">
                  Factory Audits
                </Link>
              </li>
              <li>
                <Link href="/services/logistics" className="hover:text-white transition-colors">
                  Logistics & Shipping
                </Link>
              </li>
              <li>
                <Link href="/services/oem-odm" className="hover:text-white transition-colors">
                  OEM / ODM Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog / Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="text-white font-semibold mb-5">Why Choose NHA</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-nha-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Shanghai Base</div>
                  <div className="text-gray-400 text-xs">Heart of Yangtze Delta</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Factory className="w-5 h-5 text-nha-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">500+ Verified Factories</div>
                  <div className="text-gray-400 text-xs">Across Asia</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-nha-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">100% Quality Guarantee</div>
                  <div className="text-gray-400 text-xs">Full inspection coverage</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-nha-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Bilingual Support</div>
                  <div className="text-gray-400 text-xs">English & Chinese</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} NHA Sourcing Service (Shanghai) Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
