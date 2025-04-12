
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold font-display text-consulting-950">
            Consilium
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-consulting-700 font-medium">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-consulting-700 font-medium">
            About
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-consulting-700 font-medium">
            Testimonials
          </a>
          <a href="#contact">
            <Button className="bg-consulting-700 hover:bg-consulting-800">Contact Us</Button>
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-gray-700 py-2 hover:text-consulting-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 py-2 hover:text-consulting-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 py-2 hover:text-consulting-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="bg-consulting-700 hover:bg-consulting-800 w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
