import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8 text-sm">
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>

          </ul>
          <ul className="space-y-2">
            <li><a href="/help" className="hover:underline">Help Center</a></li>
            <li><a href="/jobs" className="hover:underline">Jobs</a></li>
          
          </ul>
          <ul className="space-y-2">
            <li><a href="/account" className="hover:underline">Account</a></li>
            <li><a href="/ways-to-watch" className="hover:underline">Ways to Watch</a></li>
            <li><a href="/only-on" className="hover:underline">Only on MoviesApp</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

 
        <div className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} subarnablone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
