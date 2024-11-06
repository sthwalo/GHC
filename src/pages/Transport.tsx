import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Plane, Ship, Package, Car, ArrowRight } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { Link } from 'react-router-dom';

export function Transport() {
  const services = [
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and reliable air transportation services',
    },
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Cost-effective ocean shipping solutions',
    },
    {
      icon: Package,
      title: 'Logistics',
      description: 'Complete supply chain management',
    },
    {
      icon: Car,
      title: 'Shuttle Services',
      description: 'Airport transfers, tours, and Southern Africa destinations',
    },
  ];

  return (
    <div>
      <ServiceHero
        title="Transport Services"
        description="Reliable transportation solutions for your business"
        icon={Truck}
        imageSrc="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Global reach with local expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['North America', 'Europe', 'Asia', 'Australia', 'Southern Africa'].map((region) => (
              <div key={region} className="text-center">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Plane className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">{region}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ship or Take a Shuttle?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch for competitive shipping rates or shuttle service bookings
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200 md:text-lg"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}