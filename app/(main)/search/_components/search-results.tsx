import { ResultFragment } from "./search-result-components/result-fragment";

interface SearchResultsProps {
    data: any;
}

export const SearchResults = ({ data }: SearchResultsProps) => {
    return (
        <div className="h-full w-full p-3 flex flex-col gap-y-3">
            <ResultFragment title="Top Query" data={data.topQuery} />
            <ResultFragment title="Songs" data={data.songs} />
            <ResultFragment title="Albums" data={data.albums} />
            <ResultFragment title="Artists" data={data.artists} />
            <ResultFragment title="Playlists" data={data.playlists} />
        </div>
    );
}

