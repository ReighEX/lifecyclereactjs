import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <NewsContextProvider>
        <News />
    </NewsContextProvider>
  );
}

export default App;
