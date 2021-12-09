import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { MainColors } from "../../config";

function SearchBar({ placeholder, data, setSearchedText }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    //const newFilter = data.filter((value) => {
    //  return value.title.toLowerCase().includes(searchWord.toLowerCase());
    //});

    // (searchWord === "") {
    //  setFilteredData([]);
    //} else {
    //  setFilteredData(newFilter);
    //}
  };

  const handleKeyDown = (event) => {
    const searchWord = event.target.value;

    if (event.key === "Enter") {
      setSearchedText(searchWord);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div
        className="searchInputs"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            border: "solid",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 20,
            overflow: "auto",
            borderColor: MainColors.BoldBluePrimaryBorder,
          }}
        >
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onKeyDown={handleKeyDown}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon style={{ color: "gray" }} />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
