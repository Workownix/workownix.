"use client"

import type React from "react"
import { useState } from "react"

import { Phone, Mail, MapPin, MessageCircle, Clock, Users, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const phoneNumber = "+923001234567" // Replace with your actual WhatsApp number
  const whatsappMessage = "Hello! I would like to discuss business opportunities with your team."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your inquiry. Our team will contact you within 24 hours.")
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our professional team for business inquiries, partnerships, and consultations. We're
              committed to providing exceptional service and solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-slate-900">5+ Years</div>
              <div className="text-slate-600">Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-slate-900">{"<2hrs"}</div>
              <div className="text-slate-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* WhatsApp Contact - Priority */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Business
                  </CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Preferred
                  </Badge>
                </div>
                <CardDescription className="text-green-700">
                  Get instant response from our business team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start WhatsApp Chat
                </Button>
                <p className="text-sm text-green-600 mt-3 text-center">Available: Mon-Sat, 10 AM - 6 PM</p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach our professional team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Business Phone</p>
                    <p className="text-slate-600">{phoneNumber}</p>
                    <p className="text-sm text-slate-500">Direct line to our team</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">contact@yourcompany.com</p>
                    <p className="text-sm text-slate-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Office Address</p>
                    <p className="text-slate-600">
                      Suite 401, Business Center
                      <br />
                      Main Boulevard, Gulberg III
                      <br />
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-slate-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-semibold text-slate-900">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-semibold text-slate-900">12:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Emergency Support:</strong> Available 24/7 for existing clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Professional Inquiry</CardTitle>
                <CardDescription className="text-base">
                  Fill out this form with your business requirements and our team will provide you with a detailed
                  response within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                        First Name *
                      </Label>
                      <Input id="firstName" placeholder="Enter your first name" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                        Last Name *
                      </Label>
                      <Input id="lastName" placeholder="Enter your last name" required className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Business Email *
                      </Label>
                      <Input id="email" type="email" placeholder="your@company.com" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        Phone Number *
                      </Label>
                      <Input id="phone" type="tel" placeholder="+92 300 1234567" required className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-slate-700">
                        Company Name
                      </Label>
                      <Input id="company" placeholder="Your company name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm font-semibold text-slate-700">
                        Project Budget
                      </Label>
                      <select
                        id="budget"
                        className="mt-2 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                      Subject *
                    </Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                      Detailed Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide detailed information about your project requirements, timeline, and any specific needs..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" required className="rounded" />
                    <Label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Professional Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white"
          size="lg"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their business needs. Contact us today for a free
            consultation.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
