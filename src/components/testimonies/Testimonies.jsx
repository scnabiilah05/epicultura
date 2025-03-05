'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "I've tried many gyms, but Healing is really different. The facilities are world class and the trainers really care.",
      name: "Maria Dozalos",
      location: "New York City",
      image: "/images/testi2.png"
    },
    {
      quote: "I managed to lose 15 kg in 3 months, and my energy increased drastically. The transformation I experienced was incredible!",
      name: "Agnesia",
      location: "New York City",
      image: "/images/testi1.png"
    },
    // Tambahkan testimonial lain jika perlu
  ];

  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#EEEEEE] py-8 md:py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Header section */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-medium text-xl md:text-2xl text-gray-700 mb-2 md:mb-4">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            What do our<br />members say?
          </h3>
          <p className="text-gray-600 max-w-[800px] mx-auto text-sm md:text-base px-4 md:px-0">
            Hear directly from our members who have experienced incredible changes 
            with us. Their stories are true testament to our commitment to helping you 
            achieve your fitness goals.
          </p>
        </div>
        
        {/* Testimonials slider */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {/* On mobile: show only 1 testimonial, on desktop: show 2 testimonials */}
            {[0].map((offset) => {
              const index = (activeSlide + offset) % testimonials.length;
              return (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="flex flex-col md:flex-row h-full bg-[#063434] text-white rounded-lg">
                    {/* Image section - full width on mobile, 40% on desktop */}
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                      <Image 
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Content section - full width on mobile, 60% on desktop */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                      <p className="text-lg md:text-xl leading-relaxed">
                        "{testimonials[index].quote}"
                      </p>
                      <div className="mt-4 md:mt-6">
                        <h4 className="text-xl md:text-2xl font-medium mb-1">{testimonials[index].name}</h4>
                        <p className="text-gray-300">{testimonials[index].location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* This testimonial only shows on desktop */}
            <div className="hidden md:block md:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
              <div className="flex h-full bg-[#063434] text-white rounded-lg">
                <div className="w-2/5 relative">
                  <div className="h-full">
                    <Image 
                      src={testimonials[(activeSlide + 1) % testimonials.length].image}
                      alt={testimonials[(activeSlide + 1) % testimonials.length].name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="w-3/5 p-8 flex flex-col justify-between">
                  <p className="text-xl leading-relaxed">
                    "{testimonials[(activeSlide + 1) % testimonials.length].quote}"
                  </p>
                  <div className="mt-6">
                    <h4 className="text-2xl font-medium mb-1">{testimonials[(activeSlide + 1) % testimonials.length].name}</h4>
                    <p className="text-gray-300">{testimonials[(activeSlide + 1) % testimonials.length].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons - adjusted position for mobile */}
          <button 
            onClick={handlePrev}
            className="absolute bottom-0 md:bottom-auto md:top-1/2 left-8 md:left-0 md:-translate-y-1/2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute bottom-0 md:bottom-auto md:top-1/2 right-8 md:right-0 md:-translate-y-1/2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-[#063434] rounded-full flex items-center justify-center shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        {/* Pagination dots - centered at bottom on mobile */}
        <div className="flex justify-center mt-4 md:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1 rounded-full ${
                index === activeSlide 
                  ? 'w-6 bg-[#063434]' 
                  : 'w-1 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}