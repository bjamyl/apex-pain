"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonials from "@/constants/testimonials.json"; // Assuming you have a JSON file with testimonials data



// Avatar component mock
type AvatarProps = {
  className?: string;
  children: React.ReactNode;
};

const Avatar = ({ className, children }: AvatarProps) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    {children}
  </div>
);

const AvatarImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover" />
);

const AvatarFallback = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`flex items-center justify-center w-full h-full ${className}`}>
    {children}
  </div>
);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

type Testimonial = {
  name: string;
  text: string;
  stars: number;
  publishAt: string;
  reviewerPhotoUrl: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className=" rounded-[28px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl bg-gray-300 h-full flex flex-col">
      <div className="flex-1 mb-6">
        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
          <span className="text-gray-400 text-xl">"</span>
          {testimonial.text}
          <span className="text-gray-400 text-xl">"</span>
        </p>
      </div>

      <div className="border-t border-gray-400 pt-4 mt-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-gray-100">
              <AvatarImage src={testimonial.reviewerPhotoUrl} alt={testimonial.name} />
              <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
                {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-base text-gray-800 transition-colors duration-200">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.publishAt}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <StarRating rating={testimonial.stars} />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) { // xl
        setItemsPerView(3);
      } else if (window.innerWidth >= 1024) { // lg
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        // Move by itemsPerView instead of 1
        const newIndex = prevIndex - itemsPerView;
        return newIndex < 0 ? Math.max(0, maxIndex) : newIndex;
      });
      setIsAnimating(false);
    }, 150);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        // Move by itemsPerView instead of 1
        const newIndex = prevIndex + itemsPerView;
        return newIndex > maxIndex ? 0 : newIndex;
      });
      setIsAnimating(false);
    }, 150);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)
    .map((testimonial) => ({
      ...testimonial,
      text: testimonial.text ?? "",
    }));

  // Calculate total pages based on itemsPerView
  const totalPages = Math.ceil(testimonials.length / itemsPerView);
  const currentPage = Math.floor(currentIndex / itemsPerView);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative">
        <div 
          className={`grid gap-6 transition-all duration-300 ${
            itemsPerView === 1 ? 'grid-cols-1' : 
            itemsPerView === 2 ? 'grid-cols-1 lg:grid-cols-2' : 
            'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
          } ${isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${currentIndex}-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrevious}
            disabled={isAnimating}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full 
                     hover:bg-gray-100 hover:border-gray-400 hover:scale-105 
                     active:scale-95 transition-all duration-200 
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full 
                     hover:bg-gray-100 hover:border-gray-400 hover:scale-105 
                     active:scale-95 transition-all duration-200 
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div
              key={pageIndex}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                pageIndex === currentPage
                  ? "bg-gray-500 scale-125"
                  : "bg-gray-400 hover:bg-gray-350"
              }`}
              onClick={() => {
                if (!isAnimating && pageIndex !== currentPage) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(pageIndex * itemsPerView);
                    setIsAnimating(false);
                  }, 150);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}