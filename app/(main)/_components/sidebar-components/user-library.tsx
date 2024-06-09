"use client";

import { useConvexAuth } from "convex/react";
import { Seperator } from "../../../../components/separator";
import { ListMusicIcon } from "lucide-react";
import { LibraryContent } from "./library-content";

export const UserLibrary = () => {

  return (
    <div className="h-full flex flex-col bg-primary/5 dark:bg-background/30 rounded-md p-4">
      <div className="flex items-center text-muted-foreground">
        <ListMusicIcon className="h-6 w-6 mr-2" />
        <span className="text-md font-medium text-muted-foreground">Your library</span>
      </div>
      <Seperator />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <LibraryContent />
      </div>
    </div>
  );
}