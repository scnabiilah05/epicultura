'use client'
import React, { useState, useEffect } from 'react';

const PricingComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-[#EEEEEE] px-4 sm:px-6 md:px-8 sm:py-10 md:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="block md:hidden mb-8">
          <div className="text-center mb-8">
            <h3 className="text-lg text-gray-700 mb-2">Pricing</h3>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Special Membership<br />
              Package for you
            </h2>
            <p className="text-gray-700 px-2 sm:px-4 text-sm sm:text-base">
              We offer a variety of membership packages designed to meet your needs
              and schedule. Choose the plan that best suits your fitness goals and start
              your journey to optimal health with Us
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div className="w-full md:w-[40%] space-y-4 sm:space-y-6">
            <div className="bg-teal-900 text-white p-5 sm:p-6 md:p-8 rounded-2xl relative">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <div className="bg-teal-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  Basic Package
                </div>
                <div className="bg-white text-teal-900 rounded-full p-1.5 sm:p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl font-light">$56.00</span>
                <span className="text-base sm:text-lg ml-1 sm:ml-2">/Monthly</span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed">
                With the Basic Package, you get full access to our gym facilities,
                including a cardio and strength room complete with modern
                equipment. You can also take basic group classes that include yoga,
                pilates and aerobics. Additionally, you can use our mobile app to set
                a workout schedule and track your progress.
              </p>
            </div>

            <div className="bg-lime-400 text-teal-900 p-5 sm:p-6 md:p-8 rounded-2xl relative">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <div className="bg-lime-300 text-teal-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  Premium Package
                </div>
                <div className="bg-teal-900 text-white rounded-full p-1.5 sm:p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl font-light">$76.00</span>
                <span className="text-base sm:text-lg ml-1 sm:ml-2">/Monthly</span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed">
                The Premium Package gives you all the benefits of the Basic
                Package, plus access to all group classes without restrictions. You
                also get monthly consultation sessions with a personal trainer who
                will help you design an exercise program that suits your goals.
              </p>
            </div>
          </div>

          <div className="hidden md:block md:w-[60%] space-y-6">
            <div className="mb-6 p-6 lg:p-8 lg:h-[50%]">
              <h3 className="text-lg text-gray-700 mb-2">Pricing</h3>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                Special Membership<br />
                Package for you
              </h2>
              <p className="text-gray-700 text-base">
                We offer a variety of membership packages designed to meet your needs
                and schedule. Choose the plan that best suits your fitness goals and start
                your journey to optimal health with Us
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="bg-teal-900 text-white p-6 lg:p-8 rounded-2xl lg:w-[65%] relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-teal-800 text-white px-4 py-2 rounded-full text-sm">
                    VIP Package
                  </div>
                  <div className="bg-white text-teal-900 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-5xl lg:text-6xl font-light">$80.00</span>
                  <span className="text-lg ml-2">/Monthly</span>
                </div>

                <p className="text-sm leading-relaxed">
                  The VIP package is the best choice for those of you who want
                  exclusive service and extra attention. In addition to all the features
                  of the Premium Plan, you will get weekly personal training sessions
                  to ensure you achieve optimal results.
                </p>
              </div>

              <div className="lg:w-[30%] flex flex-col justify-center gap-4 lg:gap-6">
                <div className="flex items-center bg-gray-200 p-1 rounded-full w-fit mx-auto lg:mx-0">
                  <button className="bg-black text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm">
                    Monthly
                  </button>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl text-text-dark font-semibold">
                    Get Your Special<br />
                    Price For Your Best<br />
                    Body Shape
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden mt-4 sm:mt-6">
          <div className="bg-teal-900 text-white p-5 sm:p-6 rounded-2xl relative">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="bg-teal-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                VIP Package
              </div>
              <div className="bg-white text-teal-900 rounded-full p-1.5 sm:p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <span className="text-4xl sm:text-5xl font-light">$80.00</span>
              <span className="text-base sm:text-lg ml-1 sm:ml-2">/Monthly</span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              The VIP package is the best choice for those of you who want
              exclusive service and extra attention. In addition to all the features
              of the Premium Plan, you will get weekly personal training sessions
              to ensure you achieve optimal results.
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center bg-gray-200 p-1 rounded-full">
                <button className="bg-black text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm">
                  Monthly
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg sm:text-xl text-text-dark font-semibold">
                Get Your Special<br />
                Price For Your Best<br />
                Body Shape
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;