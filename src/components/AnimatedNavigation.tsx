import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Heart, 
  FileText, 
  User, 
  LogIn, 
  LogOut,
  PawPrint
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAnimation } from "@/contexts/AnimationContext";

const AnimatedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { reducedMotion } = useAnimation();
  
  // Mock user state - in a real app this would come from context or state management
  const isAuthenticated = true;
  const userType = "adopter"; // or "shelter"

  const navItems = [
    { name: "Início", path: "/", icon: Home },
    { name: "Animais", path: "/catalog", icon: PawPrint },
    { name: "Como Adotar", path: "/how-to-adopt", icon: Heart },
    { name: "Para Canis", path: "/for-shelters", icon: Users },
    { name: "Sobre", path: "/about", icon: FileText },
  ];

  const userNavItems = isAuthenticated ? (
    userType === "adopter" ? [
      { name: "Meu Perfil", path: "/adopter-dashboard", icon: User },
    ] : [
      { name: "Painel do Canil", path: "/shelter-dashboard", icon: User },
    ]
  ) : [
    { name: "Entrar", path: "/login", icon: LogIn },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AdotaPet</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.path}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    delay: reducedMotion ? 0 : index * 0.1
                  }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* User Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            {userNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.path}
                  variant={isAuthenticated ? "ghost" : "default"}
                  asChild
                  size="sm"
                >
                  <Link to={item.path}>
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                </Button>
              );
            })}
            {isAuthenticated && (
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <PawPrint className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">AdotaPet</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  <AnimatePresence>
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.path}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileNavItemVariants}
                          transition={{ 
                            duration: 0.3, 
                            ease: "easeOut",
                            delay: reducedMotion ? 0 : index * 0.05
                          }}
                        >
                          <Link
                            to={item.path}
                            className={`px-3 py-2 rounded-md text-base font-medium flex items-center ${
                              isActive(item.path)
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-muted"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-5 w-5 mr-3" />
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                  
                  <div className="border-t my-4 pt-4">
                    {userNavItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.path}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileNavItemVariants}
                          transition={{ 
                            duration: 0.3, 
                            ease: "easeOut",
                            delay: reducedMotion ? 0 : (navItems.length + index) * 0.05
                          }}
                        >
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`px-3 py-2 rounded-md text-base font-medium flex items-center ${
                              isActive(item.path)
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-muted"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-5 w-5 mr-3" />
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                    {isAuthenticated && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileNavItemVariants}
                        transition={{ 
                          duration: 0.3, 
                          ease: "easeOut",
                          delay: reducedMotion ? 0 : (navItems.length + userNavItems.length) * 0.05
                        }}
                      >
                        <Button 
                          variant="outline" 
                          className="w-full mt-2 justify-start"
                          onClick={() => setIsOpen(false)}
                        >
                          <LogOut className="h-5 w-5 mr-3" />
                          Sair
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AnimatedNavigation;