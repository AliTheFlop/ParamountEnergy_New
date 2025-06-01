import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, CircuitBoard, Lightbulb, Home, Building, Router, Wrench, ShieldCheck, Zap } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Residential Electrical',
      description: 'Complete electrical solutions for your home including wiring, lighting installation, power points, switchboard upgrades, and safety inspections.',
      icon: <Home className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    },
    {
      id: 2,
      title: 'Commercial Electrical',
      description: 'Comprehensive electrical services for businesses including office fit-outs, lighting systems, power distribution, emergency lighting, and data cabling.',
      icon: <Building className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/236936/pexels-photo-236936.jpeg',
    },
    {
      id: 3,
      title: 'Electrical Repairs',
      description: 'Fast, reliable repairs for all electrical problems including faulty wiring, circuit overloads, power failures, and electrical device repairs.',
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/6794258/pexels-photo-6794258.jpeg',
    },
    {
      id: 4,
      title: 'Lighting Solutions',
      description: 'Custom lighting design and installation including LED upgrades, smart lighting, outdoor lighting, and energy-efficient solutions.',
      icon: <Lightbulb className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg',
    },
    {
      id: 5,
      title: 'Safety Inspections',
      description: 'Comprehensive electrical safety inspections for homes and businesses to identify and address potential hazards before they cause problems.',
      icon: <ShieldCheck className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg',
    },
    {
      id: 6,
      title: 'Data & Network',
      description: 'Professional installation of data points, network cabling, WiFi systems, and telecommunications infrastructure for homes and businesses.',
      icon: <Router className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg',
    },
    {
      id: 7,
      title: 'Switchboard Upgrades',
      description: 'Modern switchboard installations and upgrades to improve safety and accommodate your growing electrical needs.',
      icon: <CircuitBoard className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg',
    },
    {
      id: 8,
      title: 'Emergency Services',
      description: '24/7 emergency electrical services for urgent issues that require immediate attention to keep your home or business safe.',
      icon: <Zap className="h-12 w-12 text-red-600" />,
      image: 'https://images.pexels.com/photos/8961488/pexels-photo-8961488.jpeg',
    },
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Electrical Services</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Professional electrical services for residential and commercial properties. Quality workmanship guaranteed.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicesList.map((service) => (
              <div key={service.id} className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-lg p-6 transition-transform hover:shadow-md">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free quote on any of our electrical services.</p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
          >
            <PhoneCall className="mr-2 h-5 w-5" /> Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}