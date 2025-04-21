import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo, Description, and Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Replace with actual Logo */}
              <span className="text-2xl font-bold text-white">KITOVU</span>
            </div>
            <p className="text-gray-400">
              Connecting farmers to markets, knowledge, and financial services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Market Access
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Knowledge Hub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Financial Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Digital Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>123 Farmer's Plaza, Nairobi, Kenya</div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +254 700 123456
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@kitovu.co.ke
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} KITOVU. All rights reserved. |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
