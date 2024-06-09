import { HorizontalCard } from "@/components/card-horizontal";
import { Seperator } from "@/components/separator";
import { usePlayer } from "@/hooks/usePlayer";

interface ResultFragmentProps {
    title: string;
    data: any;
}

export const ResultFragment = ({
    title,
    data
}: ResultFragmentProps) => {
    const player = usePlayer();

    const handleSongCLick = async (id: string, url: string) => {
        const song = await fetch(process.env.NEXT_PUBLIC_JIO_SAVAAN_URL + 'api/songs?ids=' + id)
            .then(res => res.json()).then(data => data.data[0]);
        player.setPlayback(song);
    }

    const handleClick = (currData: any) => {
        if (currData.type == 'song') handleSongCLick(currData.id, currData.url)
    }

    return (
        <div className="flex flex-col">
            <span className="font-semibold text-xl">{title}</span>
            <Seperator />
            <div className="flex flex-col gap-y-2 overflow-x-auto">
                {!!data.results.length ? (
                    data.results.map((curr: any) => (
                        <HorizontalCard
                            key={curr.id}
                            id={curr.id}
                            name={curr.title}
                            image={curr.image[1].url}
                            type={curr.type}
                            description={curr.description}
                            onClick={() => handleClick(curr)}
                        />
                    ))
                ) : (
                    <span>No results found</span>
                )}
            </div>
        </div>
    );
}