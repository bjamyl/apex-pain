"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Dr Ammar Mahmoud is an exceptional practitioner. He's the only one I trust completely with my injections. Dr Mahmoud has made my daily physical life easier. I could go on and on. I am very excited about the new practice opening soon. Dr Mahmoud is the BEST",
    name: "Mary Lee Stewart",
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    quote:
      "Awesome doctor and nursing staff too. Dr Mahmoud is the bes pain doctor around. I would go back to him anytime for pain management. He helped me walk again without pain all I take now for pain is tylenol and ibuprofen for my pain issues with my back. Thank you again Dr Mahmoud for your help.",
    name: "Laurie McCoy",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    quote:
      "The staff are all extremely nice. The minute you walk in you are greeted and they point you in the right direction. Nurses are excellent, treat you with the most respect. Dr Ammar Mahmoud is wonderful, very friendly! He is very good at what he does and makes sure you are comfortable and cared for. Nurses at his side also make sure you are comfortable and cared for. You could not get better treatment than them. I am very grateful for having such a wonderful team trying to help relieve my pain. 100% recommed! ",
    name: "Katrina King",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    quote:"I would highly recommend Dr Mahmoud to anyone. He was very friendly and caring and listened to what I had to say and asked questions when needed. My experience with him reminded me of what doctors used to be when I was young. I look forward to seeing him again.",
    name: "Judith Ellery",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    quote:"Dr Mahmoud is one of the best Drs I've had. He has some great bedside manner, and truly try's to help you. He has been my pain Dr. for nearly three years. I highly recommend him to people with chronic pain issues.",
  name: "T F",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 150);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 150);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border rounded-[28px] p-8  transition-all duration-300 shadow-xl hover:shadow-2xl">
        <div className="mb-8 min-h-[120px] flex items-center">
          <p
            className={`text-gray-600 leading-relaxed transition-all duration-300 ${
              isAnimating
                ? "opacity-0 transform translate-y-2"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            <span className="text-gray-500 text-2xl">"</span>
            {currentTestimonial.quote}<span className="text-gray-500 text-2xl">"</span>
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6 transition-all duration-300"></div>

        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-4 transition-all duration-300 ${
              isAnimating
                ? "opacity-0 transform translate-x-2"
                : "opacity-100 transform translate-x-0"
            }`}
          >
            {/* <div className="relative w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.name}
                fill
                className="object-cover transition-all duration-300"
              />
            </div> */}
            <div>
              <h4 className="font-semibold text-lg text-defaultGreen transition-colors duration-200">
                {currentTestimonial.name}
              </h4>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={isAnimating}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full 
                       hover:bg-gray-100 hover:border-gray-400 hover:scale-105 
                       active:scale-95 transition-all duration-200 
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 transition-transform duration-200" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full 
                       hover:bg-gray-100 hover:border-gray-400 hover:scale-105 
                       active:scale-95 transition-all duration-200 
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-400 scale-125"
                  : "bg-gray-300 hover:bg-gray-350 cursor-pointer"
              }`}
              onClick={() => {
                if (!isAnimating && index !== currentIndex) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
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
