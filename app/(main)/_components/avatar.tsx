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
      height={25}
      width={25}
      className="rounded-full"
    />
  );
};

Avatar.Skeleton = function () {
  return (
    <Skeleton className="h-[30px] w-[30px] rounded-full" />
  );
}