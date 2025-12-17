import DeFiBarrierSection from "@/app/components/home/DeFiBarrierSection";
import FoundingMemberSection from "@/app/components/home/FoundingMemberSection";
import TreasuryFirst from "@/app/components/home/TreasuryFirst";
import ZestafiFooter from "@/app/components/home/ZestafiFooter";
import ZestafiHeader from "@/app/components/home/ZestafiHeader";
import ZestAFIHero from "@/app/components/home/ZestAFIHero";
import ZestafiSolution from "@/app/components/home/ZestafiSolution";

const HomePage = () => {
  return (
    <div>
      <ZestafiHeader />
      <ZestAFIHero />
      <DeFiBarrierSection />
      <ZestafiSolution />
      <FoundingMemberSection />
      <TreasuryFirst/>
      <ZestafiFooter />
    </div>
  );
};

export default HomePage;
