'use client';

import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

export default function ReviewCard({ name, location, rating, review }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gray-200 rounded-full p-3 mr-3">
          <User className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic flex-grow">"{review}"</p>
    </motion.div>
  );
}