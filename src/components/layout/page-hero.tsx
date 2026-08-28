import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  breadcrumb?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 nha-hero-gradient overflow-hidden">
      <div className="absolute inset-0 nha-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-nha-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nha-red/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{breadcrumb}</span>
          </div>
        )}

        {eyebrow && (
          <Badge className="mb-5 bg-white/10 text-white border-white/20">
            {eyebrow}
          </Badge>
        )}

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
          {title}
        </h1>

        <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
          {description}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center h-12 px-8 bg-nha-red hover:bg-nha-red-dark text-white font-medium rounded-lg transition-all shadow-lg shadow-nha-red/20"
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
