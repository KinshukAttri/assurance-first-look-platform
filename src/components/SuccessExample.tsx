
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SuccessExample() {
  return (
    <div className="w-full py-12 bg-brand-blue/5">
      <div className="container max-w-4xl mx-auto px-4">
        <Card className="border-0 shadow-lg p-2">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl text-green-600">32%</span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-brand-blue mb-2">Success Story</h3>
                <p className="text-lg text-brand-gray mb-4">
                  "One client reduced spoilage by 32% in just 6 months using our AI inspection tool."
                </p>
                <Button variant="link" className="text-brand-teal p-0 h-auto">
                  See how they did it →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
