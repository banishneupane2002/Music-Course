"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface FocusCardProps {
  children: React.ReactNode;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FocusCard = React.memo(
  ({ children, index, hovered, setHovered }: FocusCardProps) => {
    const isHovered = hovered === index;
    const isAnotherCardHovered =
      hovered !== null && hovered !== index;

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative transition-all duration-300 ease-out",
          isAnotherCardHovered && "blur-sm scale-[0.98]",
          isHovered && "scale-[1.02]"
        )}
      >
        {children}
      </div>
    );
  }
);

FocusCard.displayName = "FocusCard";

interface FocusCardsProps {
  children: React.ReactNode;
}

export function FocusCards({ children }: FocusCardsProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const cards = React.Children.toArray(children);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
      {cards.map((card, index) => (
        
          
        
        <FocusCard
          key={index}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        >
          {card}

        </FocusCard>
        
      ))}
    </div>
  );
}

FocusCards.displayName = "FocusCards";