
import { Shield, Lightbulb, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValueCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 reveal">
      <div className="bg-consulting-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-consulting-700" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our client engagements and business practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek creative solutions to complex problems and embrace new approaches."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "We value your time and resources by delivering results through optimized processes."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to exceeding expectations and delivering exceptional quality in all we do."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-consulting-950 reveal">
              Why Choose Our Consulting Firm
            </h2>
            <p className="text-lg text-gray-700 mb-6 reveal">
              With years of experience across multiple industries, our team of experts brings the knowledge and insights needed to help your business thrive in today's competitive landscape.
            </p>
            <p className="text-lg text-gray-700 mb-8 reveal">
              We take a collaborative approach, working closely with your team to develop tailored solutions that address your unique challenges and leverage your specific strengths.
            </p>
            <div className="reveal">
              <Button className="bg-consulting-700 hover:bg-consulting-800">
                Learn More About Us
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
