import { useEffect, useState } from "react";
import { Albums } from "./_mainpage-components/albums";
import { ModulesResponse } from "@/interfaces/modules.interface";

export const HomePage = () => {
  const [homePageData, setHomePageData] = useState<ModulesResponse>();

  useEffect(() => {
    if (!homePageData) {
      const handleDataFetch = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_JIO_SAVAAN_URL}/modules?language=hindi,english`).then((res) => res.json());
        setHomePageData(data.data);        
      }
      handleDataFetch();
    }
  }, []);

  if (!homePageData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Albums data={homePageData.albums} />
    </div>
  );
}