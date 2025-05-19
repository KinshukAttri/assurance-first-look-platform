
import { Button } from "@/components/ui/button";

const resources = [
  {
    id: 1,
    title: "Help Center",
    url: "#"
  },
  {
    id: 2,
    title: "2-Minute Video Tour",
    url: "#"
  },
  {
    id: 3,
    title: "Contact Support",
    url: "#"
  },
  {
    id: 4,
    title: "Schedule a Demo",
    url: "#"
  }
];

export function ResourceFooter() {
  return (
    <footer className="w-full py-12 bg-gray-100">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-brand-blue mb-2">
            Resources & Support
          </h2>
          <p className="text-brand-gray">
            We're here to help you get the most out of your Assurance Platform.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {resources.map((resource) => (
            <Button 
              key={resource.id}
              variant="outline"
              className="border-brand-gray text-brand-gray hover:text-brand-blue hover:border-brand-blue"
            >
              {resource.title}
            </Button>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2025 Assurance Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
