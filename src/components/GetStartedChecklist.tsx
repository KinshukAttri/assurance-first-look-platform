
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plug, Leaf, Bell, Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect Data Sources",
    description: "Plug in your inspection forms, IoT devices, or internal APIs.",
    icon: Plug,
    status: "pending" // pending, in-progress, completed
  },
  {
    id: 2,
    title: "Define Quality Benchmarks",
    description: "Tell us what \"Grade A\" means for your products.",
    icon: Check,
    status: "pending"
  },
  {
    id: 3,
    title: "Configure Alerts & Exceptions",
    description: "Get notified if cold chain breaks or compliance is missed.",
    icon: Bell,
    status: "pending"
  },
  {
    id: 4,
    title: "Add Sustainability Goals",
    description: "Track emissions, fair labor practices, and ethical sourcing.",
    icon: Leaf,
    status: "pending"
  }
];

export function GetStartedChecklist() {
  // Calculate progress (0 completed steps out of 4)
  const completedSteps = steps.filter(step => step.status === "completed").length;
  const progress = (completedSteps / steps.length) * 100;
  
  return (
    <div className="w-full py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-2">
            Get Started Checklist
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-6">
            Follow these steps to set up your Assurance Platform and start monitoring your supply chain.
          </p>
          
          <div className="mb-2 flex items-center justify-center gap-4">
            <span className="text-sm text-brand-gray">Progress:</span>
            <div className="w-64">
              <Progress value={progress} className="h-2" />
            </div>
            <span className="text-sm font-medium text-brand-gray">{completedSteps}/{steps.length} Steps Complete</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="border border-gray-200 rounded-lg p-5 flex items-start gap-4 hover:border-brand-blue-light hover:bg-blue-50/30 transition-colors duration-200"
            >
              <div className="mt-1 bg-gray-100 p-2 rounded-lg text-gray-500">
                <step.icon size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-lg text-brand-blue">{step.title}</h3>
                <p className="text-brand-gray mb-4">{step.description}</p>
                <Button 
                  size="sm"
                  className="bg-brand-teal hover:bg-teal-600 text-white"
                >
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
