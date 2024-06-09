import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
import { XIcon } from "lucide-react"
import { usePlayer } from "@/hooks/usePlayer"

export const ClosePlayer = () => {
  const player = usePlayer();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost"
            onClick={player.cancelPlayback}
          >
            <XIcon className="light:text-muted-foreground" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Close Player</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}