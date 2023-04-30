import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("Apple"); // set default search query
  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";

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
