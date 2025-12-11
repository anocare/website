"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Brain, Droplet, Wind, Eye, Bone } from "lucide-react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

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

  const goToSlide = (index) => {
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
    </>
  );
}