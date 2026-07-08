import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/Phoenix_Solutions_logo.png"
              alt="Phoenix Solutions"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:6361437694"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>6361437694</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              <a
                href="tel:6361437694"
                className="flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Call: 6361437694</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
