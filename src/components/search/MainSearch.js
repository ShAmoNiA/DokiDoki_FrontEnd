import React, { useEffect, useRef, useState } from "react";
import CategorySelecter from "./category/categorySelecter";
import { Tabs } from "antd";
import SearchResault from "./searchResault/searchResault";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const tabs = { search: "1", advanced: "2", tag: "3" };

const tabsname = { 1: "Search", 2: "AdvancedSearch", 3: "Tags" };

const SearchBaseUrl = "/search";

const MainSearch = ({ active = "search" }) => {
  const [activePart, setActivePart] = useState(tabs[active]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [DoSearch, setDoSearch] = useState(false);

  const [searchedText, setSearchedText] = useState("");

  const history = useHistory();

  // چک کردن ادرس و لود کردن تب ها
  useEffect(() => {
    var path = history.location.pathname;

    var pathes = path.split("/");

    var searchtype = pathes[2];

    if (
      searchtype !== tabsname[1] &&
      searchtype !== tabsname[2] &&
      searchtype !== tabsname[3]
    )
      history.replace(SearchBaseUrl + "/Search");
    else if (searchtype === tabsname[1]) setActivePart(tabs.search);
    else if (searchtype === tabsname[2]) setActivePart(tabs.advanced);
    else if (searchtype === tabsname[3]) {
      var targettag = pathes[3];
      if (targettag !== undefined) {
        setSelectedCategories([...selectedCategories, targettag]);
        setDoSearch(true);
      }
      setActivePart(tabs.tag);
    }
  }, []);

  // dosearch
  // برای نمایش نتایج سرچ استفاده میشه
  // اینجا بررسی میشه که الان وقت نشون دادن نتایج هست یا نه
  useEffect(() => {
    if (activePart === tabs.tag)
      if (selectedCategories.length === 0) setDoSearch(false);
      else setDoSearch(true);

    if (activePart === tabs.search)
      if (searchedText !== "") setDoSearch(true);
      else setDoSearch(false);
  }, [selectedCategories, searchedText, activePart]);

  const CreateCommenSearch = () => {
    return (
      <div>
        <SearchBar
          placeholder="Search on username, name, etc."
          setSearchedText={setSearchedText}
        />
      </div>
    );
  };

  const CreateAdvancedSearch = () => {
    return <div>advanced</div>;
  };

  const CreateCategorySearch = () => {
    return (
      <div>
        <CategorySelecter
          setSelectedTags={setSelectedCategories}
          selectedTags={selectedCategories}
        />
      </div>
    );
  };

  const CreateTabs = () => {
    return (
      <Tabs
        onChange={(tabkey) => {
          if (activePart !== tabkey) setActivePart(tabkey);
          //باید اطلاعات سرچ رو تغییر بدیم
          setSelectedCategories([]);
          setSearchedText("");
          setDoSearch(false);
          history.push(SearchBaseUrl + "/" + tabsname[tabkey]);
        }}
        activeKey={activePart}
        centered
      >
        <Tabs.TabPane tab={<span>Search</span>} key={tabs.search}>
          {CreateCommenSearch()}
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Advanced</span>} key={tabs.advanced}>
          {CreateAdvancedSearch()}
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Category</span>} key={tabs.tag}>
          {CreateCategorySearch()}
        </Tabs.TabPane>
      </Tabs>
    );
  };

  return (
    <div
      style={{
        background: "white",
        width: "100%",
        minWidth: "100%",
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {CreateTabs()}

      <SearchResault
        type={activePart}
        categories={selectedCategories}
        DoSearch={DoSearch}
        searchedText={searchedText}
      />
    </div>
  );
};

export default MainSearch;
