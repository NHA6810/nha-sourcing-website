'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  User,
  Building2,
  Globe2,
  ArrowRight,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    service: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send to an API
    console.log('Form submitted:', formData);
  };

  if (submitted) {
    return (
      <>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 nha-hero-gradient min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-6 text-center w-full">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Thank You for Your Inquiry!
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We&apos;ve received your message and our team is already working on it.
              You can expect a detailed response within 24 hours (usually much sooner!).
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-left mb-8">
              <h3 className="font-semibold text-white mb-4">What happens next?</h3>
              <ol className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-nha-gold/20 text-nha-gold rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    1
                  </span>
                  <span>Our sourcing team reviews your requirements within hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-nha-gold/20 text-nha-gold rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    2
                  </span>
                  <span>You&apos;ll receive a personal response from an account manager.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-nha-gold/20 text-nha-gold rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    3
                  </span>
                  <span>We&apos;ll schedule a call to discuss your project in detail.</span>
                </li>
              </ol>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/">Back to Homepage</Link>
              </Button>
              <Button asChild size="lg" className="bg-nha-red hover:bg-nha-red-dark">
                <a href="mailto:info@nhasourcing.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us Directly
                </a>
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in Touch"
        title="Let&apos;s Talk About Your Sourcing Needs"
        description="Fill out the form below and our Shanghai-based team will get back to you within 24 hours with a detailed response. No obligation, just honest advice."
        primaryCta={{ text: 'info@nhasourcing.com', href: 'mailto:info@nhasourcing.com' }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-nha-blue/10 text-nha-blue border-nha-blue/20">
                  Contact Information
                </Badge>
                <h2 className="text-2xl font-bold text-nha-navy mb-2">
                  Reach Out to Us
                </h2>
                <p className="text-gray-600">
                  Multiple ways to get in touch. Choose what works best for you.
                </p>
              </div>

              <Card className="p-5 border-gray-200 hover:border-nha-blue/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nha-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-nha-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">Email</h3>
                    <a href="mailto:info@nhasourcing.com" className="text-sm text-gray-600 hover:text-nha-blue transition-colors">
                      info@nhasourcing.com
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Reply within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 border-gray-200 hover:border-nha-blue/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">WhatsApp / WeChat</h3>
                    <p className="text-sm text-gray-600">+86 13X XXXX XXXX</p>
                    <p className="text-xs text-gray-400 mt-1">Fastest response</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 border-gray-200 hover:border-nha-blue/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nha-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-nha-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">Phone</h3>
                    <a href="tel:+86-21-XXXX-XXXX" className="text-sm text-gray-600 hover:text-nha-blue transition-colors">
                      +86 21 XXXX XXXX
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Mon–Sat, 9AM–6PM GMT+8</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 border-gray-200 hover:border-nha-blue/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">Office Address</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Unit XX, XX Building
                      <br />
                      Pudong New Area
                      <br />
                      Shanghai 200120, China
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 border-gray-200 hover:border-nha-blue/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nha-navy mb-1">Business Hours</h3>
                    <p className="text-sm text-gray-600">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                      <br />
                      <span className="text-gray-400">(GMT+8 Shanghai Time)</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Email response on Sundays too!
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 lg:p-10 border-gray-200">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-nha-navy mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-gray-600">
                    The more details you provide, the better we can help. Tell us
                    about your sourcing needs below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-nha-red">*</span>
                      </Label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="name"
                          placeholder="John Smith"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-nha-red">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Company Name
                      </Label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="company"
                          placeholder="Your Company Ltd."
                          className="pl-10"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">
                        Country / Region
                      </Label>
                      <div className="relative">
                        <Globe2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger id="country" className="pl-10">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="france">France</SelectItem>
                            <SelectItem value="spain">Spain</SelectItem>
                            <SelectItem value="italy">Italy</SelectItem>
                            <SelectItem value="netherlands">Netherlands</SelectItem>
                            <SelectItem value="sweden">Sweden</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone / WhatsApp
                      </Label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="phone"
                          placeholder="+1 XXX XXX XXXX"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Service Interested In <span className="text-nha-red">*</span>
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-sourcing">Product Sourcing</SelectItem>
                          <SelectItem value="quality-control">Quality Control</SelectItem>
                          <SelectItem value="factory-audit">Factory Audit</SelectItem>
                          <SelectItem value="logistics">Logistics & Shipping</SelectItem>
                          <SelectItem value="oem-odm">OEM / ODM Services</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="not-sure">Not Sure / Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="product">
                        Product / Category
                      </Label>
                      <div className="relative">
                        <FileText className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="product"
                          placeholder="e.g., Bluetooth headphones"
                          className="pl-10"
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">
                        Estimated Quantity
                      </Label>
                      <Select
                        value={formData.quantity}
                        onValueChange={(value) => setFormData({ ...formData, quantity: value })}
                      >
                        <SelectTrigger id="quantity">
                          <SelectValue placeholder="Select order size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Sample / Small (under 500 pcs)</SelectItem>
                          <SelectItem value="medium">Medium (500 - 5,000 pcs)</SelectItem>
                          <SelectItem value="large">Large (5,000 - 50,000 pcs)</SelectItem>
                          <SelectItem value="xlarge">Very Large (50,000+ pcs)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">
                      Target Budget (Optional)
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                        <SelectItem value="25k-100k">$25,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Project Details <span className="text-nha-red">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project — product specs, requirements, timeline, quality standards, or any specific questions you have..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500">
                      Your information is kept confidential. We never share client
                      details with third parties. By submitting, you agree to our
                      <Link href="/privacy-policy" className="text-nha-blue hover:underline ml-1">
                        privacy policy
                      </Link>.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-nha-red hover:bg-nha-red-dark px-10 h-12 text-base"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, title: '24hr Response', desc: 'Guaranteed reply time' },
              { icon: ShieldCheck, title: 'No Obligation', desc: 'Free consultation' },
              { icon: User, title: 'Dedicated PM', desc: 'Personal account manager' },
              { icon: ArrowRight, title: 'Next Step', desc: 'Quote within days' },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-12 h-12 mx-auto mb-3 bg-nha-blue/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-nha-blue" />
                </div>
                <div className="font-semibold text-nha-navy mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
