import Link from 'next/link';
import { Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl ml-2">Paramount Energy Group</span>
            </div>
            <p className="text-gray-400 mb-4">Professional, reliable electrical services for residential and commercial properties. Licensed and insured.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Residential Electrical
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Commercial Electrical
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Lighting Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Safety Inspections
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@paramountenergy.com</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Main Street, Sydney, NSW 2000</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Mon-Fri: 7am-6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Paramount Energy Group. All rights reserved.</p>
          <div className="text-gray-400">
            <Link href="#" className="hover:text-white transition-colors duration-300 mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}