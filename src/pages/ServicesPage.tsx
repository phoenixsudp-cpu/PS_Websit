import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Monitor,
  Laptop,
  Tv,
  Keyboard,
  Battery,
  HardDrive,
  Cpu,
  Wrench,
  Shield,
  Search,
  Camera,
  Fingerprint,
  DoorOpen,
  Phone,
  Wifi,
  Server,
  Network,
  ShoppingCart,
  Printer,
  Cable,
  Router,
  Settings,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

const computerServices = [
  { icon: Laptop, title: 'Laptop Repair', desc: 'All brands and models serviced' },
  { icon: Monitor, title: 'Desktop Repair', desc: 'Complete diagnostic and repair' },
  { icon: Tv, title: 'Screen Replacement', desc: 'LCD/LED screen replacement' },
  { icon: Keyboard, title: 'Keyboard Replacement', desc: 'Original and compatible keyboards' },
  { icon: Battery, title: 'Battery Replacement', desc: 'Genuine batteries for all laptops' },
  { icon: HardDrive, title: 'SSD Upgrade', desc: 'Boost your system performance' },
  { icon: Cpu, title: 'RAM Upgrade', desc: 'Increase multitasking capability' },
  { icon: Settings, title: 'Windows Installation', desc: 'Fresh OS installation with drivers' },
  { icon: Wrench, title: 'Software Installation', desc: 'Essential software setup' },
  { icon: Shield, title: 'Virus Removal', desc: 'Complete malware cleanup' },
  { icon: Search, title: 'Data Recovery', desc: 'Recover lost files from drives' },
];

const salesItems = [
  { icon: Laptop, title: 'Laptops', desc: 'New and refurbished options' },
  { icon: Monitor, title: 'Desktop Computers', desc: 'Office and home PCs' },
  { icon: Cpu, title: 'Custom Gaming PCs', desc: 'Build to your specifications' },
  { icon: Printer, title: 'Printers', desc: 'Laser and inkjet printers' },
  { icon: Cable, title: 'Computer Accessories', desc: 'Keyboards, mice, and more' },
  { icon: Battery, title: 'UPS', desc: 'Power backup solutions' },
  { icon: Router, title: 'Routers', desc: 'WiFi and wired routers' },
  { icon: Network, title: 'Networking Equipment', desc: 'Switches, cables, and more' },
];

const securitySolutions = [
  { icon: Camera, title: 'CCTV Installation', desc: 'HD and 4K camera systems' },
  { icon: Camera, title: 'IP Camera Setup', desc: 'Remote viewing capability' },
  { icon: Fingerprint, title: 'Biometric Attendance', desc: 'Fingerprint-based systems' },
  { icon: DoorOpen, title: 'Access Control', desc: 'Card and biometric access' },
  { icon: Phone, title: 'Video Door Phones', desc: 'See who is at your door' },
  { icon: Phone, title: 'Intercom Systems', desc: 'Office and building intercoms' },
  { icon: Shield, title: 'Home Security', desc: 'Complete home protection' },
  { icon: Shield, title: 'Office Security', desc: 'Commercial security systems' },
];

const networkingServices = [
  { icon: Network, title: 'Office Networking', desc: 'Complete LAN setup' },
  { icon: Wifi, title: 'Wi-Fi Setup', desc: 'Coverage for any space' },
  { icon: Cable, title: 'LAN Cabling', desc: 'Structured cabling solutions' },
  { icon: Router, title: 'Router Configuration', desc: 'Optimal network settings' },
  { icon: Server, title: 'Server Installation', desc: 'File and application servers' },
  { icon: Settings, title: 'Network Troubleshooting', desc: 'Diagnose and fix issues' },
];

const brands = [
  { name: 'Dell', color: 'bg-blue-600' },
  { name: 'HP', color: 'bg-sky-500' },
  { name: 'Lenovo', color: 'bg-red-600' },
  { name: 'ASUS', color: 'bg-gray-800' },
  { name: 'Acer', color: 'bg-green-600' },
  { name: 'Apple', color: 'bg-gray-700' },
  { name: 'MSI', color: 'bg-red-700' },
  { name: 'Samsung', color: 'bg-blue-700' },
  { name: 'Toshiba', color: 'bg-red-500' },
  { name: 'Sony', color: 'bg-gray-900' },
  { name: 'Intel', color: 'bg-blue-500' },
  { name: 'AMD', color: 'bg-red-600' },
  { name: 'Hikvision', color: 'bg-orange-600' },
  { name: 'D-Link', color: 'bg-gray-600' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Complete IT solutions from computer repair to security installations.
            Expert service at competitive prices.
          </p>
        </div>
      </section>

      {/* Computer Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6">
              <Monitor className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Computer Services
            </h2>
            <p className="text-lg text-gray-600">
              Expert repair and upgrade services for laptops and desktops of all brands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {computerServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-6">
              <ShoppingCart className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Computer Sales
            </h2>
            <p className="text-lg text-gray-600">
              Quality laptops, desktops, and accessories at competitive prices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-green-50 transition-colors group"
              >
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4 group-hover:bg-green-600 transition-colors">
                  <item.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex p-4 bg-red-100 rounded-2xl mb-6">
              <Camera className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Professional installation of CCTV, access control, and security systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securitySolutions.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-4 group-hover:bg-red-600 transition-colors">
                  <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-6">
              <Wifi className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Networking Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Complete networking services for homes, offices, and commercial spaces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-purple-50 transition-colors group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm group-hover:bg-purple-600 transition-colors">
                    <service.icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brands We Support
            </h2>
            <p className="text-lg text-gray-600">
              Authorized service and repair for all major brands.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className={`text-white font-bold text-sm px-3 py-1.5 rounded ${brand.color}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Phoenix Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 10 years of experience serving Udupi and surrounding areas,
                we've earned a reputation for quality work and reliable service.
              </p>

              <div className="space-y-4">
                {[
                  'Expert technicians with years of experience',
                  'Quick turnaround time on most repairs',
                  'Genuine parts and quality components',
                  'Competitive and transparent pricing',
                  'On-site service available for businesses',
                  'Warranty on our work and parts',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/916361437694"
                className="inline-flex items-center mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Quote
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Computer service"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Our Services?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today for a free consultation or quote. We're ready to help
              with all your IT needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:6361437694"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 6361437694
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
