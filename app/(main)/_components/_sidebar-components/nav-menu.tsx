import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HomeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div className="bg-primary/5 dark:bg-background/30 rounded-md">
      <Button 
        className={cn("flex justify-start w-full", pathname !== "/" && "text-muted-foreground")} 
        variant="no_style"
        asChild
      >
        <Link href="/">
        <HomeIcon className="h-4 w-4 mr-2" /> Home
        </Link>
      </Button>
      <Button 
        className={cn("flex justify-start w-full", pathname !== "/search" && "text-muted-foreground")}  
        variant="no_style"
        asChild
      >
        <Link href="/search">
        <SearchIcon className="h-4 w-4 mr-2" /> Search
        </Link>
      </Button>
    </div>
  );
}