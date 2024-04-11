import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDownIcon } from "lucide-react";

export const MusicLanguageSelector = () => {
  return (
    <div className="bg-primary/5 dark:bg-background/30 rounded-md">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex text-muted-foreground justify-between w-full" variant="ghost">
            Language <ChevronsUpDownIcon className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <span className="text-xs text-muted-foreground">
            Currently Hindi & English are default, Feature coming soon...
          </span>
        </PopoverContent>
      </Popover>
    </div>
  );
}