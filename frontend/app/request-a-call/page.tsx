"use client"; 

import { useState } from "react"; 

import {  

  Phone,  

  User,  

  Mail,  

  Calendar, 

  MessageSquare, 

  CheckCircle, 

  AlertCircle, 

  Loader2 

} from "lucide-react"; 

export default function RequestCallSection() { 
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    age: "", 
    description: "" 
  }); 
  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState(false); 
  const [error, setError] = useState(""); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target; 
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    })); 
    if (error) setError(""); 
  }; 
  const validateForm = () => { 
    if (!formData.name.trim()) { 
      setError("Please enter your name"); 
      return false; 
    } 
    if (!formData.email.trim()) { 
      setError("Please enter your email"); 
      return false; 
    } 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(formData.email)) { 
      setError("Please enter a valid email address"); 
      return false; 
    } 
    if (!formData.phone.trim()) { 
      setError("Please enter your phone number"); 
      return false; 
    } 
    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) { 
      setError("Please enter a valid 10-digit phone number"); 
      return false; 
    } 
    if (!formData.age.trim()) { 
      setError("Please enter your age"); 
      return false; 
    } 
    const age = parseInt(formData.age); 
    if (isNaN(age) || age < 1 || age > 120) { 
      setError("Please enter a valid age between 1 and 120"); 
      return false; 
    } 
    if (!formData.description.trim()) { 
      setError("Please describe your health concern"); 
      return false; 
    } 
    return true; 
  }; 
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => { 
    e.preventDefault(); 
    if (!validateForm()) { 
      return; 
    } 
    setLoading(true); 
    setError(""); 
    try { 

      // Replace with your actual backend URL 

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request-call-form`, { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify({ 
          name: formData.name.trim(), 
          email: formData.email.trim() || "optional@gmail.com", 
          phone: formData.phone.trim(), 
          age: parseInt(formData.age), 
          description: formData.description.trim(), 
          timestamp: new Date().toISOString() 
        }), 
      }); 
      if (!response.ok) { 
        throw new Error("Failed to submit request. Please try again."); 
      } 
      const data = await response.json(); 
      setSuccess(true); 
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        age: "", 
        description: "" 
      }); 
      setTimeout(() => { 
        setSuccess(false); 
      }, 5000); 
    } catch (err) { 
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again."); 
    } finally { 
      setLoading(false); 
    } 
  }; 

 
  return ( 

    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 md:py-24"> 

      <div className="container mx-auto px-4 lg:px-6"> 

         

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 

           

          {/* Left Side - Info */} 

          <div className="space-y-8"> 

            <div> 

              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-4"> 

                <Phone className="w-5 h-5" /> 

                Quick Response 

              </div> 

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"> 
                Request a Callback 
              </h2> 

              <p className="text-lg text-gray-600 leading-relaxed"> 

                Need medical assistance? Fill out the details and our healthcare experts will call you back within minutes to provide guidance and support. 

              </p> 

            </div> 

 

            {/* Features */} 

            <div className="space-y-4"> 

              {[ 

                { 

                  icon: CheckCircle, 

                  text: "Response within 60 seconds" 

                }, 

                { 

                  icon: CheckCircle, 

                  text: "Talk to certified healthcare professionals" 

                }, 

                { 

                  icon: CheckCircle, 

                  text: "100% confidential consultation" 

                }, 

                { 

                  icon: CheckCircle, 

                  text: "Available 24/7, every day" 

                } 

              ].map((feature, index) => { 

                const Icon = feature.icon; 

                return ( 

                  <div key={index} className="flex items-center gap-3"> 

                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"> 

                      <Icon className="w-5 h-5 text-green-600" /> 

                    </div> 

                    <span className="text-gray-700 font-medium">{feature.text}</span> 

                  </div> 

                ); 

              })} 

            </div> 

 

            {/* Contact Info */} 

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white"> 

              <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3> 

              <p className="text-blue-100 mb-4">Call our emergency helpline directly</p> 

              <a  

                href="tel:+911234567890" 

                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors" 

              > 

                <Phone className="w-5 h-5" /> 

                +91 123 456 7890 

              </a> 

            </div> 

          </div> 

 

          {/* Right Side - Form */} 

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100"> 

            <h3 className="text-2xl font-bold text-gray-900 mb-6"> 

              Fill Your Details 

            </h3> 

 

            <div className="space-y-6"> 

               

              {/* Name Field */} 

              <div> 

                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2"> 

                  Full Name * 

                </label> 

                <div className="relative"> 

                  <div className="absolute left-4 top-1/2 -translate-y-1/2"> 

                    <User className="w-5 h-5 text-gray-400" /> 

                  </div> 

                  <input 

                    type="text" 

                    id="name" 

                    name="name" 

                    value={formData.name} 

                    onChange={handleChange} 

                    placeholder="Enter your full name" 

                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 

                    disabled={loading} 

                  /> 

                </div> 

              </div> 

 

              {/* Email Field */} 

              <div> 

                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2"> 

                  Email Address <span className="text-gray-400 font-normal">(Optional)</span> 

                </label> 

                <div className="relative"> 

                  <div className="absolute left-4 top-1/2 -translate-y-1/2"> 

                    <Mail className="w-5 h-5 text-gray-400" /> 

                  </div> 

                  <input 

                    type="email" 

                    id="email" 

                    name="email" 

                    value={formData.email} 

                    onChange={handleChange} 

                    placeholder="your.email@example.com" 

                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 

                    disabled={loading} 

                  /> 

                </div> 

              </div> 

 

              {/* Phone Field */} 

              <div> 

                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2"> 

                  Phone Number * 

                </label> 

                <div className="relative"> 

                  <div className="absolute left-4 top-1/2 -translate-y-1/2"> 

                    <Phone className="w-5 h-5 text-gray-400" /> 

                  </div> 

                  <input 

                    type="tel" 

                    id="phone" 

                    name="phone" 

                    value={formData.phone} 

                    onChange={handleChange} 

                    placeholder="10-digit mobile number" 

                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 

                    disabled={loading} 

                  /> 

                </div> 

              </div> 

 

              {/* Age Field */} 

              <div> 

                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2"> 

                  Age * 

                </label> 

                <div className="relative"> 

                  <div className="absolute left-4 top-1/2 -translate-y-1/2"> 

                    <Calendar className="w-5 h-5 text-gray-400" /> 

                  </div> 

                  <input 

                    type="number" 

                    id="age" 

                    name="age" 

                    value={formData.age} 

                    onChange={handleChange} 

                    placeholder="Your age" 

                    min="1" 

                    max="120" 

                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 

                    disabled={loading} 

                  /> 

                </div> 

              </div> 

 

              {/* Description Field */} 

              <div> 

                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2"> 

                  Describe Your Health Concern * 

                </label> 

                <div className="relative"> 

                  <div className="absolute left-4 top-4"> 

                    <MessageSquare className="w-5 h-5 text-gray-400" /> 

                  </div> 

                  <textarea 

                    id="description" 

                    name="description" 

                    value={formData.description} 

                    onChange={handleChange} 

                    placeholder="Please describe your symptoms or health concern briefly..." 

                    rows={4} 

                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none" 

                    disabled={loading} 

                  /> 

                </div> 

              </div> 

 

              {/* Error Message */} 

              {error && ( 

                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4"> 

                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" /> 

                  <p className="text-red-700 text-sm">{error}</p> 

                </div> 

              )} 

 

              {/* Success Message */} 

              {success && ( 

                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4"> 

                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /> 

                  <p className="text-green-700 text-sm"> 

                    Request submitted successfully! Our team will call you shortly. 

                  </p> 

                </div> 

              )} 

 

              {/* Submit Button */} 

              <button 

                type="button" 

                onClick={handleSubmit} 

                disabled={loading} 

                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" 

              > 

                {loading ? ( 

                  <> 

                    <Loader2 className="w-5 h-5 animate-spin" /> 

                    Submitting... 

                  </> 

                ) : ( 

                  <> 

                    <Phone className="w-5 h-5" /> 

                    Request a Call 

                  </> 

                )} 

              </button> 

 

              <p className="text-xs text-gray-500 text-center"> 

                By submitting, you agree to our Terms of Service and Privacy Policy 

              </p> 

            </div> 

          </div> 

 

        </div> 

      </div> 

    </section> 

  ); 

} 