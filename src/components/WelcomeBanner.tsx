
import { Button } from "@/components/ui/button";

export function WelcomeBanner() {
  return (
    <div className="w-full py-16 md:py-24 gradient-bg rounded-lg animate-fade-in">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            Welcome to the Assurance Platform
            <span className="block text-xl md:text-2xl lg:text-3xl mt-2 font-medium">
              Your control tower for quality, compliance, and sustainability
            </span>
          </h1>
          
          <p className="text-lg text-brand-gray max-w-3xl mb-8">
            To get started, connect your supply chain and define your inspection & compliance checkpoints.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-blue-700 text-white font-semibold"
            >
              Connect Your Supply Chain
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-blue text-brand-blue hover:bg-blue-50"
            >
              Watch Quick Overview (1 min)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
