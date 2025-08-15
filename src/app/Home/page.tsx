"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle, Mail } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const headingText = "WORKOWNIX PROVIDE MULTIPLE SERVICES";

  const services = [
    { icon: "💻", name: "HTML & CSS Development", color: "from-blue-600/30 to-blue-800/30 border-blue-500/50" },
    { icon: "⚙", name: "TypeScript Projects", color: "from-purple-600/30 to-purple-800/30 border-purple-500/50" },
    { icon: "🌐", name: "Next.js Web Solutions", color: "from-green-600/30 to-green-800/30 border-green-500/50" },
    { icon: "🐍", name: "Python Programming", color: "from-yellow-600/30 to-yellow-800/30 border-yellow-500/50" },
    { icon: "🖥", name: "WordPress Development", color: "from-indigo-600/30 to-indigo-800/30 border-indigo-500/50" },
    { icon: "🧠", name: "UI & UX Design", color: "from-pink-600/30 to-pink-800/30 border-pink-500/50" },
    { icon: "🤖", name: "Artificial Intelligence & Metaverse", color: "from-cyan-600/30 to-cyan-800/30 border-cyan-500/50" },
    { icon: "🎬", name: "Video Editing & Motion Graphics", color: "from-red-600/30 to-red-800/30 border-red-500/50" },
    { icon: "⌨", name: "English Typing", color: "from-orange-600/30 to-orange-800/30 border-orange-500/50" },
    { icon: "🎨", name: "Graphic Designing (Logos, Banners, Social Media)", color: "from-teal-600/30 to-teal-800/30 border-teal-500/50" },
    { icon: "📊", name: "Microsoft Office", color: "from-blue-700/30 to-blue-900/30 border-blue-400/50" },
    { icon: "📱", name: "Mobile App Development", color: "from-emerald-600/30 to-emerald-800/30 border-emerald-500/50" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Reduced to 3 seconds for better UX
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.img
          src="/image/logo.png"
          alt="لوگو"
          className="w-32 sm:w-40 md:w-48 h-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-white text-sm sm:text-base md:text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Loading, please wait...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section id="home" className="relative min-h-[70vh] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/coder.jpg"
            alt="MetaTech Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center max-w-7xl mx-auto w-full">
          <motion.h1
            className="text-[14px] sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-10"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <Link href="/company">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-xl transition"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Click here to know more
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-6 sm:space-y-8 md:space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ✨ Welcome to Workownix! ✨
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                💼 Design. Develop. Deliver.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Thank you 😊 for contacting us! Let's build your digital future together! 🚀
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/image/coder15.jpg"
          >
            <source src="/image/coder0mp4" type="video/mp4" />
            <source src="/image/codermp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        </div>

        {/* Services Content */}
        <div className="relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center space-y-6 sm:space-y-8 md:space-y-12"
            >
              <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
                  🎯 Our Premium Services Include:
                </h3>
                <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
              </motion.div>

              {/* Services Grid */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className={`bg-gradient-to-br ${service.color} backdrop-blur-md border rounded-xl p-4 hover:shadow-2xl transition-all duration-300 hover:border-white/30`}
                    >
                      <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                        <span className="text-2xl sm:text-3xl md:text-4xl drop-shadow-lg">{service.icon}</span>
                        <span className="text-xs sm:text-sm md:text-base text-white font-medium leading-tight drop-shadow-md">
                          {service.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Call to Action */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 backdrop-blur-md shadow-2xl"
              >
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                    For more details contact me now! 🌐
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <motion.a
                      href="https://whatsapp.com/channel/0029VbBDgPFChq6QBGUtKh3Q"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      WhatsApp Channel
                    </motion.a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-gray-200 text-xs sm:text-sm md:text-base">
                    <div className="flex items-center gap-2 drop-shadow-md">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>info.workownix@gmail.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
          onClick={() => window.open("https://whatsapp.com/channel/0029VbBDgPFChq6QBGUtKh3Q", "_blank")}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
        </motion.button>
      </div>
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import { ArrowRight, Play, MessageCircle, Mail, Phone } from 'lucide-react';
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function HomePage() {
//   const [showSplash, setShowSplash] = useState(true);

//   const headingVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.02 },
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const headingText = "WORKOWNIX PROVIDE MULTIPLE SERVICES";

//   const services = [
//     { icon: "💻", name: "HTML & CSS Development", color: "from-blue-600/30 to-blue-800/30 border-blue-500/50" },
//     { icon: "⚙", name: "TypeScript Projects", color: "from-purple-600/30 to-purple-800/30 border-purple-500/50" },
//     { icon: "🌐", name: "Next.js Web Solutions", color: "from-green-600/30 to-green-800/30 border-green-500/50" },
//     { icon: "🐍", name: "Python Programming", color: "from-yellow-600/30 to-yellow-800/30 border-yellow-500/50" },
//     { icon: "🖥", name: "WordPress Development", color: "from-indigo-600/30 to-indigo-800/30 border-indigo-500/50" },
//     { icon: "🧠", name: "UI & UX Design", color: "from-pink-600/30 to-pink-800/30 border-pink-500/50" },
//     { icon: "🤖", name: "Artificial Intelligence & Metaverse", color: "from-cyan-600/30 to-cyan-800/30 border-cyan-500/50" },
//     { icon: "🎬", name: "Video Editing & Motion Graphics", color: "from-red-600/30 to-red-800/30 border-red-500/50" },
//     { icon: "⌨", name: "English Typing", color: "from-orange-600/30 to-orange-800/30 border-orange-500/50" },
//     { icon: "🎨", name: "Graphic Designing (Logos, Banners, Social Media)", color: "from-teal-600/30 to-teal-800/30 border-teal-500/50" },
//     { icon: "📊", name: "Microsoft Office", color: "from-blue-700/30 to-blue-900/30 border-blue-400/50" },
//     { icon: "📱", name: "Mobile App Development", color: "from-emerald-600/30 to-emerald-800/30 border-emerald-500/50" }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 5000); // 5 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return (
//       <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
//         {/* Rotating Logo */}
//         <motion.img
//           src="/image/logo.png"
//           alt="لوگو"
//           className="w-48 h-auto mb-4"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.p
//           className="text-white text-sm sm:text-base md:text-lg font-medium"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, delay: 0.5 }}
//         >
//           Loading, please wait...
//         </motion.p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <section id="home" className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex flex-col">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/image/coder.jpg"
//             alt="MetaTech Background"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-black/70"></div>
//         </div>

//         {/* Hero Section */}
//         <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center max-w-screen-xl mx-auto w-full">
//               {/* HERO Heading */}
//         <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
//           <motion.h1
//             className="text-lg md:text-6xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-10"
//             variants={headingVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {headingText.split("").map((char, index) => (
//               <motion.span
//                 key={index}
//                 className="text-transparent"
//                 style={{ WebkitTextStroke: "2px white" }}
//                 variants={letterVariants}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>
//         </div>
    
//           <Link href="/company">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm sm:text-base font-bold rounded-xl transition"
//             >
//               <Play className="w-5 h-5" />
//               Click here to know more
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="text-center space-y-8 sm:space-y-12"
//           >
//             {/* Welcome Message */}
//             <motion.div variants={itemVariants} className="space-y-4">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 ✨ Welcome to Workownix! ✨
//               </h2>
//               <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
//                 💼 Design. Develop. Deliver.
//               </p>
//               <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 Thank you 😊 for contacting us! Let's build your digital future together! 🚀
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Premium Services Section with Background Video */}
//       <section className="relative overfl">
//         {/* Background Video */}
//         <div className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/image/coder15.jpg"
//           >
//             <source src="/image/coder0mp4" type="video/mp4" />
//             <source src="/image/codermp4" type="video/webm" />
//             {/* Fallback image if video doesn't load */}
//             Your browser does not support the video tag.
//           </video>
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>
//           {/* Gradient overlay for better visual effect */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
//         </div>

//         {/* Services Content */}
//         <div className="relative z-10 py-16 sm:py-20 md:py-24">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               className="text-center space-y-8 sm:space-y-12"
//             >
//               {/* Services Section Header */}
//               <motion.div variants={itemVariants} className="space-y-6">
//                 <div className="space-y-4">
//                   <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
//                     🎯 Our Premium Services Include:
//                   </h3>
//                   <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
//                 </div>
//               </motion.div>

//               {/* Services Grid */}
//               <motion.div variants={itemVariants} className="space-y-8">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//                   {services.map((service, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       whileHover={{ 
//                         scale: 1.05,
//                         transition: { duration: 0.2 }
//                       }}
//                       className={`bg-gradient-to-br ${service.color} backdrop-blur-md border rounded-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:border-white/30`}
//                     >
//                       <div className="flex flex-col items-center text-center space-y-3">
//                         <span className="text-3xl sm:text-4xl drop-shadow-lg">{service.icon}</span>
//                         <span className="text-sm sm:text-base text-white font-medium leading-tight drop-shadow-md">
//                           {service.name}
//                         </span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Contact Call to Action */}
//               <motion.div 
//                 variants={itemVariants}
//                 className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-6 sm:p-8 md:p-10 border border-white/20 backdrop-blur-md shadow-2xl"
//               >
//                 <div className="space-y-6">
//                   <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
//                     For more details contact me now! 🌐
//                   </p>
                  
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  
                    
//                     <motion.a
//                       href="https://whatsapp.com/channel/0029VbBDgPFChq6QBGUtKh3Q"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
//                     >
//                       <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
//                       💬 WhatsApp Channel
//                     </motion.a>
//                   </div>

//                   {/* Additional Contact Info */}
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-gray-200 text-sm sm:text-base">
                   
//                     <div className="flex items-center gap-2 drop-shadow-md">
//                       <Mail className="w-4 h-4" />
//                       <span>info.workownix@gmail.com</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* WhatsApp Floating Button */}
//       <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
//           onClick={() => window.open("https://whatsapp.com/channel/0029VbBDgPFChq6QBGUtKh3Q", "_blank")}
//         >
//           <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
//         </motion.button>
//       </div>
//     </div>
//   );
// }
