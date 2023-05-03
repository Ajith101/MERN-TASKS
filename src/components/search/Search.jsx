import React, { useEffect, useState } from "react";
import { SearchBar } from "./searchBar/SearchBar";
import "./Search.css";
import { SearchList } from "./searchList/SearchList";
// import { axios } from "axios";
import axios from "axios";

export const Search = () => {
  const [searchInput, setSearchInput] = useState({ searchValue: "" });
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchInput((pre) => ({ ...pre, [name]: value }));
  };
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

  const fetchDatas = async () => {
    const response = await axios(API_URL, { params: { query: searchInput } });
    // setSearchResults(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <>
      <div className="search-container">
        <SearchBar handleChange={handleChange} />
        <SearchList />
      </div>
    </>
  );
};
