"use client";

import { Sidebar } from "./_components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="w-full flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;