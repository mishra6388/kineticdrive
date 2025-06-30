'use client';
import React from 'react';
import { motion } from 'framer-motion';

const images = [
//   '/googleReviews/image.png',
  '/googleReviews/image1.png',
  '/googleReviews/image2.png',
  '/googleReviews/image3.png',
  '/googleReviews/image7.png',
  '/googleReviews/image6.png',
  // add more image paths here
];

const GoogleReviewsCarousel = () => {
  return (
    <div className="overflow-hidden py-8 bg-gray-50">
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...images, ...images].map((image, index) => (
          <div key={index} className="min-w-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img src={image} alt={`Review ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default GoogleReviewsCarousel;
