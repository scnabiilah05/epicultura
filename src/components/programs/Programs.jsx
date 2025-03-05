'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Programs() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="md:min-h-[calc(100vh*2/3)] w-full relative py-10 md:py-0">
      <div className="hidden md:block bg-[#063434] absolute top-0 h-1/2 w-full"></div>
      <div className="hidden md:block bg-[#EEEEEE] absolute bottom-0 h-1/2 w-full"></div>
      
      <div className="md:hidden bg-[#063434] absolute top-0 h-40 w-full"></div>
      <div className="md:hidden bg-[#EEEEEE] absolute top-40 bottom-0 w-full"></div>
      
      <div className="relative mx-auto w-10/12 max-w-6xl md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="bg-[#B7FE21] text-black rounded-2xl overflow-hidden flex flex-col sm:flex-row relative shadow-lg">
          <div className="sm:flex-1 relative">
            <Image
              src={isMobile ? "/images/fitness-trainer.png" : "/images/fitness-trainer.png"}
              alt="Fitness trainer showing bicep"
              width={500}
              height={500}
              className="w-full h-64 sm:h-full object-cover object-center pt-5 ps-4"
            />
            <div className="absolute bottom-4 sm:bottom-10 md:bottom-20 left-4 sm:left-8 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-lg">
              <h4 className="font-bold text-base sm:text-xl">Cardio Coach</h4>
              <p className="text-black text-sm sm:text-base">
                <span className="mr-2 sm:mr-4">Today</span>
                <span>07.00 am</span>
              </p>
            </div>
          </div>
          
          <div className="sm:flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-base sm:text-lg font-medium mb-2">Get Our Mobile App</h3>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 leading-tight">
              Enjoy easy<br />
              access to all our<br />
              gym features
            </h2>
            <p className="font-medium text-base sm:text-lg mb-3 sm:mb-4">
              Make Easy Dan efficiency your work out
            </p>
            <p className="mb-6 sm:mb-8 text-xs sm:text-sm">
              Dengan aplikasi [Nama Gym Anda], Anda dapat dengan mudah mengatur jadwal kelas, melacak kemajuan latihan, mendapatkan tips kebugaran, dan masih banyak lagi. Semuanya hanya dengan beberapa ketukan!
            </p>
            <Link
              href="#"
              className="font-semibold text-white bg-black px-6 sm:px-8 py-2 sm:py-3 rounded-full inline-block w-fit hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md text-sm sm:text-base"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}