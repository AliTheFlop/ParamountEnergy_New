import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

export default function OurWork() {
  const projects = [
    {
      id: 1,
      title: 'Commercial Office Rewiring',
      description: 'Complete rewiring of a 3-story office building including new data cabling, lighting, and power distribution.',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      category: 'Commercial'
    },
    {
      id: 2,
      title: 'Home Renovation Electrical',
      description: 'Full electrical upgrade for a heritage home renovation including new switchboard, wiring, and smart home integration.',
      image: 'https://images.pexels.com/photos/5998035/pexels-photo-5998035.jpeg',
      category: 'Residential'
    },
    {
      id: 3,
      title: 'Restaurant Lighting Design',
      description: 'Custom lighting design and installation for a high-end restaurant, including decorative and functional lighting.',
      image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg',
      category: 'Commercial'
    },
    {
      id: 4,
      title: 'Emergency Power Repair',
      description: 'Emergency repair of a failed main power supply for a medical facility, completed in under 4 hours.',
      image: 'https://images.pexels.com/photos/8961513/pexels-photo-8961513.jpeg',
      category: 'Emergency'
    },
    {
      id: 5,
      title: 'Apartment Complex Upgrade',
      description: 'Safety upgrade for a 12-unit apartment complex including switchboard replacement and smoke detector installation.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      category: 'Residential'
    },
    {
      id: 6,
      title: 'Industrial Lighting Replacement',
      description: 'Energy-efficient LED lighting replacement for a large warehouse, reducing energy costs by 40%.',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
      category: 'Commercial'
    },
  ];

  return (
    <div>
      {/* Projects Hero */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Work</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Take a look at some of our recent electrical projects and see the quality of our work firsthand.</p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Work Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We follow a thorough process to ensure every project is completed to the highest standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your needs, inspect the site, and provide a detailed quote.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-gray-600">We create a comprehensive plan including materials, timeline, and safety procedures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-gray-600">Our licensed electricians complete the work with attention to detail and quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">We perform thorough testing and provide all necessary certifications and warranties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to discuss your electrical needs and get a free quote.</p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
          >
            <PhoneCall className="mr-2 h-5 w-5" /> Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}