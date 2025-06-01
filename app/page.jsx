'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Clock, MapPin, Zap } from 'lucide-react';

// Components
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/3201768/pexels-photo-3201768.jpeg" 
            alt="Electrician at work" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Paramount <span className="text-yellow-400">Energy Group</span></h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">Professional electrical services you can trust. Fully licensed and insured for all your electrical needs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" /> Get a Free Quote
              </Link>
              <Link 
                href="/services"
                className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="mr-3 h-6 w-6" />
              <div>
                <p className="text-sm font-medium">Email Us</p>
                <p className="text-lg font-bold">info@paramountenergy.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="mr-3 h-6 w-6" />
              <div>
                <p className="text-sm font-medium">Working Hours</p>
                <p className="text-lg font-bold">Mon-Fri: 7am-6pm</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 h-6 w-6" />
              <div>
                <p className="text-sm font-medium">Service Area</p>
                <p className="text-lg font-bold">Sydney Metro & Surrounding Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Trusted Electrical Services <span className="text-blue-600">Since 2005</span></h2>
              <p className="text-gray-700 mb-4">Paramount Energy Group provides top-quality electrical services for residential and commercial properties across the region. With over 15 years of experience, our fully licensed team ensures your electrical systems run safely and efficiently.</p>
              <p className="text-gray-700 mb-6">We pride ourselves on honest quotes, punctual service, and clean workmanship. No job is too big or too small for our skilled team of professionals.</p>
              <div className="flex gap-4">
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-blue-600">15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-gray-600">Licensed & Insured</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" 
                alt="Electrician working" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Electrical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of electrical services for both residential and commercial clients. Here are some of our most popular services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Residential Electrical"
              description="Home rewiring, outlet installation, lighting fixtures, ceiling fans, and more for your home."
              icon="home"
            />
            <ServiceCard 
              title="Commercial Electrical"
              description="Office lighting, power systems, emergency lighting, data cabling, and electrical maintenance."
              icon="building"
            />
            <ServiceCard 
              title="Safety Inspections"
              description="Comprehensive electrical safety inspections to keep your property safe and up to code."
              icon="shield"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what some of our satisfied customers have to say about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard 
              name="Sarah Johnson"
              location="Parramatta"
              rating={5}
              review="Paramount Energy Group provided excellent service. They were professional, efficient, and cleaned up afterward. Highly recommend!"
            />
            <ReviewCard 
              name="Michael Chen"
              location="North Sydney"
              rating={5}
              review="They installed all new lighting in our renovated kitchen. Fair price, excellent workmanship, and they finished ahead of schedule. Will use again!"
            />
            <ReviewCard 
              name="Emma Williams"
              location="Eastern Suburbs"
              rating={5}
              review="We've been using Paramount Energy Group for all our electrical needs for years. Always reliable, honest, and they do quality work every time."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="mx-auto h-16 w-16 text-yellow-400 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Need an Electrician?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a comprehensive quote on your electrical project.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
          >
            <Mail className="mr-2 h-5 w-5" /> Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}