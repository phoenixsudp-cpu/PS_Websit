import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Monitor,
  Wifi,
  Camera,
  HardDrive,
  Shield,
  ShoppingCart,
  Star,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle,
  Award,
  Users,
  Wrench,
  Mail,
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Monitor,
    title: 'Computer Services',
    items: ['Laptop Repair', 'Desktop Repair', 'Screen Replacement', 'Virus Removal', 'Data Recovery'],
  },
  {
    icon: ShoppingCart,
    title: 'Sales',
    items: ['Laptops', 'Desktop Computers', 'Custom Gaming PCs', 'Printers', 'Accessories'],
  },
  {
    icon: Camera,
    title: 'Security Solutions',
    items: ['CCTV Installation', 'IP Cameras', 'Access Control', 'Video Door Phones', 'Intercom'],
  },
  {
    icon: Wifi,
    title: 'Networking',
    items: ['Office Networking', 'Wi-Fi Setup', 'LAN Cabling', 'Router Configuration', 'Server Setup'],
  },
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

const portfolioItems = [
  {
    title: 'Laptop Repair',
    description: 'Screen replacement and motherboard repair',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Office Networking',
    description: 'Complete LAN setup with 50+ nodes',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'CCTV Installation',
    description: '16-channel security system with night vision',
    image: 'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Server Setup',
    description: 'Enterprise file server configuration',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Custom Gaming PC',
    description: 'High-performance gaming rig build',
    image: 'https://images.pexels.com/photos/7770017/pexels-photo-7770017.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Security System',
    description: 'Access control and biometric attendance',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    rating: 5,
    review: 'Excellent service! They fixed my laptop in just 2 hours. Very professional and affordable prices.',
  },
  {
    name: 'Priya Sharma',
    role: 'School Administrator',
    rating: 5,
    review: 'Phoenix Solutions set up our entire computer lab. Great quality work and timely delivery.',
  },
  {
    name: 'Mohammed Ansar',
    role: 'Restaurant Owner',
    rating: 5,
    review: 'Installed CCTV cameras for my restaurant. Crystal clear quality and excellent support.',
  },
  {
    name: 'Anita Rodrigues',
    role: 'Home User',
    rating: 5,
    review: 'Recovered all my important files from a crashed hard drive. Highly recommend their data recovery service.',
  },
];

const computerServices = [
  'Laptop Repair', 'Desktop Repair', 'Screen Replacement', 'Keyboard Replacement',
  'Battery Replacement', 'SSD Upgrade', 'RAM Upgrade', 'Windows Installation',
  'Software Installation', 'Virus Removal', 'Data Recovery',
];

const salesItems = [
  'Laptops', 'Desktop Computers', 'Custom Gaming PCs', 'Printers',
  'Computer Accessories', 'UPS', 'Routers', 'Networking Equipment',
];

const securitySolutions = [
  'CCTV Installation', 'IP Camera Setup', 'Biometric Attendance', 'Access Control',
  'Video Door Phones', 'Intercom Systems', 'Home Security', 'Office Security',
];

const networkingServices = [
  'Office Networking', 'Wi-Fi Setup', 'LAN Cabling', 'Router Configuration',
  'Server Installation', 'Network Troubleshooting',
];

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Award className="h-4 w-4 mr-2 text-blue-400" />
              Trusted IT Partner in Udupi
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete Computer & Security Solutions{' '}
              <span className="text-blue-400">Under One Roof</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 font-medium">
              Sales • Service • Networking • CCTV • Annual Maintenance • IT Support
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
              Professional computer sales, repair services, and security solutions for homes,
              businesses, schools, and offices across Udupi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/916361437694"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:6361437694"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>9:30 AM - 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Udupi Railway Station Rd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-30">
          <div className="space-y-8 pr-16">
            <Monitor className="h-20 w-20 text-blue-400" />
            <Camera className="h-16 w-16 text-blue-300" />
            <Wifi className="h-14 w-14 text-blue-400" />
            <HardDrive className="h-16 w-16 text-blue-300" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={14} />
              </div>
              <div className="text-gray-600">Brands Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Phoenix Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Phoenix Solutions is a professional computer sales and service company providing
                complete IT solutions for homes, businesses, schools, and offices in Udupi and
                surrounding areas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience, our skilled technicians deliver reliable
                computer repairs, custom PC builds, networking solutions, and professional
                security system installations. We're committed to providing quality service
                at competitive prices.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Wrench, label: 'Expert Technicians' },
                  { icon: Clock, label: 'Quick Turnaround' },
                  { icon: Shield, label: 'Quality Service' },
                  { icon: Award, label: 'Fair Pricing' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <item.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/916361437694"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Computer service"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-gray-600">Satisfied Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Services Section */}
      <section className="py-20 bg-white">
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

          <div className="flex flex-wrap justify-center gap-3">
            {computerServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl px-5 py-3 flex items-center space-x-2 hover:bg-blue-50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="py-20 bg-gray-50">
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

          <div className="flex flex-wrap justify-center gap-3">
            {salesItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-5 py-3 flex items-center space-x-2 hover:bg-green-50 transition-colors shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions Section */}
      <section className="py-20 bg-white">
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

          <div className="flex flex-wrap justify-center gap-3">
            {securitySolutions.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl px-5 py-3 flex items-center space-x-2 hover:bg-red-50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="py-20 bg-gray-50">
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

          <div className="flex flex-wrap justify-center gap-3">
            {networkingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-5 py-3 flex items-center space-x-2 hover:bg-purple-50 transition-colors shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brands We Support
            </h2>
            <p className="text-lg text-gray-600">
              Authorized service and repair for all major computer and security brands.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className={`text-white font-bold text-sm px-3 py-1.5 rounded ${brand.color}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600">
              See some of our recent projects in computer repair, networking, and security installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{testimonial.review}</p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Computer or Security Solutions?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today for a free consultation. We're here to help with all your
              IT needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="tel:6361437694"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 6361437694
              </a>
              <a
                href="https://wa.me/916361437694"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-blue-200 text-sm">Udupi Railway Station Rd</div>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-blue-200 text-sm">9:30 AM - 7:30 PM</div>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-blue-200 text-sm">phoenixsudp@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
