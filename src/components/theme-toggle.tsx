import { motion } from "framer-motion";
import { Moon, Sun, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useAnimation } from "@/contexts/AnimationContext";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { reducedMotion } = useAnimation();

  const toggleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  const iconVariants = {
    light: { rotate: 0 },
    dark: { rotate: 30 }
  };

  return (
    <div className="relative">
      {/* Decorative paw prints */}
      <motion.div
        className="absolute -top-2 -left-2 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        <PawPrint className="w-4 h-4 text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute -bottom-1 -right-1 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
      >
        <PawPrint className="w-3 h-3 text-primary" />
      </motion.div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
            variants={!reducedMotion ? toggleVariants : {}}
            initial="initial"
            animate="animate"
            whileHover={!reducedMotion ? "hover" : {}}
            whileTap={!reducedMotion ? "tap" : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button variant="outline" size="icon" className="relative">
              <motion.div
                animate={theme === "dark" ? "dark" : "light"}
                variants={!reducedMotion ? iconVariants : {}}
                transition={{ duration: 0.3 }}
                className="relative w-5 h-5"
              >
                <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </motion.div>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}