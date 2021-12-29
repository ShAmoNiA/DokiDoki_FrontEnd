import { Chip } from "@material-ui/core";
import { Button, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import GetAllTagsRequest from "../../backend/Guest/Search/GetAllTags";
import AddExpertiseRequest from "../../backend/User/addExpertise";
import GetProfileDetailsRequest from "../../backend/User/Profile/getProfileDetails";
import UploadImageRequest from "../../backend/User/uploadImage";
import { MainColors } from "../../config";

const MainAddTag = () => {
  const [tags, setTags] = useState([]);
  const [AllTags, setAllTags] = useState([]);

  const [imageSrc, setImageSrc] = useState("");

  const [modalStatus, setModalStatus] = useState(false);

  const [selectedTag, setSelectedTag] = useState("");

  const [reload, setReload] = useState("");

  useEffect(() => {
    GetProfileDetailsRequest({
      datacaller: ({ expertise_tags }) => {
        var v = expertise_tags + "";

        var vv = v.split(" ");

        if (vv.length === 1) {
          if (vv[0] === "") setTags([]);
        } else setTags(vv);

        GetAllTagsRequest({
          datacaller: (alls) => {
            var alltags = alls.split(" ");

            var alltagss = alltags.filter((f) => {
              if (v.includes(f)) return false;
              else return true;
            });

            var mappedArray = alltagss.map((t) => {
              return { value: t, lable: t };
            });

            setAllTags(mappedArray);

            console.log(alltagss);
          },
        });
      },
    });
  }, [reload]);

  const HandleChageImage = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
      if (file.type === "image/jpeg" || file.type === "image/png") {
        let imageDataUrl = await readFile(file);
        setImageSrc(imageDataUrl);
      } else {
        console.log("error only png and jpg supported");
      }
    } else {
      console.log("error choose a file please");
    }
  };

  const UploadImage = () => {
    UploadImageRequest({
      image: imageSrc,
      datacaller: ({ image_url }) => {
        AddExpertiseRequest({
          url: image_url,
          tag: selectedTag,
          datacaller: (data) => {
            console.log(data);
            if (data.success) {
              setImageSrc("");
              setSelectedTag("");
              setReload(!reload);
              setModalStatus(false);
            } else {
              console.log("error in adding tag");
            }
          },
        });
      },
    });
  };

  const Disabled = () => {
    if (imageSrc === "" || selectedTag === "") {
      console.log(imageSrc);
      console.log(selectedTag);
      return true;
    }
    return false;
  };

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div style={{ backgroundColor: MainColors.white, width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <div style={{ fontSize: 18 }}>
          Tag List: {tags.length === 0 ? "You have no Tags!" : ""}
        </div>
        <Button
          onClick={() => {
            setModalStatus(true);
          }}
        >
          Add Tag
        </Button>
      </div>
      {tags.map((t) => {
        return (
          <Chip
            key={t}
            variant="outlined"
            color="primary"
            size="small"
            label={t.replaceAll("_", " ")}
            style={{
              fontSize: 12,
              marginLeft: 8,
              marginTop: 8,
              marginBottom: 4,
              height: 16,
            }}
          />
        );
      })}

      <Modal
        footer={null}
        onCancel={() => {
          setModalStatus(false);
        }}
        width={750}
        visible={modalStatus}
        maskClosable={false}
        centered
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 24,
          }}
        >
          <Select
            style={{ width: 150, margin: 16 }}
            onChange={(e) => {
              setSelectedTag(e);
            }}
            options={AllTags}
            defaultValue="Choose a Tag"
          ></Select>

          {modalStatus ? (
            <>
              <input
                style={{ margin: 16 }}
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={HandleChageImage}
              />

              <Button
                onClick={UploadImage}
                disabled={Disabled()}
                style={{ margin: 16 }}
              >
                ADD
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MainAddTag;
