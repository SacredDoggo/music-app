"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "./_components/sidebar";
import { usePlayer } from "@/hooks/usePlayer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const player = usePlayer();

  return (
    <div className={cn(
      "flex h-full dark:bg-[#1F1F1F]",
      player.song && "pb-[120px]"
    )}>
      <Sidebar />
      <main className="w-full h-full flex-1 overflow-y-auto rounded-t-sm">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;