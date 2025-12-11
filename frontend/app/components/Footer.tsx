"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" },
  ];
 
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contacts", label: "Contact" },
    { href: "/subscriptions", label: "Subscriptions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];
 
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Care Helpline</h3>
                <p className="text-sm text-gray-400">Helpline Services</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for reliable helpline services. We're here to support you 24/7 with professional care and assistance.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              {/* Quora Custom Icon */}
              <a
                href="https://quora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Quora"
              >
                <span className="text-lg font-bold">Q</span>
              </a>
            </div>
          </div>
 
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
 
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:support@anocare.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    support@anocare.com
                  </a>
                </div>
              </div>
 
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm text-gray-400">
                    123 Business Park, Sector 5<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Google Map */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Find Us</h4>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2599199623657!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Anocare Location"
              />
            </div>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} <span className="text-white font-semibold">Anocare Helpline</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}