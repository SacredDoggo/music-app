import { useConvexAuth } from "convex/react";

export const HomePage = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  return (
    <div className="flex h-full items-center justify-center">
      {isAuthenticated ? "yes" : "no"}
    </div>
  );
}