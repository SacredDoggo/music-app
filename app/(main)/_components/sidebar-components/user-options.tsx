import { ModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import { UserSettings } from "./user-settings";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

export const UserOptions = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="p-2 rounded-md bg-primary/5 dark:bg-background/30 flex justify-between items-center">
      <div className="flex gap-x-2 items-center">
        {isLoading && (
          <UserSettings.Skeleton />
        )}
        {!isLoading && !isAuthenticated && (
          <>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <SignUpButton mode="modal">
                Sign up
              </SignUpButton>
            </Button>
            <Button
              size="sm"
              asChild
            >
              <SignInButton mode="modal">
                Login
              </SignInButton>
            </Button>
          </>
        )}
        {!isLoading && isAuthenticated && (
          <UserSettings />
        )}
      </div>
      <ModeToggle />
    </div>
  );
}