'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#063434] py-4">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-plusJakarta font-normal text-3xl leading-[110%] tracking-[-4px] text-white">
            STRIDEGYM
          </div>
          
          {!isMobile && (
            <>
              <nav className="navigation">
                <ul className="flex list-none gap-8 text-black bg-[#FFFFFF] px-6 py-3 rounded-full hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md">
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px]">Home</Link></li>
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-text-dark">Services</Link></li>
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-text-dark">Support</Link></li>
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-text-dark">About Us</Link></li>
                </ul>
              </nav>
              <Link 
                href="#" 
                className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#063434] bg-[#B7FE21] px-6 py-3 rounded-full hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md"
              >
                Contact Us
              </Link>
            </>
          )}

          {isMobile && (
            <div className="flex items-center">
              <button 
                onClick={toggleMenu}
                className="h-12 w-12 bg-white rounded-full flex items-center justify-center focus:outline-none z-20"
                aria-label="Toggle menu"
              >
                {!isMenuOpen ? (
                  <div className="flex flex-col gap-1">
                    <span className="w-5 h-0.5 bg-[#063434] rounded-full"></span>
                    <span className="w-5 h-0.5 bg-[#063434] rounded-full"></span>
                    <span className="w-5 h-0.5 bg-[#063434] rounded-full"></span>
                  </div>
                ) : (
                  <div className="relative w-5 h-5">
                    <span className="absolute top-2 w-5 h-0.5 bg-[#063434] rounded-full transform rotate-45"></span>
                    <span className="absolute top-2 w-5 h-0.5 bg-[#063434] rounded-full transform -rotate-45"></span>
                  </div>
                )}
              </button>
            </div>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-[#063434] bg-opacity-95 z-10 pt-20">
            <div className="flex flex-col items-center">
              <nav className="w-full">
                <ul className="flex flex-col items-center gap-6 text-white">
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-normal">Home</Link></li>
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-normal">Services</Link></li>
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-normal">Support</Link></li>
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-normal">About Us</Link></li>
                  <li className="mt-4">
                    <Link 
                      href="#" 
                      className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#063434] bg-[#B7FE21] px-6 py-3 rounded-full hover:shadow-md inline-block"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}