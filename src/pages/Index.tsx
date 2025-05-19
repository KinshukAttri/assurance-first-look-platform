
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { SupplyChainJourney } from "@/components/SupplyChainJourney";
import { KpiStrip } from "@/components/KpiStrip";
import { GetStartedChecklist } from "@/components/GetStartedChecklist";
import { SuccessExample } from "@/components/SuccessExample";
import { ResourceFooter } from "@/components/ResourceFooter";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="p-4 sm:p-6 md:p-8 space-y-8">
        <WelcomeBanner />
        <SupplyChainJourney />
        <KpiStrip />
        <GetStartedChecklist />
        <SuccessExample />
      </div>
      <ResourceFooter />
    </div>
  );
};

export default Index;
