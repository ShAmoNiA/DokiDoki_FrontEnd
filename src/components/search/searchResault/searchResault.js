import React, { useEffect, useRef, useState } from "react";
import { LoadingGif } from "../../../asset/svgIcons";
import SignUpRequest from "../../../backend/Guest/SignUp";
import MainAxiosRequest from "../../../backend/MainAxiosRequest";
import useOnScreen from "../../customHook/useOnScreen";

//type = 1,2,3 ==> 1=> search, 2=> advanced, 3 =>category
const SearchResault = ({ type, categories = [], DoSearch = false }) => {
  const [searchBy, setSearchBy] = useState("category");

  const [loading, setLoading] = useState(false);

  const [doctors, setDoctors] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [maxPag, setMaxPage] = useState(1);

  const bottomRef = useRef();
  const reachedBottom = useOnScreen(bottomRef);

  useEffect(() => {
    if (!loading) if (DoSearch) if (reachedBottom) setLoading(true);
  }, [reachedBottom, DoSearch]);

  // چک کردن ورودی ها و دریافت اطلاعات مرتبط از سرور
  useEffect(() => {
    if (DoSearch) {
      setLoading(true);
      if (type === "1") {
        console.log("111111111111");
      } else if (type === "2") {
        console.log("2222222222");
      } else if (type === "3") {
        console.log("33333333333333");

        var joinedCats = categories.join(",");

        MainAxiosRequest()
          .get("search", { params: { tags: joinedCats } })
          .then((e) => {
            setLoading(false);
            setDoctors(Object.values(e.data.doctors));
            setMaxPage(e.data.max_page);
            setCurrentPage(2);
          })
          .catch(() => {
            console.log("error in getting tags resault from server");
            setLoading(false);
          });
      }
    }
  }, [type, categories, DoSearch]);

  console.log(doctors);

  // لود کردن ادامه صفحات
  useEffect(() => {
    if (reachedBottom) {
      if (currentPage !== 1 && currentPage <= maxPag) {
        if (type === "3") {
          var joinedCats = categories.join(",");

          MainAxiosRequest()
            .get("search", { params: { tags: joinedCats, page: currentPage } })
            .then((e) => {
              console.log();
              setLoading(false);
              setDoctors([...doctors, ...Object.values(e.data.doctors)]);
              setCurrentPage(currentPage + 1);
            })
            .catch(() => {
              console.log("error in getting tags resault from server");
              setLoading(false);
            });
        }
      }
    }
  }, [reachedBottom]);

  const CreateLoading = () => {
    if (DoSearch)
      if (currentPage > maxPag) {
        return <div>The End</div>;
      } else if (loading) {
        return (
          <div>
            <LoadingGif height={100} />
          </div>
        );
      } else return <div style={{ height: 100 }} />;
  };

  return (
    <div>
      <div>
        search resault for {type}
        {doctors.map((m) => {
          return (
            <div style={{ height: 150, border: 30 }} key={m.username}>
              {m.username}
            </div>
          );
        })}
      </div>
      <div ref={bottomRef} />
      {CreateLoading()}
    </div>
  );
};

export default SearchResault;
