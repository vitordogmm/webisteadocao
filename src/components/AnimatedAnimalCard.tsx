import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useAnimation } from "@/contexts/AnimationContext";

interface Animal {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: string;
  size: string;
  gender: string;
  location: string;
  image: string;
  description: string;
}

interface AnimatedAnimalCardProps {
  animal: Animal;
  index: number;
}

const AnimatedAnimalCard = ({ animal, index }: AnimatedAnimalCardProps) => {
  const { reducedMotion } = useAnimation();
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: reducedMotion ? 0 : index * 0.1
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={!reducedMotion ? "hover" : {}}
    >
      <Card className="overflow-hidden bg-background h-full flex flex-col">
        <CardHeader className="p-0">
          <motion.div
            className="overflow-hidden"
            variants={!reducedMotion ? imageVariants : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img 
              src={animal.image} 
              alt={animal.name} 
              className="w-full h-48 object-cover"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-foreground">{animal.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{animal.breed}</p>
            </div>
            <motion.div
              whileHover={!reducedMotion ? { scale: 1.2 } : {}}
              whileTap={!reducedMotion ? { scale: 0.9 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <span>{animal.age}</span>
              <span className="mx-2">•</span>
              <span>{animal.size}</span>
              <span className="mx-2">•</span>
              <span>{animal.gender}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{animal.location}</span>
            </div>
            <p className="text-sm mt-2 text-foreground">{animal.description}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <motion.div
            variants={!reducedMotion ? buttonVariants : {}}
            whileHover={!reducedMotion ? "hover" : {}}
            whileTap={!reducedMotion ? "tap" : {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full"
          >
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link to={`/animal/${animal.id}`}>Quero Adotar</Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AnimatedAnimalCard;