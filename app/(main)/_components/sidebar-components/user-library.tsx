"use client";

import { Seperator } from "../../../../components/separator";
import { ListMusicIcon } from "lucide-react";

export const UserLibrary = () => {
  return (
    <div className="h-full bg-primary/5 dark:bg-background/30 rounded-md p-4">
      <div className="flex items-center text-muted-foreground">
        <ListMusicIcon className="h-6 w-6 mr-2" />
        <span className="text-md font-medium text-muted-foreground">Your library</span>
      </div>
      <Seperator />
      <div className="overflow-y-auto">

      </div>
    </div>
  );
}