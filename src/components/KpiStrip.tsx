
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const kpis = [
  {
    title: "Shipment Value",
    value: "€5.2M",
    description: "Example Shipment Total",
    tooltip: "Track the total value of goods in your supply chain"
  },
  {
    title: "Spoilage Losses",
    value: "€50K",
    description: "Example Quality Losses",
    tooltip: "Monitor and prevent quality-related losses"
  },
  {
    title: "Inspection Costs",
    value: "€15K",
    description: "Sample QA Expense",
    tooltip: "Track quality assurance and compliance costs"
  },
  {
    title: "On-Time Delivery",
    value: "95%",
    description: "Example SLA Metric",
    tooltip: "Monitor delivery performance against SLAs"
  }
];

export function KpiStrip() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue mb-2">
          Key Performance Indicators
        </h2>
        <p className="text-center text-brand-gray mb-10 max-w-3xl mx-auto">
          Live data will appear here once devices and data sources are connected.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="card-shadow bg-white hover:border-brand-blue-light cursor-help">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-brand-gray">
                        {kpi.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-brand-blue">{kpi.value}</p>
                      <p className="text-sm text-gray-400">{kpi.description}</p>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="p-3 max-w-xs">
                  <p>{kpi.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
}
