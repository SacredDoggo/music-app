"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";

export const LibraryContent = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) return (
    <div className="flex items-center justify-center h-full">
      <Spinner size="lg" />
    </div>
);

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto">
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
      <p>Library content</p>
    </div>
  );
}