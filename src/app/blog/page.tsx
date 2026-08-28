import Link from 'next/link';
import {
  Clock,
  ArrowRight,
  Calendar,
  User,
  Tag,
  Search,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: 'Blog & Resources',
  description:
    'Expert insights on sourcing from China and Asia. Guides, tips, market updates, and best practices from the NHA Sourcing team in Shanghai.',
};

const featuredPost = {
  title: 'How to Source from China in 2026: The Complete Guide for International Buyers',
  category: 'Sourcing Guide',
  date: 'January 15, 2026',
  readTime: '12 min read',
  author: 'NHA Sourcing Team',
  excerpt:
    'A comprehensive guide covering everything you need to know about sourcing products from China in 2026 — from finding suppliers and negotiating prices to quality control, shipping, and avoiding common pitfalls. Updated with the latest tariff information and supply chain trends.',
  icon: BookOpen,
};

const blogPosts = [
  {
    title: 'Shanghai vs. Guangzhou: Which Sourcing Hub is Right for You?',
    category: 'Market Insights',
    date: 'January 8, 2026',
    readTime: '8 min',
    excerpt:
      'China has two major sourcing hubs — Shanghai in the Yangtze River Delta and Guangzhou/Shenzhen in the Pearl River Delta. Learn the pros and cons of each and which is best for your product category.',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    title: 'Quality Control in China: A Complete Inspection Checklist',
    category: 'Quality Control',
    date: 'December 28, 2025',
    readTime: '10 min',
    excerpt:
      'Everything you need to know about quality control inspections in China — pre-production, during production, final inspection, and loading supervision. Plus a free downloadable checklist.',
    icon: ShieldCheck,
    color: 'green',
  },
  {
    title: '10 Common Sourcing Mistakes (and How to Avoid Them)',
    category: 'Best Practices',
    date: 'December 15, 2025',
    readTime: '7 min',
    excerpt:
      'We\'ve seen it all. Here are the 10 most common mistakes new importers make when sourcing from China — and practical advice on how to avoid costly errors.',
    icon: Lightbulb,
    color: 'amber',
  },
  {
    title: 'China Plus One: Diversifying Your Supply Chain in Southeast Asia',
    category: 'Strategy',
    date: 'December 3, 2025',
    readTime: '9 min',
    excerpt:
      'With tariff uncertainties and supply chain disruptions, more companies are adopting a "China Plus One" strategy. Learn about sourcing options in Vietnam, Bangladesh, and other Asian countries.',
    icon: TrendingUp,
    color: 'purple',
  },
  {
    title: 'Shipping from China: Sea vs. Air vs. Rail — What\'s Best in 2026?',
    category: 'Logistics',
    date: 'November 20, 2025',
    readTime: '6 min',
    excerpt:
      'Compare sea freight, air freight, and rail shipping from China. We break down the costs, transit times, reliability, and best use cases for each method in the current market.',
    icon: FileText,
    color: 'teal',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers: 15 Proven Tips',
    category: 'Negotiation',
    date: 'November 10, 2025',
    readTime: '8 min',
    excerpt:
      'Negotiating with Chinese suppliers requires understanding cultural context and business norms. Get 15 practical tips from our Shanghai team on getting better prices and terms.',
    icon: Lightbulb,
    color: 'red',
  },
  {
    title: 'Factory Audits in China: What to Check Before You Place an Order',
    category: 'Factory Audit',
    date: 'October 25, 2025',
    readTime: '11 min',
    excerpt:
      'A thorough factory audit can save you from costly mistakes. Learn what to look for — from quality systems and production capacity to compliance certifications and financial stability.',
    icon: ShieldCheck,
    color: 'blue',
  },
  {
    title: 'Private Label & OEM vs. ODM: Which is Right for Your Business?',
    category: 'Product Development',
    date: 'October 12, 2025',
    readTime: '7 min',
    excerpt:
      'Understanding the difference between private label, OEM, and ODM is crucial when sourcing products. We explain each model, the pros and cons, and how to choose.',
    icon: BookOpen,
    color: 'green',
  },
  {
    title: 'Amazon FBA Sourcing from China: Step-by-Step Guide',
    category: 'E-commerce',
    date: 'September 30, 2025',
    readTime: '9 min',
    excerpt:
      'Step-by-step guide for Amazon sellers who want to source products from China for FBA. From product research and supplier selection to prep, labeling, and shipping to fulfillment centers.',
    icon: TrendingUp,
    color: 'amber',
  },
];

