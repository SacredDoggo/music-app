import Image from "next/image";

interface CardProps {
  id: string;
  name: string;
  image: string;
  type: string;
  description: string;
  onClick?: (id: string) => void;
}

export const Card = ({
  id,
  name,
  image,
  type,
  description,
  onClick
}: CardProps) => {

  return (
    <div 
      role="button"
      onClick={() => onClick?.(id)}
      className="flex flex-col items-center min-w-44 max-w-44 p-2 bg-secondary rounded-md border-lime-100 border-2"
    >
      <Image src={image as string} alt={name} width={150} height={150} className="rounded-sm" />
      <span className="truncate text-sm max-w-32">{name}</span>
      <p className="text-xs text-muted-foreground truncate max-w-32">{description}</p>
    </div>
  );
}