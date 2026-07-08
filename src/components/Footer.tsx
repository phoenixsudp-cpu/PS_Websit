import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <img
              src="/Phoenix_Solutions_logo.png"
              alt="Phoenix Solutions"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Complete computer sales, service, and security solutions for homes, businesses, schools, and offices in Udupi.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Laptop Repair</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">CCTV Installation</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Networking Solutions</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Computer Sales</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Data Recovery</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Virus Removal</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Udupi Railway Station Rd,<br />Kunjibettu, Udupi,<br />Karnataka 576102</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:6361437694" className="hover:text-blue-400 transition-colors">6361437694</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/916361437694" className="hover:text-green-400 transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:phoenixsudp@gmail.com" className="hover:text-blue-400 transition-colors">phoenixsudp@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>9:30 AM - 7:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Phoenix Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
