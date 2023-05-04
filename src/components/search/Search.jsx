import React, { useEffect, useState } from "react";
import { SearchBar } from "./searchBar/SearchBar";
import "./Search.css";
import { SearchList } from "./searchList/SearchList";
import axios from "axios";
import Loader from "../loader/Loader";
import { Header } from "../Header/Header";
import { LocalSearch } from "../localSearch/LocalSearch";

export const Search = () => {
  const localMobileList = [
    {
      original_title: "Samsung Galaxy S23 Ultra 5G",
      backdrop_path:
        "https://www.91-img.com/pictures/148752-v5-samsung-galaxy-s23-ultra-5g-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "Apple iPhone 14 Pro Max",
      backdrop_path:
        "https://www.91-img.com/pictures/146919-v6-apple-iphone-14-pro-max-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "vivo X90 Pro",
      backdrop_path:
        "https://www.91-img.com/pictures/150378-v5-vivo-x90-pro-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "Xiaomi 13 Pro",
      backdrop_path:
        "https://www.91-img.com/pictures/150934-v4-xiaomi-13-pro-mobile-phone-large-1.jpg",
    },
    {
      original_title: "Google Pixel 7 Pro 5Gur",
      backdrop_path:
        "https://www.91-img.com/pictures/149292-v6-google-pixel-7-pro-5g-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "Apple iPhone 15 Pro Max",
      backdrop_path:
        "https://www.91-img.com/pictures/148162-v1-apple-iphone-15-pro-max-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "OnePlus 11 Pro",
      backdrop_path:
        "https://www.91-img.com/pictures/148195-v1-oneplus-11-pro-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "OPPO Find X6 Pro",
      backdrop_path:
        "https://www.91-img.com/pictures/152613-v2-oppo-find-x6-pro-mobile-phone-large-1.jpg?tr=q-80",
    },
    {
      original_title: "vivo X90 Pro Plus",
      backdrop_path:
        "https://www.91-img.com/pictures/150360-v5-vivo-x90-pro-plus-mobile-phone-large-1.jpg?tr=q-80",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [defaultMovieList, setDefaultMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle change for search input
  const handleChange = (event) => {
    setSearchInput(event.target.value);
    if (window.location.pathname === "/local") {
      const localMobileList = defaultMovieList.filter((item) => {
        return item.original_title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setSearchResults(localMobileList);
    }
  };

  // api url for movies
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

  // fetch movie list by using axios
  const movieList = async () => {
    try {
      const response = await axios(API_URL, {
        params: { query: searchInput },
      });
      setSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // show  default movielist for homepage and when tapping on close button
  const defaultList = async () => {
    const defaultList = await axios(API_URL, {
      params: { query: "malayalam" },
    });

    setDefaultMovieList(defaultList.data.results);
  };

  // for fetching default movie List
  useEffect(() => {
    if (window.location.pathname === "/local") {
      setDefaultMovieList(localMobileList);
    } else {
      defaultList();
    }
  }, []);

  // for fetching movies by search input and also debouncing for inputs
  if (window.location.pathname !== "/local") {
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (searchInput) {
          setLoading(true);
          movieList();
        }
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }, [searchInput]);
  }

  // display defaults and search results of movies
  const displaySearchList =
    searchInput.length !== 0 ? (
      searchResults.length === 0 ? (
        <>{!loading && <h2 style={{ textAlign: "center" }}>Nothing Here</h2>}</>
      ) : (
        searchResults?.map((item, id) => {
          return <SearchList item={item} key={id} />;
        })
      )
    ) : (
      defaultMovieList?.map((item, id) => {
        return <SearchList item={item} key={id} />;
      })
    );

  return (
    <>
      <Header />
      <div className="search-container">
        <SearchBar
          setLoading={setLoading}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleChange={handleChange}
        />
        {/* <div className="search-list-container">{displayListOfMovies}</div> */}

        {loading ? (
          <Loader />
        ) : (
          <div className="search-list-container">{displaySearchList}</div>
        )}
      </div>
    </>
  );
};
