import AnimatedNavigation from "@/components/AnimatedNavigation";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedStats from "@/components/AnimatedStats";
import AnimatedHowItWorks from "@/components/AnimatedHowItWorks";
import AnimatedCTA from "@/components/AnimatedCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedNavigation />
      <AnimatedHero />
      <AnimatedStats />
      <AnimatedHowItWorks />
      <AnimatedCTA />
    </div>
  );
};

export default Index;