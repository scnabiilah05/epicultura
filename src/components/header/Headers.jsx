'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#063434] py-4">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Using Display 2 typography */}
          <div className="font-plusJakarta font-normal text-3xl leading-[110%] tracking-[-4px] text-white">
            STRIDEGYM
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav className="navigation">
                <ul className="flex list-none gap-8 text-black bg-[#FFFFFF] px-6 py-3 rounded-full hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md">
                  {/* Using Button typography */}
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px]">Home</Link></li>
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#lclclc]">Services</Link></li>
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#lclclc]">Support</Link></li>
                  <li><Link href="#" className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#lclclc]">About Us</Link></li>
                </ul>
              </nav>
              {/* Contact Button - Using Button typography */}
              <Link 
                href="#" 
                className="font-urbanist font-semibold text-base leading-[150%] tracking-[0px] text-[#063434] bg-[#B7FE21] px-6 py-3 rounded-full hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md"
              >
                Contact Us
              </Link>
            </>
          )}

          {/* Mobile Hamburger Icon */}
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

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-[#063434] bg-opacity-95 z-10 pt-20">
            <div className="flex flex-col items-center">
              <nav className="w-full">
                <ul className="flex flex-col items-center gap-6 text-white">
                  {/* Using Heading 2 typography for mobile menu */}
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-[-4px]">Home</Link></li>
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-[-4px]">Services</Link></li>
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-[-4px]">Support</Link></li>
                  <li><Link href="#" className="font-urbanist font-medium text-base leading-[150%] tracking-[-4px]">About Us</Link></li>
                  <li className="mt-4">
                    {/* Using Button typography for mobile contact button */}
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