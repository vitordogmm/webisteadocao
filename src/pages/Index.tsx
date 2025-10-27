import AnimatedNavigation from "@/components/AnimatedNavigation";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedStats from "@/components/AnimatedStats";
import AnimatedHowItWorks from "@/components/AnimatedHowItWorks";
import AnimatedCTA from "@/components/AnimatedCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated Orange Particles - Behind content */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-orange-500 opacity-10 animate-pulse"
                style={{
                  width: `${Math.random() * 200 + 30}px`,
                  height: `${Math.random() * 200 + 30}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Floating Orange Orbs - Behind content */}
          <div className="absolute inset-0 z-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="absolute rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-2xl"
                style={{
                  width: `${Math.random() * 150 + 80}px`,
                  height: `${Math.random() * 150 + 80}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 z-10" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        <AnimatedNavigation />
        <AnimatedHero />
        <AnimatedStats />
        <AnimatedHowItWorks />
        <AnimatedCTA />
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.1);
          }
          50% {
            transform: translateY(15px) translateX(-15px) scale(0.9);
          }
          75% {
            transform: translateY(-15px) translateX(25px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;