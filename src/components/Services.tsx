
import { Check, LineChart, Users, Briefcase, Target, FileText } from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  benefits 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  benefits: string[];
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md reveal">
      <div className="bg-consulting-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-consulting-700" />
      </div>
      <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-consulting-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-consulting-600 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Develop clear strategic direction and execution plans that align with your business goals.",
      icon: Target,
      benefits: [
        "Comprehensive market analysis",
        "Strategic roadmap development",
        "Competitive positioning"
      ]
    },
    {
      title: "Business Analysis",
      description: "Gain insights from your data to make informed decisions and optimize operations.",
      icon: LineChart,
      benefits: [
        "Performance metrics definition",
        "Process optimization",
        "Growth opportunity identification"
      ]
    },
    {
      title: "Organizational Development",
      description: "Build high-performing teams and create structures that support your business objectives.",
      icon: Users,
      benefits: [
        "Leadership development",
        "Team effectiveness",
        "Change management"
      ]
    },
    {
      title: "Project Management",
      description: "Execute complex projects efficiently with our proven methodologies and tools.",
      icon: Briefcase,
      benefits: [
        "Project planning & execution",
        "Risk mitigation strategies",
        "Resource optimization"
      ]
    },
    {
      title: "Market Research",
      description: "Understand your customers, competition, and market trends to inform business decisions.",
      icon: FileText,
      benefits: [
        "Customer insights analysis",
        "Competitive intelligence",
        "Market opportunity assessment"
      ]
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-consulting-950 reveal">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 reveal">
            We offer comprehensive consulting services designed to address your most complex business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
