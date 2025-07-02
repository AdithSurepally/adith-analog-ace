
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Clock } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Training & Experience
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Moschip Training */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Moschip Training Program</h3>
                  <p className="text-gray-600">Analog Layout Engineering</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Curriculum</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Advanced Analog Layout Techniques</li>
                    <li>• Cadence Virtuoso Mastery</li>
                    <li>• DRC/LVS Verification</li>
                    <li>• Parasitic Extraction & Analysis</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Hands-on Projects</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Op-Amp Layout Design</li>
                    <li>• ADC/DAC Circuit Layouts</li>
                    <li>• Power Management Unit Design</li>
                    <li>• Mixed-Signal Layout Optimization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Key Achievements</h3>
                  <p className="text-gray-600">Training Highlights</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Layout Efficiency</h4>
                  <p className="text-gray-600 text-sm">Achieved 95% first-pass DRC success rate in training projects</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Quick Learning</h4>
                  <p className="text-gray-600 text-sm">Mastered Cadence Virtuoso in record time during intensive training</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🔬 Technical Excellence</h4>
                  <p className="text-gray-600 text-sm">Completed complex analog layout projects with zero LVS errors</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📊 Performance Metrics</h4>
                  <p className="text-gray-600 text-sm">Top 10% performer in the Moschip training cohort</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Training Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h4 className="font-semibold text-gray-800">Foundation Phase</h4>
                    <p className="text-gray-600 text-sm">Semiconductor basics, CMOS technology</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-500 text-sm">Month 1-2</p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <p className="text-gray-500 text-sm">Month 3-4</p>
                  </div>
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 pl-8">
                    <h4 className="font-semibold text-gray-800">Advanced Tools</h4>
                    <p className="text-gray-600 text-sm">Cadence Virtuoso, layout techniques</p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h4 className="font-semibold text-gray-800">Project Phase</h4>
                    <p className="text-gray-600 text-sm">Real-world analog circuit layouts</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-500 text-sm">Month 5-6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
