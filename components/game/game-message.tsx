"use client";

import { cn } from "@/lib/utils";

interface GameMessageProps {
  message: string;
  showPassword: boolean;
}

export function GameMessage({ message, showPassword }: GameMessageProps) {
  if (!message) return null;
  
  return (
    <div 
      className={cn(
        "text-center text-lg font-medium p-4 rounded-lg animate-fade-in",
        showPassword ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
      )}
    >
      {message}
    </div>
  );
}