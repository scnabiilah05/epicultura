'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Programs() {
  return (
    <section className="h-screen w-full relative">
      <div className="bg-[#063434] h-1/2 w-full"></div>
      
      <div className="bg-[#EEEEEE] h-1/2 w-full"></div>
      
      {/* Konten yang menindih kedua background (centered) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-6xl">
        <div className="bg-[#B7FE21] text-black rounded-2xl overflow-hidden flex md:flex-row my-8 flex-col relative">
          {/* Left side - Image */}
          <div className="md:flex-[1] relative">
            <Image
              src="/images/fitness-trainer.png"
              alt="Fitness trainer showing bicep"
              width={600}
              height={600}
              className="h-80% w-full object-cover"
            />
            {/* Cardio Coach Overlay */}
            <div className="absolute bottom-20 left-8 bg-white p-4 rounded-3xl shadow-lg">
              <h4 className="font-bold text-xl">Cardio Coach</h4>
              <p className="text-black">
                <span className="mr-4">Today</span>
                <span>07.00 am</span>
              </p>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:flex-[1] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-lg font-medium mb-2">Get Our Mobile App</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Enjoy easy<br />
              access to all our<br />
              gym features
            </h2>
            <p className="font-medium text-lg mb-4">
              Make Easy Dan efficiency your work out
            </p>
            <p className="mb-8 text-sm">
              Dengan aplikasi [Nama Gym Anda], Anda dapat dengan mudah mengatur jadwal kelas, melacak kemajuan latihan, mendapatkan tips kebugaran, dan masih banyak lagi. Semuanya hanya dengan beberapa ketukan!
            </p>
            <Link
              href="#"
              className="font-semibold text-white bg-black px-8 py-3 rounded-full inline-block w-fit hover:transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}