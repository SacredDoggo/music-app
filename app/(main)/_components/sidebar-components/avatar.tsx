import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

interface AvatarProps {
  imageUrl: string;
}

export const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <Image
      src={imageUrl}
      alt="user image"
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};

Avatar.Skeleton = function AvatarSkeleton() {
  return (
    <Skeleton className="h-[30px] w-[30px] rounded-full bg-primary/10" />
  );
}