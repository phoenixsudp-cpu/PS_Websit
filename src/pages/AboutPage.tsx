import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Award,
  Wrench,
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on the quality of our work. Every repair is done with care and precision.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our priority. We go the extra mile to ensure you\'re happy.',
  },
  {
    icon: Shield,
    title: 'Honest Pricing',
    description: 'Transparent quotes with no hidden charges. You know exactly what you\'re paying for.',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'We understand urgency. Most repairs are completed within 24-48 hours.',
  },
];

const milestones = [
  { year: '2012', title: 'Founded', desc: 'Started as a small computer repair shop in Udupi.' },
  { year: '2015', title: 'Security Services', desc: 'Added CCTV and security system installation.' },
  { year: '2019', title: 'Networking', desc: 'Expanded to networking and IT support services.' },
  { year: '2024', title: 'Growing Strong', desc: 'Serving 5000+ satisfied customers across Udupi.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Phoenix Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted IT partner in Udupi, providing reliable computer sales,
            service, and security solutions for over a decade.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Phoenix Solutions was founded in 2012 with a simple mission: to provide
                  reliable, affordable computer repair services to the people of Udupi.
                  What started as a small repair shop has grown into a comprehensive IT
                  solutions provider serving homes, businesses, and schools.
                </p>
                <p>
                  Over the years, we've expanded our services to include computer sales,
                  custom PC builds, networking solutions, and professional security system
                  installations. Today, we serve customers across Udupi district with
                  dedication and expertise.
                </p>
                <p>
                  Our name, Phoenix, represents our commitment to breathing new life into
                  your technology. Whether it's reviving a crashed laptop or installing a
                  security system, we're here to help your technology work at its best.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">14</div>
                  <div className="text-sm text-gray-600">Brands</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, affordable, and professional IT solutions to homes
                and businesses in Udupi. We aim to be the go-to partner for all computer
                sales, service, and security needs, delivering quality work that exceeds
                expectations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted IT solutions provider in coastal Karnataka,
                known for quality workmanship, honest pricing, and exceptional customer
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600">
              The values that guide every service call and every repair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth as Udupi's trusted IT partner.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right pr-6">
                  <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1.5" />
                <div className="flex-grow pl-6 pb-8 border-l-2 border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Phoenix Solutions?
            </h2>
            <p className="text-lg text-gray-600">
              Personal attention and expertise you can count on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: '10+ Years Experience', desc: 'A decade of serving Udupi with reliable IT solutions.' },
              { icon: Wrench, title: 'Expert Technicians', desc: 'Skilled in all major brands and technologies.' },
              { icon: Clock, title: 'Quick Turnaround', desc: 'Most repairs completed within 24-48 hours.' },
              { icon: Shield, title: 'Genuine Parts', desc: 'Quality components for lasting repairs.' },
              { icon: Heart, title: 'Personal Service', desc: 'Direct attention to every customer\'s needs.' },
              { icon: Target, title: 'Fair Pricing', desc: 'Transparent quotes with no hidden charges.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Visit our shop in Udupi or reach out for all your IT needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
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
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="h-5 w-5" />
              <span>Udupi Railway Station Rd, Kunjibettu, Udupi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
