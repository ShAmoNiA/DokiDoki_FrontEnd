import { Select, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { CloseIcon, MoreUpDown, SickIcon } from "../../../asset/svgIcons";
import GetAllTagsRequest from "../../../backend/Guest/Search/GetAllTags";
import { MainColors } from "../../../config";

const CategorySelecter = ({ setSelectedTags, selectedTags }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAllTagsRequest({
      datacaller: (data) => {
        if (data.error) {
          console.log("error in getting all tags from server");
        } else {
          var tags = data + "";
          var tagsArray = tags.split(" ");

          var mappedArray = tagsArray.map((t) => {
            return { value: t, lable: t };
          });

          setCategories(mappedArray);
        }
      },
    });
  }, []);

  return (
    <div style={{ width: "100%", minWidth: 200 }}>
      <Select
        onChange={(newValue) => {
          setSelectedTags(newValue);
        }}
        options={categories}
        mode="multiple"
        value={selectedTags}
        style={{ width: "100%" }}
        placeholder="Click to select or type for Tags"
        listHeight={100}
        maxTagCount="responsive"
        tagRender={({ label, onClose }) => {
          const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
          };
          return (
            <Tag
              icon={<CloseIcon onclick={onClose} size={15} marginright={3} />}
              color="purple"
              onMouseDown={onPreventMouseDown}
            >
              {label}
            </Tag>
          );
        }}
      />
    </div>
  );
};

export default CategorySelecter;
