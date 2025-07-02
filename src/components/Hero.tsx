
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Adith
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
            Analog Layout Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fresher with comprehensive training from Moschip, specializing in precision analog circuit design 
            and layout optimization using industry-standard tools.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
            onClick={() => window.open('#', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="#"
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:text-teal-600 hover:shadow-xl transition-all transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="#"
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:text-teal-600 hover:shadow-xl transition-all transform hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:adith@example.com"
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:text-teal-600 hover:shadow-xl transition-all transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-blue-600 hover:text-teal-600 transition-colors"
        >
          <ArrowDown className="h-8 w-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
