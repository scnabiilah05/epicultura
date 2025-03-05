'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
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

  return (
    <section className="bg-[#063434] text-white py-8 md:py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 mb-8 md:mb-12">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="font-plusJakarta font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] tracking-[-4px] mb-4 md:mb-6">
              Change Your Life.<br />Starting Today
            </h1>
            <p className="font-urbanist font-normal text-base leading-[150%] mb-6 md:mb-8 max-w-full md:max-w-[80%]">
              Get strong, heal your body, and live your best fitness life. No more excuses, join our classes and experience the transformation everyone is talking about.
            </p>
            <Link
              href="#"
              className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#063434] bg-[#B7FE21] px-6 md:px-8 py-3 rounded-full inline-block hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md"
            >
              Join Us Now
            </Link>
          </div>

          <div className="flex-1 order-1 md:order-2 relative">
            <div className="md:absolute md:top-[-50px] md:right-0 w-full">
              <Image
                src={isMobile ? "/images/mirror.png" : "/images/hero.png"}
                width={800}
                height={900}
                alt="Fitness hero"
                className="rounded-lg w-full h-auto"
                priority
              />
              <div className={`absolute top-1/2 -translate-y-1/2 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-lg ${
                isMobile 
                ? 'left-4'
                : 'right-0 translate-x-1/3 sm:translate-x-1/4 md:translate-x-1/6'
              }`}>
                <h4 className="font-bold text-black text-base sm:text-xl">Cardio Coach</h4>
                <p className="text-black text-sm sm:text-base">
                  <span className="mr-2 sm:mr-4">Today</span>
                  <span>07.00 am</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <h2 className="font-plusJakarta font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[110%] tracking-[-4px] max-w-full md:max-w-[80%] lg:max-w-[60%]">
            The place where your fitness dreams come true.
          </h2>
        </div>

        <div className="mb-4">
          <ul className="flex flex-wrap items-center gap-3 list-none text-[#EEEEEE]">
            <li><Link href="#" className="font-urbanist font-normal text-base leading-[150%] tracking-[0px] bg-[#063434] border border-[#225555] px-4 md:px-6 py-2 md:py-3 rounded-full hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md inline-block">Chalistechnic</Link></li>
            <li><Link href="#" className="font-urbanist font-normal text-base leading-[150%] tracking-[0px] bg-[#063434] border border-[#225555] px-4 md:px-6 py-2 md:py-3 rounded-full hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md inline-block">Body Builder</Link></li>
            <li><Link href="#" className="font-urbanist font-normal text-base leading-[150%] tracking-[0px] bg-[#063434] border border-[#225555] px-4 md:px-6 py-2 md:py-3 rounded-full hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md inline-block">Atlet</Link></li>
            <li><Link href="#" className="font-urbanist font-normal text-base leading-[150%] tracking-[0px] bg-[#063434] border border-[#225555] px-4 md:px-6 py-2 md:py-3 rounded-full hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md inline-block">Body Goals</Link></li>
            <li>
              <Link
                href="#"
                className="bg-[#B7FE21] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md"
              >
                <FiArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-[#063434]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}