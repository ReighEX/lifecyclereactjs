import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("Apple"); // set default search query
  const apiKey = "147bf534818043acb04608b4a555a7c5";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-02-28&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [searchQuery]); // watch for changes to searchQuery and update data accordingly

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <NewsContext.Provider value={{ data, handleSearch }}>
      {props.children}
    </NewsContext.Provider>
  );
};
