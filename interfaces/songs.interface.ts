interface SongResponse {
    results: Song[];
}

interface Song {
    id: string;
    title: string;
    image: ImageUrl[];
    album: string;
    url: string;
    type: string;
    description: string;
    primaryArtists: string | string[];
    singers: string | string[];
    language: string | string[];
}