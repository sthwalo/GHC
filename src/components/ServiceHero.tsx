import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
}

export function ServiceHero({ title, description, icon: Icon, imageSrc }: ServiceHeroProps) {
  return (
    <section className="relative h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={`${title} background`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <Icon className="h-16 w-16 text-blue-400 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}