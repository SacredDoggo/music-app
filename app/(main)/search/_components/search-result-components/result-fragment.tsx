import { Card } from "@/components/card";
import { Seperator } from "@/components/separator";

interface ResultFragmentProps {
    title: string;
    data: any;
}

export const ResultFragment = ({
    title,
    data
}: ResultFragmentProps) => {
    return (
        <div className="flex flex-col">
            <span className="font-semibold text-xl">{title}</span>
            <Seperator />
            <div className="flex gap-x-2 overflow-x-auto">
                {data.results.map((curr: any) => (
                    <Card
                        key={curr.id}
                        id={curr.id}
                        name={curr.title}
                        image={curr.image[2].url}
                        description={curr.description}
                    />
                ))}
            </div>
        </div>
    );
}