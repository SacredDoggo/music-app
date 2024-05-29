import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
    handleChange: (value: string) => void;
    loading: boolean;
    searchText: string;
}

export const SearchBar = ({
    handleChange,
    loading,
    searchText
}: SearchBarProps) => {
    return (
        <div className="flex items-center p-3 relative">
            {loading ? (
                <Spinner className="absolute ml-2 h-5 w-5" />
            ) : (
                <SearchIcon className="absolute ml-2 h-5 w-5 text-muted-foreground" />
            )}
            <Input
                className="px-8 w-full focus-visible:ring-transparent bg-secondary text-ellipsis"
                onChange={(e) => handleChange(e.target.value)}
                value={searchText}
                placeholder="Search for songs, albums, artists & playlists"
            />
        </div>
    );
}