import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Laptop, Monitor, ArrowRight } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { Link } from 'react-router-dom';

export function Electronics() {
  const products = [
    {
      icon: Smartphone,
      title: 'Smartphones',
      description: 'Latest and refurbished mobile devices',
    },
    {
      icon: Laptop,
      title: 'Computers',
      description: 'Desktop and laptop solutions',
    },
    {
      icon: Monitor,
      title: 'Displays',
      description: 'Professional monitors and screens',
    },
  ];

  return (
    <div>
      <ServiceHero
        title="Electronics Resell"
        description="Quality electronics at competitive prices"
        icon={Cpu}
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <product.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Buy From Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality assurance and customer satisfaction guaranteed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Quality Tested',
              'Warranty Included',
              'Competitive Prices',
              'Expert Support',
              'Fast Shipping',
              'Secure Payment',
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Looking for Specific Electronics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our inventory or let us know what you need
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200 md:text-lg"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}