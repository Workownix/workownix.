"use client";
import { MessageCircle, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function WebsiteDevelopmentPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  const marqueeRef = useRef<HTMLDivElement>(null);

  interface Service {
    title: string;
    description: string;
    image: string;
  }

  const services: Service[] = [
    {
      title: "Web Development",
      description: "We specialize in creating responsive, high-performance web applications.",
      image: "/image/services/web-development.png",
    },
    {
      title: "Mobile App Development",
      description: "We create innovative and user-friendly mobile applications for iOS and Android.",
      image: "/image/services/mobile-app-development.png",
    },
    {
      title: "AI Chatbot Development",
      description: "We build intelligent, conversational AI chatbots to enhance customer engagement and streamline operations.",
      image: "/image/services/ai-chatbot-development.png",
    },
    {
      title: "UI/UX Design",
      description: "We craft intuitive and visually appealing user interfaces and experiences.",
      image: "/image/services/ui-ux-design.png",
    },
    {
      title: "Graphic Designing",
      description: "We create visually stunning designs that captivate your audience.",
      image: "/image/services/graphic-design.png",
    },
    {
      title: "Content Writing & Creation",
      description: "We produce high-quality content that engages and converts your audience.",
      image: "/image/services/content-creation.png",
    },
    {
      title: "E-Commerce Development",
      description: "We build scalable and secure e-commerce platforms for your business.",
      image: "/image/services/e-commerce-development.png",
    },
    {
      title: "Digital Marketing & SEO",
      description: "We provide comprehensive digital marketing strategies to grow your business.",
      image: "/image/services/digital-marketing.png",
    },
    {
      title: "CCTV & Surveillance Solutions",
      description: "We offer advanced CCTV and surveillance solutions for enhanced security.",
      image: "/image/services/cctv.jpg",
    },
    {
      title: "HTML/CSS Development",
      description: "Crafting pixel-perfect, responsive, and SEO-friendly websites that look stunning on every device.",
      image: "/image/coder.jpg",
    },
  ];
const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const headingText = " Services Development ";

  const handleScrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleDirection = () => {
    setScrollDirection(scrollDirection === 'left' ? 'right' : 'left');
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex flex-col">
        <Image
          src="/image/coder5.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
            {/* HERO Heading */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-10"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-transparent"
                style={{ WebkitTextStroke: "2px white" }}
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
    
        {/* HERO Heading
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8 leading-tight sm:leading-snug"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                className=""
                style={{ WebkitTextStroke: "1px white sm:1.5px" }} // Your original responsive stroke
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div> */}
      </section>

      {/* SERVICES MARQUEE */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
        <Image
          src="/image/services-bg.jpg"
          alt="Services BG"
          fill
          className="object-cover object-center -z-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70 -z-10"></div>
        
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {"OUR SERVICES".split("").map((l, i) => (
            <motion.span key={i} variants={letterVariants}>
              {l}
            </motion.span>
          ))}
        </motion.h2>

        {/* Marquee Controls */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6 px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollLeft}
            className="p-2 sm:p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm transition-all duration-300"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlayPause}
            className="p-2 sm:p-3 bg-green-600/20 hover:bg-green-600/30 rounded-full border border-green-500/30 backdrop-blur-sm transition-all duration-300"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDirection}
            className="p-2 sm:p-3 bg-purple-600/20 hover:bg-purple-600/30 rounded-full border border-purple-500/30 backdrop-blur-sm transition-all duration-300"
            aria-label="Change Direction"
          >
            <span className="text-xs sm:text-sm font-medium text-purple-400">
              {scrollDirection === 'left' ? '←' : '→'}
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollRight}
            className="p-2 sm:p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm transition-all duration-300"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </motion.button>
        </div>

        {/* News Ticker Style Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 sm:px-4 mb-3 sm:mb-4 mx-3 sm:mx-4 md:mx-8 rounded-lg">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-white text-red-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm font-bold">
              LIVE
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold">
              🔥 Our Development Services - Building Digital Excellence
            </div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="marquee whitespace-nowrap overflow-hidden"
             onMouseEnter={() => setIsPlaying(false)}
             onMouseLeave={() => setIsPlaying(true)}>
          <div 
            ref={marqueeRef}
            className={`inline-flex space-x-4 sm:space-x-6 ${
              isPlaying 
                ? scrollDirection === 'left' 
                  ? 'animate-marquee-left' 
                  : 'animate-marquee-right'
                : ''
            }`}
            style={{
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            {[...services, ...services, ...services].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="w-60 sm:w-72 md:w-80 bg-gray-800 rounded-lg overflow-hidden flex-none hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-gray-600"
              >
                <div className="relative h-32 sm:h-40 md:h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 truncate text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Service Badge */}
                  <div className="mt-2 flex items-center justify-between">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">
                      Premium Service
                    </span>
                    <span className="text-xs text-gray-400">Available 24/7</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Speed Control */}
        <div className="flex justify-center mt-4 sm:mt-6 px-4">
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/10">
            <span className="text-xs sm:text-sm text-gray-400 mr-2 sm:mr-3">Speed:</span>
            <button 
              onClick={() => document.documentElement.style.setProperty('--marquee-speed', '60s')}
              className="text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-gray-300 hover:text-white transition-colors"
            >
              Slow
            </button>
            <button 
              onClick={() => document.documentElement.style.setProperty('--marquee-speed', '30s')}
              className="text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-blue-400 hover:text-blue-300 transition-colors mx-1 sm:mx-2"
            >
              Normal
            </button>
            <button 
              onClick={() => document.documentElement.style.setProperty('--marquee-speed', '15s')}
              className="text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-gray-300 hover:text-white transition-colors"
            >
              Fast
            </button>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
          onClick={() => window.open("https://whatsapp.com/channel/0029VbBDgPFChq6QBGUtKh3Q", "_blank")}
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
        </motion.button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        :global(:root) {
          --marquee-speed: 30s;
        }
        
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-left {
          animation: marquee-left var(--marquee-speed) linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right var(--marquee-speed) linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
