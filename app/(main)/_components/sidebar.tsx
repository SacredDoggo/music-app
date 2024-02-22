import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

import { ModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";

import { UserOptions } from "./user-options";

export const Sidebar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();
  return (
    <>
      <aside className="left p-2 w-[420px] relative flex flex-col h-full overflow-y-auto">
        <div className="pb-2 border-b-2 flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            {isLoading && (
              <UserOptions.Skeleton />
            )}
            {!isLoading && !isAuthenticated && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <SignUpButton
                    mode="modal"
                    afterSignUpUrl="/"
                  >
                    Sign up
                  </SignUpButton>
                </Button>
                <Button
                  size="sm"
                  asChild
                >
                  <SignInButton
                    mode="modal"
                    afterSignInUrl="/"
                  >
                    Login
                  </SignInButton>
                </Button>
              </>
            )}
            {!isLoading && isAuthenticated && (
              <UserOptions />
            )}
          </div>
          <ModeToggle />
        </div>
      </aside>
      <div className="h-full w-1 bg-primary/10 dark:bg-secondary" />
    </>
  );
}