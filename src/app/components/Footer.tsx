"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
                <Image
                  src="/image/logo.png"
                  alt="Workownix Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WORKOWNIX
              </span>
            </Link>
            <p className="text-gray-300 text-base max-w-md leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge digital experiences that drive growth and success.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                Web Development
              </span>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
               Graphic Designing
              </span>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                AI Solutions
              </span>
               <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                word press development
              </span>
                 <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                App development
              </span>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
               chat boat
              </span>
              <span className="px-3 py-1 bg-green-600/20 text-Purple-300 rounded-full text-sm">
                python 
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
                        <h3 className="text-lg font-semibold text-white">"if any person need a website or digital services? Workownix is 
                          available 24/7 — contact us anytime and expect a response within 1–2 business days!"</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 info.workownix@gmail.com</p>
              <p>📞 +92 341 2901528</p>
              <p>📍 Pakistan based company ltd</p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 hidden sm:block">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61578929019010"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Facebook size={18} className="text-blue-400" />
                </a>
                <a
                  href="https://instagram.com/workownix"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-pink-600/20 hover:bg-pink-600/30 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Instagram size={18} className="text-pink-400" />
                </a>
                <a
                  href="https://linkedin.com/company/workownix"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 bg-blue-700/20 hover:bg-blue-700/30 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={18} className="text-blue-400" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 bg-green-600/20 hover:bg-green-600/30 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <MessageCircle size={18} className="text-green-400" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~workownix"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork"
                  className="p-2 bg-green-700/20 hover:bg-green-700/30 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ExternalLink size={18} className="text-green-400" />
                </a>
                <a
                  href="https://www.fiverr.com/workownix"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fiverr"
                  className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ExternalLink size={18} className="text-green-300" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} WORKOWNIX. All rights reserved.
              </p>
              <div className="flex gap-4 mt-1 text-xs text-gray-600 justify-center sm:justify-end">
                <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/Terms-services" className="hover:text-gray-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brand Logo */}
        <div className="border-t border-white/5 py-4 text-center">
          <div className="inline-flex items-center gap-2 opacity-60">
            <div className="relative w-8 h-8">
              <Image
                src="/image/logo.png"
                alt="Workownix"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-400">
              Powered by Innovation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
