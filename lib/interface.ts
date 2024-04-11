interface AlbumResponse {
  id: string
  name: string
  year: string
  type: string
  playCount: string
  language: string
  explicitContent: string
  primaryArtistsId: string
  primaryArtists: AlbumArtistResponse[]
  artists: AlbumArtistResponse[]
  featuredArtists: AlbumArtistResponse[]
  songCount: string
  releaseDate: string
  image: DownloadLink[]
  url: string
  songs: SongResponse[]

};

interface SongResponse {
  id: string
  name: string
  type: string
  album: {
    id: string
    name: string
    url: string
  }
  year: string
  releaseDate: string
  duration: string
  label: string
  primaryArtists: string | AlbumArtistResponse[]
  primaryArtistsId: string
  featuredArtists: string | AlbumArtistResponse[]
  featuredArtistsId: string
  explicitContent: string
  playCount: string
  language: string
  hasLyrics: string
  url: string
  copyright: string
  image: DownloadLink[]
  downloadUrl: DownloadLink[]
}

interface AlbumArtistResponse {
  id: string
  name: string
  role: string
  image: DownloadLink[]
  type: string
  url: string
}

interface DownloadLink {
  quality: string;
  link: string;
}