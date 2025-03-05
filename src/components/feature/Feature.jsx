'use client';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Programs() {
  return (
    <section className="bg-[#063434] text-white py-10">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Mobile Title First - Hidden on Desktop */}
        <div className="md:hidden text-center mb-8">
          <p className="text-lg mb-2">Our Programs</p>
          <h2 className="font-plusJakarta font-normal text-3xl leading-[1.2] tracking-tight mx-auto">
            Starting from relaxing yoga to calorie-burning HIIT
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-6 space-y-6">
            {/* Yoga & Pilates Card */}
            <div className="bg-[#2D5050] rounded-3xl p-6 relative">
              <div className="flex justify-between items-center mb-6">
                <div className="bg-[#063434] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base">
                  Yoga & Pilates
                </div>
                <Link href="#" className="bg-[#B7FE21] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:translate-y-[-2px] transition-all duration-300">
                  <FiArrowUpRight className="h-5 w-5 text-[#063434]" />
                </Link>
              </div>

              <div className="bg-white text-black rounded-2xl p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Flexibility and Balance</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Find calm and balance in your life through our Yoga & Pilates classes. With a variety of poses and breathing techniques, this class helps you improve flexibility, core strength and balance. It is perfect for reducing stress and increasing mental focus.
                </p>
              </div>
            </div>

            {/* Desktop Title - Hidden on Mobile */}
            <div className="hidden md:block mb-10">
              <p className="text-xl mb-2">Our Programs</p>
              <h2 className="font-plusJakarta font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-md">
                Starting from relaxing yoga to calorie-burning HIIT
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-6 space-y-6">
            {/* HIIT Card */}
            <div className="bg-[#2D5050] rounded-3xl p-6 relative">
              <div className="flex justify-between items-center mb-6">
                <div className="bg-[#063434] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base">
                  HIIT
                </div>
                <Link href="#" className="bg-[#B7FE21] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:translate-y-[-2px] transition-all duration-300">
                  <FiArrowUpRight className="h-5 w-5 text-[#063434]" />
                </Link>
              </div>

              <div className="bg-white text-black rounded-2xl p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Intense Workouts for Fast Results</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Ready for the challenge? Our HIIT classes are designed to burn calories and improve cardio fitness in a short time. With a combination of high-intensity training and short rest periods, you will experience a surge of energy and a significant increase in metabolism.
                </p>
              </div>
            </div>

            {/* Functional Fitness Card */}
            <div className="bg-[#2D5050] rounded-3xl p-6 relative">
              <div className="flex justify-between items-center mb-6">
                <div className="bg-[#063434] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base">
                  Functional Fitness
                </div>
                <Link href="#" className="bg-[#B7FE21] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:translate-y-[-2px] transition-all duration-300">
                  <FiArrowUpRight className="h-5 w-5 text-[#063434]" />
                </Link>
              </div>

              <div className="bg-white text-black rounded-2xl p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Strong and Durable</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Functional fitness training focuses on movements that help you in your daily activities. Using a variety of equipment such as kettlebells, stability balls, and free weights, this class improves overall strength, balance, and endurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}