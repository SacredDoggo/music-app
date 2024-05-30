import { ModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import { UserSettings } from "./user-settings";

export const UserOptions = () => {
  const isAuthenticated = false;
  const isLoading = false;
  
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
                Sign up
            </Button>
            <Button
              size="sm"
              asChild
            >
                Login
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