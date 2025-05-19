
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Farm, Warehouse, Ship, Customer, Plug } from "lucide-react";

const journeySteps = [
  {
    id: 1,
    name: "Farm",
    icon: Farm,
    example: "Pre-Harvest Inspection Score: 95%",
    description: "Monitor pre-harvest quality and compliance inspections"
  },
  {
    id: 2,
    name: "Warehouse",
    icon: Warehouse,
    example: "Cold Storage Stable at 4°C",
    description: "Track storage conditions and inventory quality"
  },
  {
    id: 3,
    name: "Port",
    icon: Plug,
    example: "Documents Uploaded & Cleared",
    description: "Manage export documentation and compliance"
  },
  {
    id: 4,
    name: "Ship",
    icon: Ship,
    example: "En Route – ETA 5 days",
    description: "Monitor shipment conditions and location tracking"
  },
  {
    id: 5,
    name: "Customer",
    icon: Customer,
    example: "Quality Check Passed – 98% Grade A",
    description: "Verify final quality and compliance checks"
  }
];

export function SupplyChainJourney() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue mb-8">
          Interactive Supply Chain Journey Map
        </h2>
        <p className="text-center text-brand-gray mb-10 max-w-3xl mx-auto">
          Below is a visual representation of your supply chain. Once connected, you'll be able to track quality, compliance, and sustainability at each stage.
        </p>
        
        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          
          {/* Journey Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {journeySteps.map((step, index) => (
              <TooltipProvider key={step.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center w-full md:w-40 group cursor-pointer hover-scale">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4 group-hover:bg-brand-blue-light group-hover:text-brand-blue transition-colors duration-200">
                        <step.icon size={30} />
                      </div>
                      
                      <h3 className="font-medium text-brand-blue mb-2">{step.name}</h3>
                      
                      <div className="p-3 rounded-lg border border-gray-200 w-full text-sm text-center text-gray-500 animate-pulse-slow">
                        Example: {step.example}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="p-3 max-w-xs">
                    <p>{step.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
