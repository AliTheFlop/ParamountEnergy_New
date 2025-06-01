'use client';

import { motion } from 'framer-motion';
import { Home, Building, AlertTriangle, Lightbulb, Shield, Router, ToggleLeft, Zap } from 'lucide-react';

export default function ServiceCard({ title, description, icon }) {
  const getIcon = () => {
    switch (icon) {
      case 'home':
        return <Home className="h-10 w-10 text-red-600" />;
      case 'building':
        return <Building className="h-10 w-10 text-red-600" />;
      case 'alert':
        return <AlertTriangle className="h-10 w-10 text-red-600" />;
      case 'lightbulb':
        return <Lightbulb className="h-10 w-10 text-red-600" />;
      case 'shield':
        return <Shield className="h-10 w-10 text-red-600" />;
      case 'router':
        return <Router className="h-10 w-10 text-red-600" />;
      case 'switch':
        return <ToggleLeft className="h-10 w-10 text-red-600" />;
      default:
        return <Zap className="h-10 w-10 text-red-600" />;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full"
    >
      <div className="mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}