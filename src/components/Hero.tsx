
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-consulting-50 to-white -z-10"></div>
      <div
        id="hero"
        className="container mx-auto px-4 md:px-6"
      >

      
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-consulting-950 animate-fade-in">
            We are Consultants
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 animate-fade-up">
            We help businesses navigate complex challenges with strategic solutions
            that drive sustainable growth and measurable success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button className="bg-consulting-700 hover:bg-consulting-800 px-8 py-6 text-lg" onClick={() => window.location.href = "/#contact"}>
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-consulting-700 text-consulting-700 hover:bg-consulting-50 px-8 py-6 text-lg">
              Our Approach
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            "Enterprise Solutions",
            "Strategic Planning", 
            "Business Transformation", 
            "Market Analysis"
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
