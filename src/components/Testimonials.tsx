
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVision Inc.",
      content: "Working with Consilium transformed our approach to market expansion. Their strategic insights helped us identify untapped opportunities and develop a roadmap that doubled our growth rate within 18 months.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Logistics",
      content: "The team at Consilium helped us streamline our operations, reducing costs by 30% while improving service quality. Their practical, results-oriented approach made all the difference.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CMO",
      company: "Innovate Retail",
      content: "The market analysis provided by Consilium gave us the confidence to pivot our strategy. Their team was responsive, thorough, and delivered insights that directly impacted our bottom line.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-consulting-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 reveal">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 reveal">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-consulting-900 rounded-lg p-8 md:p-10 reveal">
            <div className="flex justify-center mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-center mb-6">
              <p className="text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              <footer>
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-300">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </footer>
            </blockquote>
            <div className="flex justify-center space-x-4 mt-6">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-consulting-800 hover:bg-consulting-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-consulting-800 hover:bg-consulting-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
