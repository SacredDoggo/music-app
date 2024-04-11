import { cn } from "@/lib/utils";

interface SeperatorProps {
  className?: string;
}

export const Seperator = ({ className }: SeperatorProps) => {
  return (
    <div className={cn("h-0.5 w-full bg-primary/5 dark:bg-secondary my-2", className)} />
  );
}