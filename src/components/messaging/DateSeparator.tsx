import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface DateSeparatorProps {
  date: Date;
}

const DateSeparator = ({ date }: DateSeparatorProps) => {
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Hoje';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Ontem';
    } else {
      return date.toLocaleDateString('pt-BR');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center my-4"
    >
      <Card className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {formatDate(date)}
        </span>
      </Card>
    </motion.div>
  );
};

export default DateSeparator;