
"use client";
import { LogOutIcon, Settings2Icon } from "lucide-react";
import { SignOutButton, useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

import { Avatar } from "./avatar";

import { useUserProfile } from "@/hooks/use-user-profile";


export const UserSettings = () => {
  const { user } = useUser();

  const userProfile = useUserProfile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="no_style" size="sm">
          <Avatar imageUrl={user?.hasImage ? user.imageUrl : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.winhelponline.com%2Fblog%2Freplace-default-user-account-picture-avatar-windows-10%2F&psig=AOvVaw2zoo-aqBt2N-_qago8XRXm&ust=1708672510457000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICKqqKzvoQDFQAAAAAdAAAAABAE"} />
          <span className="ml-2">{user?.fullName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="start"
        alignOffset={60}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={userProfile.onOpen}>
          <Settings2Icon className="h-4 w-4 mr-2" />Manage account
        </DropdownMenuItem>
        <SignOutButton>
          <DropdownMenuItem>
            <LogOutIcon className="h-4 w-4 mr-2" />Logout
          </DropdownMenuItem>
        </SignOutButton>
        <DropdownMenuSeparator />
        <span className="text-xs text-muted-foreground">Last login: {user?.lastSignInAt?.toDateString() }</span>
      </DropdownMenuContent>
    </DropdownMenu>

  );
};

UserSettings.Skeleton = function () {
  return (
    <Button variant="no_style" className="flex items-center gap-x-2">
      <Avatar.Skeleton />
      <Skeleton className="h-4 w-32 " />
    </Button>
  );
}