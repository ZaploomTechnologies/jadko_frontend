import { useState } from 'react';
import { Quote, Star, Award, CheckCircle, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const testimonials = [
  {
    name: "Anita Sharma",
    location: "Mumbai",
    quote: "Got my report in 12 hours—super impressed with the speed and professionalism!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    quote: "The phlebotomist was very gentle and professional. The home collection saved me so much time.",
    rating: 5
  },
  {
    name: "Priya Mehta",
    location: "Bangalore",
    quote: "Booking was so easy and the technician arrived right on time. Reports were detailed and accurate.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    quote: "Excellent service! The online portal made it very easy to track my results. Highly recommended.",
    rating: 5
  },
  {
    name: "Sunita Patel",
    location: "Ahmedabad",
    quote: "Very hygienic and professional staff. My elderly mother felt very comfortable during the sample collection.",
    rating: 5
  },
  {
    name: "Arjun Nair",
    location: "Chennai",
    quote: "Affordable packages with top-quality results. The customer support team was also very responsive.",
    rating: 5
  }
];

const brands = [
  { name: "NABL Accredited", icon: <Award className="w-12 h-12" /> },
  { name: "ISO Certified", icon: <CheckCircle className="w-12 h-12" /> },
  { name: "Trusted by Doctors", icon: <Star className="w-12 h-12" /> },
  { name: "Fast & Accurate", icon: <TrendingUp className="w-12 h-12" /> },
];

const TrustSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const maxCurrent = total - 2; // last valid position to still show 2 cards

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxCurrent, c + 1));

  // Each card is 1/6 of the track (track = 300% of container, 6 cards each = 50% of container)
  const translatePct = current * (100 / total);

  return (
    <>
      <section className="pt-24 pb-10 bg-gray-50 overflow-hidden">
      <div className="container">
        {/* Testimonials */}
        <div className="mb-20">
          <SectionHeader
            title="Love from Customers"
            highlight="Customers"
            subtitle="Don't just take our word for it—hear what our patients have to say about their experience."
          />
          <div className="relative">
            {/* Sliding track — all cards in one row, each 50% of container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ width: `${total * 50}%`, transform: `translateX(-${translatePct}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    style={{ width: `${100 / total}%` }}
                    className="px-6"
                  >
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col relative h-full">
                      <Quote className="absolute top-10 right-10 w-12 h-12 text-gray-100" />
                      <div className="flex gap-1 text-jadko-accent mb-6">
                        {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                      <div className="mt-auto">
                        <h4 className="font-bold text-jadko-primary text-lg">{t.name}</h4>
                        <p className="text-gray-500">{t.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-12 h-12 rounded-full border-2 border-jadko-primary text-jadko-primary flex items-center justify-center hover:bg-jadko-primary hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot indicators — one per step */}
              <div className="flex gap-2">
                {Array.from({ length: maxCurrent + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${i === current ? 'bg-jadko-primary' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={current === maxCurrent}
                className="w-12 h-12 rounded-full border-2 border-jadko-primary text-jadko-primary flex items-center justify-center hover:bg-jadko-primary hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Awards moved to separate dark section below */}
      </div>
    </section>
    </>
  );
};

export default TrustSection;
