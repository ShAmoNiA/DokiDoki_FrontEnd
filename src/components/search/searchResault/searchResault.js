import React, { useEffect, useRef, useState } from "react";
import { LoadingGif } from "../../../asset/svgIcons";
import { BackendImageAdress } from "../../../backend/address";
import SignUpRequest from "../../../backend/Guest/SignUp";
import MainAxiosRequest from "../../../backend/MainAxiosRequest";
import useOnScreen from "../../customHook/useOnScreen";
import MainDoctorCard from "../../doc_card/card";
import ProfilePreview from "../../profile/profilePreview";

//type = 1,2,3 ==> 1=> search, 2=> advanced, 3 =>category
const SearchResault = ({
  type,
  categories = [],
  DoSearch = false,
  searchedText = "",
}) => {
  const [loading, setLoading] = useState(false);

  const [doctors, setDoctors] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [maxPag, setMaxPage] = useState(1);

  const [selectedProfileUsername, setSelectedProfileUsername] = useState("");

  const bottomRef = useRef();
  const reachedBottom = useOnScreen(bottomRef);

  useEffect(() => {
    if (!loading) if (DoSearch) if (reachedBottom) setLoading(true);
  }, [reachedBottom, DoSearch]);

  useEffect(() => {
    setDoctors([]);
    setCurrentPage(1);
    setMaxPage(1);
  }, [type]);

  // چک کردن ورودی ها و دریافت اطلاعات مرتبط از سرور
  useEffect(() => {
    if (DoSearch) {
      setDoctors([]);
      setLoading(true);
      if (type === "1") {
        console.log("111111111111");

        MainAxiosRequest()
          .get("search", { params: { name: searchedText } })
          .then((e) => {
            setLoading(false);
            setDoctors(Object.values(e.data.doctors));
            setMaxPage(e.data.max_page);
            setCurrentPage(2);
          })
          .catch(() => {
            console.log("error in getting search resault from server");
            setLoading(false);
            setDoctors([]);
          });
      } else if (type === "2") {
        console.log("2222222222");
      } else if (type === "3" && categories.length !== 0) {
        console.log("heree");

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
            setDoctors([]);
          });
      }
    }
  }, [type, categories, DoSearch, searchedText]);

  // لود کردن ادامه صفحات
  useEffect(() => {
    if (reachedBottom) {
      if (DoSearch)
        if (currentPage !== 1 && currentPage <= maxPag) {
          if (type === "1") {
            MainAxiosRequest()
              .get("search", {
                params: { name: searchedText, page: currentPage },
              })
              .then((e) => {
                setLoading(false);
                setDoctors([...doctors, ...Object.values(e.data.doctors)]);
                setCurrentPage(currentPage + 1);
              })
              .catch(() => {
                console.log("error in getting search resault from server");
                setLoading(false);
              });
          }
          if (type === "3") {
            var joinedCats = categories.join(",");

            MainAxiosRequest()
              .get("search", {
                params: { tags: joinedCats, page: currentPage },
              })
              .then((e) => {
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
        return (
          <div style={{ fontSize: 22, textAlign: "center", padding: 25 }}>
            The End. Reached all!
          </div>
        );
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
      search resault for {type}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {doctors.map((m) => {
          return (
            <div key={m.username} style={{ margin: 8 }}>
              <MainDoctorCard
                key={m.username}
                title={m.username}
                location={m.office_location}
                sex={m.sex}
                Specialty={m.expertise_tags}
                imageUrl={BackendImageAdress + m.profile_picture_url}
                openModal={setSelectedProfileUsername}
              />
            </div>
          );
        })}
      </div>
      <div ref={bottomRef} />
      {CreateLoading()}
      <ProfilePreview
        username={selectedProfileUsername}
        setUsername={setSelectedProfileUsername}
      />
    </div>
  );
};

export default SearchResault;
