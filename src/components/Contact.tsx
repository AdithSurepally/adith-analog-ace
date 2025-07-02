
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm actively seeking opportunities in analog layout engineering where I can contribute 
              to innovative semiconductor projects. Let's discuss how my skills and enthusiasm can 
              add value to your team.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">adith.engineer@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Phone className="h-6 w-6 text-teal-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:adith.engineer@gmail.com"
                  className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="p-8 h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Actions</h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">📄 Resume</h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      Download my detailed resume with complete training background and project details.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">💼 Portfolio</h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      View detailed project documentation and layout designs from my training.
                    </p>
                    <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                      View Portfolio
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">🤝 Schedule Meeting</h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      Let's have a conversation about opportunities and how I can contribute to your team.
                    </p>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      Schedule Call
                    </Button>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Availability</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available for immediate opportunities
                  </p>
                  <p className="text-gray-600 text-sm">
                    Open to full-time positions, internships, and contract work
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
