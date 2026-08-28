'use client';

import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 lg:right-6 bottom-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/8613XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:+86-21-XXXX-XXXX"
        className="w-12 h-12 bg-nha-blue hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-nha-navy hover:bg-nha-navy-light text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in-up"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