const categories = [
  { name: 'Sourcing Guide', count: 12 },
  { name: 'Quality Control', count: 8 },
  { name: 'Market Insights', count: 15 },
  { name: 'Logistics', count: 7 },
  { name: 'Best Practices', count: 10 },
  { name: 'Negotiation', count: 5 },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600' },
  red: { bg: 'bg-red-100', text: 'text-red-600' },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Blog & Resources"
        eyebrow="Blog & Resources"
        title="Expert Insights on Asia Sourcing"
        description="Practical guides, market analysis, and best practices from our Shanghai-based team. Learn from our 15+ years of helping global buyers source from Asia."
        primaryCta={{ text: 'Subscribe for Updates', href: '#subscribe' }}
        secondaryCta={{ text: 'Contact Our Team', href: '/contact' }}
      />

      {/* Featured Post */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-nha-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 nha-grid-pattern opacity-20" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-nha-blue/30 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge className="mb-5 bg-nha-gold/20 text-nha-gold border-nha-gold/30">
                  Featured Article
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                </div>
                <Button asChild className="bg-nha-red hover:bg-nha-red-dark">
                  <a href="#">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="hidden lg:block">
                <div className="w-full aspect-video bg-white/5 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-nha-gold/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid + Sidebar */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Posts */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold text-nha-navy">Latest Articles</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => {
                  const colors = colorMap[post.color];
                  return (
                    <Card
                      key={index}
                      className="card-hover border-gray-200 overflow-hidden"
                    >
                      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                        <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                          <post.icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </div>
                        <h4 className="font-semibold text-nha-navy mb-2 line-clamp-2 hover:text-nha-blue transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <a
                            href="#"
                            className="text-nha-blue font-medium hover:text-nha-navy flex items-center gap-1"
                          >
                            Read more
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center pt-4">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card className="p-5 border-gray-200">
                <h4 className="font-semibold text-nha-navy mb-3">Search Articles</h4>
                <div className="relative">
                  <Input
                    placeholder="Search topics..."
                    className="pl-10"
                  />
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </Card>

              {/* Categories */}
              <Card className="p-5 border-gray-200">
                <h4 className="font-semibold text-nha-navy mb-4">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-nha-blue transition-colors py-1"
                      >
                        <span className="flex items-center gap-2">
                          <Tag className="w-3.5 h-3.5 text-gray-400" />
                          {cat.name}
                        </span>
                        <span className="text-xs text-gray-400">{cat.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Popular Tags */}
              <Card className="p-5 border-gray-200">
                <h4 className="font-semibold text-nha-navy mb-4">Popular Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {['China Sourcing', 'Shanghai', 'Quality Control', 'Factory Audit', 'Logistics', 'OEM', 'Amazon FBA', 'Vietnam Sourcing', 'Tariffs', 'Negotiation', 'Private Label', 'Product Development'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-nha-blue/10 hover:text-nha-blue cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-5 border-nha-blue/20 bg-nha-blue/5" id="subscribe">
                <h4 className="font-semibold text-nha-navy mb-2">
                  Get Sourcing Insights
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Monthly updates on sourcing trends, market insights, and practical tips — straight to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full bg-nha-red hover:bg-nha-red-dark text-sm">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  No spam. Unsubscribe anytime.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-nha-navy mb-4">
            Have Questions About Sourcing?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is happy to answer
            your specific sourcing questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
              <Link href="/contact">
                Talk to an Expert
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@nhasourcing.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
