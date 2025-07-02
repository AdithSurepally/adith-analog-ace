
import { ArrowDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Adith
              </h1>
              <div className="ml-3 px-3 py-1 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full">
                <span className="text-xs font-medium text-green-700">Available</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/50 to-teal-50/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-200/20 mb-8">
            <span className="text-sm font-medium text-purple-700">Get to Know Me</span>
          </div>
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            The Future of Analog Design
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12 font-medium">
            I'm not just another fresher. I'm a <span className="text-blue-600 font-bold">precision-driven analog layout engineer</span> with 
            intensive Moschip training who brings fresh perspectives to complex semiconductor challenges. 
            My passion for perfection and hunger for innovation make me the ideal candidate to 
            <span className="text-teal-600 font-bold"> elevate your team's capabilities</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
              <CardContent className="text-center p-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Precision Focused</h3>
                <p className="text-gray-600">Zero-tolerance for errors. Every layout optimized to perfection.</p>
              </CardContent>
            </Card>
            <Card className="group p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
              <CardContent className="text-center p-0">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Rapid Learner</h3>
                <p className="text-gray-600">Mastering new technologies at lightning speed.</p>
              </CardContent>
            </Card>
            <Card className="group p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
              <CardContent className="text-center p-0">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation Driven</h3>
                <p className="text-gray-600">Fresh ideas that push boundaries and drive results.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-2xl font-bold mb-2">Ready to Revolutionize Your Team?</h3>
          <p className="text-gray-300 mb-6">Let's build the future of semiconductor technology together</p>
          <div className="flex justify-center space-x-4 mb-6">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
              Contact Me Today
            </Button>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; 2024 Adith. All rights reserved.</p>
            <p className="text-gray-500 mt-1">Analog Layout Engineer | Ready to Transform Your Projects</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
