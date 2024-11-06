import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, TrendingUp, PieChart, ArrowRight, Briefcase } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { Link } from 'react-router-dom';

/**
 * Component for the Accounting page
 * This page provides an overview of accounting and administrative consultancy services.
 */
export function Accounting() {
  // Define the list of services offered within accounting consultancy
  const services = [
    {
      icon: FileText,
      title: 'Bookkeeping',
      description: 'Accurate and timely financial record keeping',
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning',
      description: 'Strategic tax planning and compliance services',
    },
    {
      icon: PieChart,
      title: 'Financial Analysis',
      description: 'Comprehensive financial reporting and analysis',
    },
    {
      icon: Briefcase,
      title: 'Administrative Services',
      description: 'Streamlined business administration and support',
    },
  ];

  return (
    <div>
      {/* Hero section for the page with title, description, icon, and background image */}
      <ServiceHero
        title="Accounting & Consultancy"
        description="Comprehensive financial and administrative guidance for your business"
        icon={Calculator}
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
      />

      {/* Services section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Why Choose Us section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert financial and administrative guidance tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Experienced Professionals',
              'Personalized Service',
              'Modern Technology',
              'Timely Reporting',
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

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Financial or Tax Administrative Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help optimize your business finances and administration
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200 md:text-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * Additional Documentation and Customization Options:
 *
 * 1. **Service List**:
 *    - Modify or add to the `services` array to update the list of services offered.
 *    - Each service requires an `icon`, `title`, and `description`.
 *
 * 2. **Hero Section**:
 *    - The `ServiceHero` component allows customization of the page's hero section.
 *    - Adjust the `title`, `description`, `icon`, and `imageSrc` to fit the service.
 *
 * 3. **Why Choose Us Section**:
 *    - The list of features under "Why Choose Us" is defined inline.
 *    - Add or update values in the `features` array to modify.
 *
 * 4. **Call to Action Section**:
 *    - The call-to-action invites clients to schedule a consultation.
 *    - Modify the `to` attribute of `Link` if you want to redirect to a different page.
 *    - Adjust text, button styling, or icon based on design preferences.
 */