'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
  ];

  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#EEEEEE] py-8 sm:py-12 md:py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="font-medium text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 md:mb-4">
            Testimonials
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
            What do our<br className="sm:hidden" /> members say?
          </h3>
          <p className="text-gray-600 max-w-[800px] mx-auto text-xs sm:text-sm md:text-base px-4 md:px-0">
            Hear directly from our members who have experienced incredible changes 
            with us. Their stories are true testament to our commitment to helping you 
            achieve your fitness goals.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex gap-4 sm:gap-6 overflow-hidden">
            <div className="w-full md:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
              <div className="flex flex-col md:flex-row h-full bg-[#063434] text-white rounded-lg">
                <div className="w-full md:w-2/5 h-56 sm:h-64 md:h-auto relative">
                  <Image 
                    src={testimonials[activeSlide].image}
                    alt={testimonials[activeSlide].name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    "{testimonials[activeSlide].quote}"
                  </p>
                  <div className="mt-3 sm:mt-4 md:mt-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">{testimonials[activeSlide].name}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{testimonials[activeSlide].location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block md:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
              <div className="flex h-full bg-[#063434] text-white rounded-lg">
                <div className="w-2/5 relative">
                  <Image 
                    src={testimonials[(activeSlide + 1) % testimonials.length].image}
                    alt={testimonials[(activeSlide + 1) % testimonials.length].name}
                    fill
                    className="object-cover"
                    priority
                  />
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

          <div className="flex justify-between absolute bottom-[-20px] left-0 right-0 md:hidden px-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 bg-[#063434] rounded-full flex items-center justify-center shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          <button 
            onClick={handlePrev}
            className="hidden md:flex absolute top-1/2 left-[-16px] -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={handleNext}
            className="hidden md:flex absolute top-1/2 right-[-16px] -translate-y-1/2 w-12 h-12 bg-[#063434] rounded-full items-center justify-center shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'w-6 bg-[#063434]' 
                  : 'w-1 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}