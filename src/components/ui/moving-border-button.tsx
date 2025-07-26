import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface MovingBorderButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "accent" | "golden";
}

export const MovingBorderButton = ({ 
  children, 
  className, 
  onClick,
  variant = "default" 
}: MovingBorderButtonProps) => {
  const variantClasses = {
    default: "moving-border bg-background text-primary hover:text-accent-foreground",
    accent: "moving-border bg-background text-accent hover:text-accent-foreground",
    golden: "moving-border bg-background text-golden hover:text-golden-foreground"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Button>
  );
};