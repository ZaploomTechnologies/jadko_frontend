import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/image-1.jpg',
    title: "Accurate Diagnostics at Your Doorstep",
    subtitle: "Promoting health with home collection and tech-enabled service.",
    cta: "Book Now"
  },
  {
    image: '/image-2.jpg',
    title: "Preventive Health Packages Starting at ₹999",
    subtitle: "High-quality diagnostics at rates much cheaper than traditional labs.",
    cta: "Explore Packages"
  },
  {
    image: '/image-3.jpg',
    title: "Free Doctor Consultation with Every Report",
    subtitle: "Expert advice to help you understand your results better.",
    cta: "Learn More"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover pos"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/1920x600?text=JADKO+Banner';
            }}
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container flex justify-center">
              <div className="max-w-2xl text-center transform transition-all duration-700 translate-y-0 opacity-100">
                <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-4 md:mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                {/* <button className="bg-jadko-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                  {slide.cta}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
