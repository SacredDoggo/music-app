import Image from "next/image";

interface HorizontalCardProps {
    id: string;
    name: string;
    image: string;
    type: string;
    description: string;
    onClick?: (curr: any) => void;
}

export const HorizontalCard = ({
    id,
    name,
    image,
    type,
    description,
    onClick
}: HorizontalCardProps) => {

    return (
        <div
            role="button"
            onClick={onClick}
            className="flex gap-x-4 items-center w-full p-2 bg-secondary rounded-md border-lime-100 border-2"
        >
            <Image src={image as string} alt={name} width={50} height={50} className="rounded-sm shrink-0" />
            <div className="flex flex-col flex-1">
                <span className="truncate text-sm">{name}</span>
                <p className="text-xs text-muted-foreground truncate">{description}</p>
            </div>
        </div>
    );
}