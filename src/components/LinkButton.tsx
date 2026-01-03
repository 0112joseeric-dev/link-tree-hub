import { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  featured?: boolean;
  pulse?: boolean;
  delay?: number;
}

const LinkButton = ({ href, icon, label, featured = false, pulse = false, delay = 0 }: LinkButtonProps) => {
  return (
    <div 
      className="relative w-full opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1.5 bg-primary px-3 py-1 rounded-full text-primary-foreground text-xs font-medium animate-sparkle">
            <Sparkles className="w-3 h-3" />
            <span>Mais acessado</span>
          </div>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center w-full bg-card rounded-lg px-6 py-4",
          "transition-all duration-300 ease-out",
          "hover:scale-[1.02] hover:shadow-xl",
          featured ? 'shadow-lg' : 'shadow-md hover:shadow-primary/20',
          pulse && 'animate-[pulse_2s_ease-in-out_infinite]'
        )}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <span className="flex-1 text-center text-card-foreground font-semibold text-lg pr-10">
          {label}
        </span>
      </a>
    </div>
  );
};

export default LinkButton;
