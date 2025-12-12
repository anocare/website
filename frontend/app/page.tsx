"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Brain, Droplet, Wind, Eye, Bone } from "lucide-react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { 
  Clock, 
  Award, 
  Users, 
  Shield,  
  Headphones,
  CheckCircle,
  Star,
  TrendingUp,
  Zap
} from "lucide-react";
import { 
  Check, 
  X, 
  Video, 
  MessageCircle, 
  FileText, 
  Calendar,
  Crown,
  Sparkles} from "lucide-react";
  import { 
  Stethoscope, 
  Pill, 
  UserCheck, 
  Activity, 
  Ambulance,
  ClipboardCheck,
  Home,
  TestTube,
} from "lucide-react";


export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop",
      title: "24/7 Healthcare Support",
      subtitle: "We're here when you need us most"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&h=1080&fit=crop",
      title: "Professional Medical Assistance",
      subtitle: "Expert care at your fingertips"
    },
    {
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1920&h=1080&fit=crop",
      title: "Emergency Helpline Services",
      subtitle: "Quick response when every second counts"
    },
    {
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop",
      title: "Trusted By Thousands",
      subtitle: "Your health, our priority"
    },
    {
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&h=1080&fit=crop",
      title: "Connect With Care Experts",
      subtitle: "Compassionate support anytime, anywhere"
    }
  ];

  const diseases = [
    {
      id: 1,
      slug: "diabetes",
      title: "Diabetes",
      icon: Droplet,
      description: "A chronic condition affecting how your body turns food into energy, resulting in high blood sugar levels.",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      slug: "hypertension",
      title: "Hypertension",
      icon: Heart,
      description: "High blood pressure that can lead to serious health complications if left untreated over time.",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      slug: "asthma",
      title: "Asthma",
      icon: Wind,
      description: "A respiratory condition causing difficulty breathing due to inflammation and narrowing of airways.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      slug: "migraine",
      title: "Migraine",
      icon: Brain,
      description: "Intense headaches often accompanied by nausea, vomiting, and sensitivity to light and sound.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      slug: "arthritis",
      title: "Arthritis",
      icon: Bone,
      description: "Inflammation of joints causing pain, stiffness, and reduced mobility in affected areas.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 6,
      slug: "glaucoma",
      title: "Glaucoma",
      icon: Eye,
      description: "Eye condition that damages the optic nerve, often due to high pressure inside the eye.",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support whenever you need us. Our team is always ready to assist you, day or night.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      title: "Expert Professionals",
      description: "Certified healthcare experts with years of experience providing the highest quality medical guidance.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "10,000+ Happy Patients",
      description: "Trusted by thousands of families across the country for reliable healthcare support and assistance.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your privacy is our priority. All consultations are completely secure and confidential.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick connection to healthcare professionals with average response time under 60 seconds.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Headphones,
      title: "Multilingual Support",
      description: "Get assistance in your preferred language. We support English, Hindi, and multiple regional languages.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Patients", icon: Users },
    { number: "500+", label: "Expert Doctors", icon: Award },
    { number: "24/7", label: "Available Support", icon: Clock },
    { number: "99%", label: "Satisfaction Rate", icon: Star }
  ];

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Basic",
      icon: Phone,
      tagline: "Perfect for individuals",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: "Essential healthcare support for your basic needs",
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        { text: "24/7 Phone Support", included: true },
        { text: "Basic Health Consultation", included: true },
        { text: "Emergency Helpline Access", included: true },
        { text: "Health Tips & Alerts", included: true },
        { text: "Video Consultation", included: false },
        { text: "Prescription Management", included: false },
        { text: "Priority Support", included: false },
        { text: "Family Member Add-on", included: false }
      ]
    },
    {
      name: "Standard",
      icon: Video,
      tagline: "Most popular choice",
      monthlyPrice: 599,
      yearlyPrice: 5990,
      description: "Comprehensive care for you and your family",
      color: "from-purple-500 to-indigo-500",
      popular: true,
      features: [
        { text: "24/7 Phone Support", included: true },
        { text: "Advanced Health Consultation", included: true },
        { text: "Emergency Helpline Access", included: true },
        { text: "Health Tips & Alerts", included: true },
        { text: "Video Consultation (5/month)", included: true },
        { text: "Prescription Management", included: true },
        { text: "Priority Support", included: true },
        { text: "Family Member Add-on (2)", included: true }
      ]
    },
    {
      name: "Premium",
      icon: Crown,
      tagline: "Complete healthcare solution",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      description: "VIP healthcare support with exclusive benefits",
      color: "from-yellow-500 to-orange-500",
      popular: false,
      features: [
        { text: "24/7 Phone & Chat Support", included: true },
        { text: "Premium Health Consultation", included: true },
        { text: "Emergency Helpline Access", included: true },
        { text: "Personalized Health Tips", included: true },
        { text: "Unlimited Video Consultation", included: true },
        { text: "Prescription & Lab Management", included: true },
        { text: "VIP Priority Support", included: true },
        { text: "Family Member Add-on (5)", included: true }
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: MessageCircle,
      title: "Instant Support",
      description: "Connect with healthcare experts instantly via phone, chat, or video"
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Keep all your health records and prescriptions in one secure place"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book appointments and consultations at your convenience"
    },
    {
      icon: Sparkles,
      title: "Wellness Programs",
      description: "Access to exclusive health and wellness programs"
    }
  ];

  const mainServices = [
    {
      icon: Stethoscope,
      title: "Surgery Coordination",
      description: "End-to-end support for planned surgeries including hospital selection, pre-operative guidance, and post-operative care coordination.",
      features: [
        "Hospital & surgeon recommendations",
        "Pre-surgery health assessment",
        "Insurance claim assistance",
        "Post-surgery care planning"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Pill,
      title: "Medicine Delivery",
      description: "Convenient doorstep delivery of prescribed medications with reminders and refill notifications to ensure you never miss a dose.",
      features: [
        "Same-day medicine delivery",
        "Prescription upload & verification",
        "Automatic refill reminders",
        "Genuine medicines guarantee"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: UserCheck,
      title: "Expert Consultation",
      description: "Connect with specialized doctors and healthcare experts for video consultations, second opinions, and treatment planning.",
      features: [
        "Multi-specialty doctor access",
        "Video & audio consultations",
        "Digital prescriptions",
        "Follow-up consultations included"
      ],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Activity,
      title: "Post-Treatment Follow-ups",
      description: "Comprehensive post-treatment monitoring and regular follow-ups to ensure complete recovery and prevent complications.",
      features: [
        "Regular health check-ins",
        "Recovery progress tracking",
        "Medication compliance monitoring",
        "24/7 emergency support"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: TestTube,
      title: "Lab Tests at Home",
      description: "Professional sample collection from your home with accurate results and doctor consultation for report interpretation.",
      features: [
        "Home sample collection",
        "NABL certified labs",
        "Digital reports within 24hrs",
        "Free doctor consultation on reports"
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "Swift emergency medical response with ambulance services, critical care support, and immediate hospital admission assistance.",
      features: [
        "24/7 ambulance service",
        "ICU ambulance availability",
        "Emergency hospital coordination",
        "Real-time GPS tracking"
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50"
    }
  ];

  const additionalFeatures = [
    {
      icon: Home,
      title: "Home Healthcare",
      description: "Nursing care, physiotherapy, and medical equipment at home"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Easy scheduling with top hospitals and clinics"
    },
    {
      icon: ClipboardCheck,
      title: "Health Records",
      description: "Secure digital storage of all medical documents"
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Preventive care and lifestyle management support"
    }
  ];


  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index:any) => {
    setCurrentSlide(index);
  };

  return (<>
    <section className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden bg-gray-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      Get Started
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Anocare helpline
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Your Trusted Healthcare Partner
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At Anocare helpline, we believe everyone deserves access to quality healthcare support. 
                Our dedicated team of professionals is available 24/7 to provide you with immediate assistance, 
                medical guidance, and compassionate care when you need it most.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                With years of experience and a commitment to excellence, we've become a trusted name 
                in healthcare support services. Whether it's an emergency or routine consultation, 
                we're just a call away to ensure your peace of mind.
              </p>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Available Support</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-700 font-semibold">Happy Customers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Expert Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common Health Conditions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Learn about prevalent diseases, their symptoms, and how to manage them effectively
          </p>
        </div>

        {/* Disease Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {diseases.map((disease) => {
            const Icon = disease.icon;
            return (
              <div
                key={disease.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                {/* Card Header with Icon */}
                <div className={`bg-gradient-to-br ${disease.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12" />
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-white mb-3" />
                    <h3 className="text-2xl font-bold text-white">{disease.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {disease.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/diseases/${disease.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${disease.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/diseases"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Diseases
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-4">
            <Heart className="w-5 h-5" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experience healthcare support that truly cares about your well-being with Anocare helpline
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                {/* Icon Header */}
                <div className={`${feature.bgColor} p-6 flex items-center justify-center`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Trusted Healthcare Partner</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold">
                Join Thousands Who Trust Us
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed">
                Anocare helpline has been providing exceptional healthcare support services for years. 
                Our commitment to excellence and patient satisfaction has made us the preferred choice 
                for families across the nation.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white flex items-center justify-center font-bold">
                    A
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white flex items-center justify-center font-bold">
                    B
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border-2 border-white flex items-center justify-center font-bold">
                    C
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white flex items-center justify-center font-bold text-sm">
                    10K+
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-blue-100">Rated 4.9/5 by our users</p>
                </div>
              </div>
            </div>

            {/* Right Content - Key Benefits */}
            <div className="space-y-4">
              {[
                "Instant connection to healthcare professionals",
                "Comprehensive health guidance and support",
                "Emergency assistance when you need it most",
                "Affordable subscription plans for everyone",
                "Regular health tips and wellness updates"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to experience the best healthcare support?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/request-a-call"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request a Call
              <Headphones className="w-5 h-5" />
            </a>
            <a
              href="/subscriptions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              View Plans
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-4">
            <Zap className="w-5 h-5" />
            Flexible Plans
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Affordable healthcare support plans designed for every need
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-lg font-semibold ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ backgroundColor: billingCycle === "yearly" ? "#3B82F6" : "#D1D5DB" }}
          >
            <span
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform"
              style={{ transform: billingCycle === "yearly" ? "translateX(32px)" : "translateX(0)" }}
            />
          </button>
          <span className={`text-lg font-semibold ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"}`}>
            Yearly
          </span>
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Save 17%
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const discount = billingCycle === "yearly" ? Math.round((1 - (plan.yearlyPrice / (plan.monthlyPrice * 12))) * 100) : 0;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  plan.popular 
                    ? "border-purple-500 lg:scale-105 lg:-mt-4" 
                    : "border-gray-200 hover:border-blue-300"
                } hover:shadow-2xl`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className={`bg-gradient-to-br ${plan.color} p-8 text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-white/80 text-sm">{plan.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">₹{price}</span>
                      <span className="text-white/80">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-white/90 text-sm mt-2">
                        Save {discount}% • ₹{Math.round(price/12)}/month
                      </p>
                    )}
                  </div>
                  
                  <p className="text-white/90 mt-4 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-gray-400" />
                          </div>
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105"
                        : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            All Plans Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ / Help Section */}
        <div className="text-center mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Need Help Choosing a Plan?
          </h3>
          <p className="text-gray-600 mb-6">
            Our healthcare experts are here to help you find the perfect plan for your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/request-a-call"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </a>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>No Hidden Charges</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Secure Payment</span>
          </div>
        </div>

      </div>
    </section>
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-4">
            <CheckCircle className="w-5 h-5" />
            Complete Healthcare Solutions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Beyond Basic Support
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Comprehensive healthcare services designed to cover every aspect of your medical needs
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className={`${service.bgColor} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16" />
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300 pt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Additional Features Bar */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            More Services We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            How Our Services Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Request Service",
                description: "Call our helpline or use our app to request any service"
              },
              {
                step: "2",
                title: "Get Confirmation",
                description: "Receive instant confirmation with details and timeline"
              },
              {
                step: "3",
                title: "Service Delivery",
                description: "Our professionals arrive at your doorstep or coordinate remotely"
              },
              {
                step: "4",
                title: "Follow-up Care",
                description: "Continuous monitoring and support until complete recovery"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-2xl font-bold rounded-2xl shadow-lg mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Any of These Services?
          </h3>
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            Our team is ready to assist you with any healthcare service you need. Contact us today to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/request-a-call"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Stethoscope className="w-5 h-5" />
              Request a Service
            </a>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-medium">Verified Healthcare Providers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-medium">Transparent Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-medium">Quality Assured</span>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}