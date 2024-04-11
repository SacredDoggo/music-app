import { Card } from "@/components/card";
import { Seperator } from "@/components/separator";
import { useRouter } from "next/navigation";


interface AlbumProps {
  data: AlbumResponse[];
}

export const Albums = ({ data }: AlbumProps) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    console.log(id);    
  }

  return (
    <div className="bg-primary/5 dark:bg-background/30 rounded-md p-2 m-2">
      <h3 className="text-xl font-semibold pl-2">Albums</h3>
      <Seperator />
      <div className="flex gap-x-2 overflow-x-auto">
        {data.map((album) => (
          <Card
            key={album.id}
            onClick={handleClick}
            id={album.id}
            name={album.name}
            image={album.image[2].link}
            description={album.primaryArtists.length > 0 ? album.primaryArtists : album.artists}
          />
        ))}
      </div>
    </div>
  );
}