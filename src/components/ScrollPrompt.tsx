
import { ArrowDown } from 'lucide-react';

const ScrollPrompt = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
      <div className="flex flex-col items-center space-y-2 text-cyber-blue">
        <p className="font-mono text-sm tracking-wider opacity-80">
          SCROLL TO EXPLORE
        </p>
        <div className="relative">
          <ArrowDown className="w-6 h-6 animate-bounce" />
          <div className="absolute inset-0 w-6 h-6 border border-cyber-blue rounded-full animate-ping opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default ScrollPrompt;
