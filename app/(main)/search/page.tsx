"use client";

import { useState } from "react";
import { SearchBar } from "./_components/searchbar";
import { SearchResults } from "./_components/search-results";

const SearchPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_JIO_SAVAAN_URL;

  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTimeoutId, setSearchTimeoutId] = useState<any>();

  const [result, setResult] = useState();

  const handleChange = (value: string) => {
    const searchValue = value.trim();
    setSearchText(value);
    if (searchValue == searchText.trim()) return;

    clearTimeout(searchTimeoutId);

    setSearchTimeoutId(setTimeout(() => {
      if (searchValue) handleSearch(searchValue)
    }, 700));

  }

  const handleSearch = async (value: string) => {
    setLoading(true);
    const data = await fetch(baseUrl + 'api/search?query=' + value).then(res => res.json());
    if (data.success) setResult(data.data);
    setLoading(false);
  }

  return (
    <div className="flex flex-col w-full">
      <SearchBar handleChange={handleChange} loading={loading} searchText={searchText} />
      {!!result && (
          <SearchResults data={result} />
      )}
    </div>
  );
}

export default SearchPage;