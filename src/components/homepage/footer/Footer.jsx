import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1a4332] text-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo/Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
         Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a4332] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a4332] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a4332] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;