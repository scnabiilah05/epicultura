'use client';
import Link from 'next/link';
import Image from 'next/image';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { FaRedditAlien } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Programs", href: "#" }
  ];

  const supportLinks = [
    { name: "Help", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact Us", href: "#" }
  ];

  const companyLinks = [
    { name: "Download APP", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Carrers", href: "#" }
  ];

  const footerLinks = [
    { name: "Terms and Condition", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Copyright 2024 Healing", href: "#" }
  ];

  const socialIcons = [
    { name: "Instagram", icon: <InstagramIcon size={20} />, href: "#" },
    { name: "YouTube", icon: <YoutubeIcon size={20} />, href: "#" },
    { name: "Reddit", icon: <FaRedditAlien size={20} />, href: "#" },
    { name: "Twitter", icon: <TwitterIcon size={20} />, href: "#" }
  ];

  return (
    <footer className="bg-[#063434] text-white pt-8 md:pt-16 pb-8">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-8 md:mb-16 relative min-h-[300px] md:min-h-[500px] pt-8 md:pt-16">
          <div className="max-w-[600px] mb-6 md:mb-10 lg:mb-0 flex flex-col h-full">
            <div className="font-bold text-3xl md:text-4xl tracking-wide mb-12 md:mb-24">
              HEALING
            </div>
            <h2 className="font-normal text-4xl md:text-6xl leading-[1.1]">
              Ready to move<br />toward optimal<br />health and fitness?
            </h2>
            
            <div className="block lg:hidden mt-8">
              <Link
                href="#"
                className="font-semibold text-[#063434] bg-[#C1FF24] px-8 py-3 rounded-full inline-block hover:brightness-110 transition-all"
              >
                Join Now
              </Link>
              <p className="text-lg md:text-xl mt-6">Achieve the best<br />version of yourself!</p>
            </div>
          </div>

          <div className="relative flex-1 hidden lg:flex justify-end">
            <div className="relative h-[400px] w-[350px]">
            <div className="relative right-50 h-[500px] w-[450px]">
              <Image
                src="/images/footer.png"
                alt="Woman working out with dumbbell"
                fill
                className="object-contain"
                priority
              />
            </div>
              <div className="absolute right-0 top-0 text-right mb-4">
                <p className="text-xl mb-2">Achieve the best<br />version of yourself!</p>
                <Link
                  href="#"
                  className="font-semibold text-[#063434] bg-[#C1FF24] px-8 py-3 rounded-full inline-block hover:brightness-110 transition-all"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mb-8 md:mb-12"></div>

        <div className="mb-8 md:hidden">
          <p className="mb-4 leading-relaxed">
            We are ready to help you with all your questions or needs
          </p>
          <p className="mb-2">Healinhg@gmail.com</p>
          <p className="mb-6">+620194810894</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div>
            <h3 className="font-medium text-lg md:text-xl mb-4 md:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg md:text-xl mb-4 md:mb-6">
              Support
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
            <h3 className="font-medium text-lg md:text-xl mb-4 md:mb-6">
              Company
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <p className="mb-6 leading-relaxed">
              We are ready to help you with all your questions or needs
            </p>
            <p className="mb-4">Healinhg@gmail.com</p>
            <p>+620194810894</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-10 md:mt-8">
          {socialIcons.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="block"
              aria-label={social.name}
            >
              <div className="w-10 h-10 bg-[#C1FF24] rounded-full flex items-center justify-center">
                <span className="text-[#063434]">{social.icon}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/10 text-xs md:text-sm text-white/70">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {index === 2 ? link.name : link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}