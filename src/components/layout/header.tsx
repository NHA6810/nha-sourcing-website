'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/product-sourcing', label: 'Product Sourcing' },
      { href: '/services/quality-control', label: 'Quality Control' },
      { href: '/services/factory-audit', label: 'Factory Audits' },
      { href: '/services/logistics', label: 'Logistics & Shipping' },
      { href: '/services/oem-odm', label: 'OEM / ODM Services' },
    ],
  },
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden lg:block bg-nha-navy text-white text-sm transition-all duration-300 ${
          isScrolled ? 'h-0 -translate-y-full opacity-0 overflow-hidden' : 'h-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-nha-gold" />
              Shanghai, China — Your Gateway to Asia Manufacturing
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+8613816334552" className="flex items-center gap-2 hover:text-nha-green transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +86 138 1633 4552
            </a>
            <a href="mailto:13816334552@139.com" className="flex items-center gap-2 hover:text-nha-green transition-colors">
              <Mail className="w-3.5 h-3.5" />
              13816334552@139.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
              <Image
                src="/images/company/nha-logo.png"
                alt="NHA Sourcing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-base lg:text-lg ${isScrolled ? 'text-nha-navy' : 'text-nha-navy'}`}>
                NHA Sourcing
              </div>
              <div className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-gray-500'}`}>
                Service (Shanghai) Co., Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                        pathname === link.href || pathname.startsWith(link.href + '/')
                          ? 'text-nha-blue'
                          : 'text-gray-700 hover:text-nha-navy'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {activeDropdown === link.href && (
                      <div className="absolute top-full left-0 pt-2 w-56">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                pathname === child.href
                                  ? 'bg-blue-50 text-nha-blue font-medium'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-nha-navy'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-nha-blue'
                        : 'text-gray-700 hover:text-nha-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="border-nha-navy/20 text-nha-navy hover:bg-nha-navy/5">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="sm" className="bg-nha-green hover:bg-nha-green-dark text-white">
              <Link href="mailto:13816334552@139.com">Email Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 -mr-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <div>
                    <div className="px-3 py-2.5 text-sm font-semibold text-nha-navy">
                      {link.label}
                    </div>
                    <div className="pl-4 border-l border-gray-100 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-nha-blue hover:bg-gray-50 rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href
                        ? 'text-nha-blue bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild className="w-full bg-nha-red hover:bg-nha-red-dark">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:13816334552@139.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
