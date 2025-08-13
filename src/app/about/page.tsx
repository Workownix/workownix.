"use client"

import { useState } from "react"
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Shield,
  Clock,
  Globe,
  Heart,
  CheckCircle,
  Star,
  MessageCircle,
  ArrowRight,
  Zap,
  Code,
  Palette,
  Rocket,
  TrendingUp,
  Eye,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

  const phoneNumber = "+923001234567"
  const whatsappMessage = "Hello Workownix! I'd like to learn more about your team and services."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const teamMembers = [
    {
      name: "Muhammad Ahmed",
      role: "Founder & Lead Developer",
      expertise: "Full-Stack Development, AI Solutions",
      experience: "8+ Years",
      image: "/professional-male-developer.png",
    },
    {
      name: "Sarah Khan",
      role: "UI/UX Design Director",
      expertise: "User Experience, Brand Design",
      experience: "6+ Years",
      image: "/professional-female-designer.png",
    },
    {
      name: "Ali Hassan",
      role: "Mobile App Specialist",
      expertise: "React Native, Flutter",
      experience: "5+ Years",
      image: "/professional-male-mobile-developer.png",
    },
    {
      name: "Fatima Malik",
      role: "Digital Marketing Expert",
      expertise: "SEO, Content Strategy",
      experience: "4+ Years",
      image: "/professional-female-marketer.png",
    },
  ]

  const skills = [
    { name: "Web Development", percentage: 95 },
    { name: "Mobile App Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 92 },
    { name: "Digital Marketing", percentage: 88 },
    { name: "AI & Machine Learning", percentage: 85 },
    { name: "Video Production", percentage: 87 },
  ]

  const achievements = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Happy Clients Worldwide" },
    { icon: <Award className="h-6 w-6" />, number: "1000+", label: "Successful Projects" },
    { icon: <Star className="h-6 w-6" />, number: "5.0", label: "Average Client Rating" },
    { icon: <Globe className="h-6 w-6" />, number: "25+", label: "Countries Served" },
    { icon: <Clock className="h-6 w-6" />, number: "24/7", label: "Customer Support" },
    { icon: <TrendingUp className="h-6 w-6" />, number: "98%", label: "Client Retention Rate" },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence First",
      description: "We never compromise on quality. Every project is crafted with precision and attention to detail.",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Client Partnership",
      description:
        "We build lasting relationships with our clients, becoming their trusted digital transformation partner.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Driven",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability & Trust",
      description:
        "Our clients trust us with their most important projects because we deliver on our promises, every time.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements in detail.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Strategy & Design",
      description: "Our team creates a comprehensive strategy and designs that align with your brand and objectives.",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using the latest technologies and conduct thorough testing for quality assurance.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support to ensure continued success and growth.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">Workownix</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="/#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Services
                </a>
                <a href="/#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-16 bg-center bg-cover bg-gradient-to-br from-blue-50 via-white to-purple-50"
        style={{
          backgroundImage: "url('/image/coder1.jpg')",

        }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="relative z-10">About </span>
              <span className="relative inline-block">
                <span className=" inset-0 bg-gradient-to-r from-white-600/20 to-purple-600/20 rounded-2xl transform -skew-y-1 scale-110"></span>
                <span className=" inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl transform skew-y-1 scale-105"></span>
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4">
                  Workownix
                </span>
              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
              We are passionate digital craftsmen dedicated to transforming businesses through innovative technology
              solutions. Our mission is to bridge the gap between your vision and digital reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
                🏆 Award-Winning Team
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-100 text-green-800">
                🌍 Global Reach
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-100 text-purple-800">
                🚀 Innovation Leaders
              </Badge>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">{achievement.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {[
              { id: "story", label: "Our Story", icon: <Heart className="h-4 w-4" /> },
              { id: "team", label: "Our Team", icon: <Users className="h-4 w-4" /> },
              { id: "values", label: "Our Values", icon: <Star className="h-4 w-4" /> },
              { id: "process", label: "Our Process", icon: <Zap className="h-4 w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "story" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey to Excellence</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Workownix</strong> was born from a simple yet powerful vision: to
                    democratize access to premium digital solutions for businesses of all sizes. Founded by a team of
                    passionate technologists, we started our journey with the belief that every business deserves
                    world-class digital presence.
                  </p>
                  <p>
                    What began as a small team of developers has evolved into a comprehensive digital agency serving
                    clients across 25+ countries. Our growth story is built on one fundamental principle:{" "}
                    <em>putting our clients' success at the heart of everything we do.</em>
                  </p>
                  <p>
                    Today, we're proud to be the trusted digital partner for startups, SMEs, and enterprises worldwide.
                    Our diverse portfolio spans across industries, from e-commerce and healthcare to fintech and
                    education, proving our versatility and expertise.
                  </p>
                </div>
                <div className="mt-8">
                  <Button onClick={handleWhatsAppClick} size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start Your Success Story
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    To empower businesses worldwide with innovative digital solutions that drive growth, enhance user
                    experiences, and create lasting competitive advantages in the digital marketplace.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span>Innovation-driven approach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span>Client-centric solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span>Global impact, local understanding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our diverse team of specialists brings together years of experience and cutting-edge expertise to
                  deliver exceptional results for every project.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {member.experience}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Skills Section */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Collective Expertise</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                        <span className="text-blue-600 font-bold">{skill.percentage}%</span>
                      </div>
                      <Progress value={skill.percentage} className="h-3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These principles guide every decision we make and every solution we create for our clients.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white flex-shrink-0">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Values in Action?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have experienced the Workownix difference. Let's discuss how
                  our values can drive your project's success.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Experience the Difference
                </Button>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We follow a systematic approach that ensures every project is delivered on time, within budget, and
                  exceeds expectations.
                </p>
              </div>

              <div className="space-y-8">
                {process.map((step, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-100 rounded-lg">{step.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
                <p className="text-gray-600 mb-6">
                  Let's begin with step one - understanding your unique requirements and goals.
                </p>
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Workownix?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our family of successful clients and let's create something amazing together. Your digital
            transformation journey starts with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Project Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
