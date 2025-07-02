
import { ArrowDown, Mail, Linkedin, Github, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-full border border-blue-200/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Available for Immediate Hire</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent relative">
              Adith
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </span>
          </h1>
          
          <div className="relative mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Analog Layout Engineer
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Fresher • Moschip Trained • Ready to Excel</span>
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Precision-driven analog circuit designer with comprehensive Moschip training. 
            <span className="text-blue-600 font-semibold"> Expert in Cadence Virtuoso</span> and 
            <span className="text-teal-600 font-semibold"> layout optimization</span>. 
            Ready to revolutionize your semiconductor projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="#"
            className="group w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all transform hover:scale-110 hover:rotate-3"
          >
            <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#"
            className="group w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl shadow-lg flex items-center justify-center text-white hover:shadow-2xl hover:shadow-gray-500/30 transition-all transform hover:scale-110 hover:rotate-3"
          >
            <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:adith.engineer@gmail.com"
            className="group w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl shadow-lg flex items-center justify-center text-white hover:shadow-2xl hover:shadow-red-500/30 transition-all transform hover:scale-110 hover:rotate-3"
          >
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="group animate-bounce text-blue-600 hover:text-teal-600 transition-colors"
        >
          <ArrowDown className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
