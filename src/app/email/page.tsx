"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, Sparkles, Crown, Star } from "lucide-react"

export default function VIPEmailPage() {
  const [isComposing, setIsComposing] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  })

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSending(false)
    setIsComposing(false)
    setFormData({ to: "", subject: "", message: "" })
    alert("Email sent successfully!")
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/image/coder16.jpg')] opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-purple-400 animate-bounce" />
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                VIP Premium
              </Badge>
            </div>

            <h1 className="text-6xl md:text-7xl text-white animate-pulse" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
              Elevate Your Communication
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
              Experience the luxury of seamless emailing with our premium platform
            </p>

            <div className="flex justify-center items-center gap-2 text-purple-300">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              <span className="ml-2 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                Trusted by Fortune 500 companies
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {!isComposing ? (
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-white animate-bounce" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
                Craft Elegant Messages
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                Connect with your network effortlessly. Our premium email platform ensures your messages reflect your high standards and professional excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Sparkles, title: "Premium Templates", text: "Choose from our collection of professionally designed email templates" },
                { icon: Mail, title: "Secure Delivery", text: "Enterprise-grade security ensures your messages reach their destination safely" },
                { icon: Crown, title: "VIP Support", text: "24/7 premium support from our dedicated team of email specialists" },
              ].map((item, i) => (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gray-900 border-gray-800">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-800/50 transition-colors">
                      <item.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => setIsComposing(true)}
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-purple-600 hover:from-gray-900 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}
            >
              <Mail className="w-6 h-6 mr-3" />
              Compose New Email
            </Button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden bg-gray-900 border-gray-800">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-purple-600 text-white p-8">
                <CardTitle className="text-3xl flex items-center gap-3" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
                  <Mail className="w-8 h-8" />
                  Compose Premium Email
                </CardTitle>
                <p className="text-purple-100 mt-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Create your message with elegance and precision
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSendEmail} className="space-y-8">
                  {[
                    { label: "To", type: "email", value: formData.to, onChange: (e: any) => setFormData({ ...formData, to: e.target.value }), placeholder: "recipient@example.com" },
                    { label: "Subject", type: "text", value: formData.subject, onChange: (e: any) => setFormData({ ...formData, subject: e.target.value }), placeholder: "Enter your subject line" },
                  ].map((field, i) => (
                    <div className="space-y-2" key={i}>
                      <label className="text-lg font-semibold text-white" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
                        {field.label}
                      </label>
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        required
                        className="h-14 text-lg border-2 focus:border-purple-500 rounded-lg bg-gray-800 border-gray-700 text-white"
                        style={{ fontFamily: 'Arial, sans-serif' }}
                      />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label className="text-lg font-semibold text-white" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
                      Message
                    </label>
                    <Textarea
                      placeholder="Compose your elegant message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={12}
                      className="text-lg border-2 focus:border-purple-500 rounded-lg resize-none bg-gray-800 border-gray-700 text-white"
                      style={{ fontFamily: 'Arial, sans-serif' }}
                    />
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button
                      type="submit"
                      disabled={isSending}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-gray-800 to-purple-600 hover:from-gray-900 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                      style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}
                    >
                      {isSending ? (
                        <>
                          <div className="w-6 h-6 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span style={{ fontFamily: 'Arial, sans-serif' }}>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-3" />
                          Send Email
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsComposing(false)}
                      size="lg"
                      className="px-8 py-6 text-lg border-2 hover:bg-gray-800 rounded-xl border-gray-700 text-white hover:text-white"
                      style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold" style={{ fontFamily: '"Zen Tokyo Zoo", system-ui' }}>
              VIP Email Platform
            </span>
          </div>
          <p className="text-gray-400" style={{ fontFamily: 'Arial, sans-serif' }}>
            © 2024 VIP Email Platform. Elevating communication worldwide.
          </p>
        </div>
      </footer>
    </div>
  )
}
