import { Avatar, Chip } from "@material-ui/core";
import { data } from "cheerio/lib/api/attributes";
import React, { useEffect, useState } from "react";
import { LoadingGif } from "../../asset/svgIcons";
import { BackendImageAdress } from "../../backend/address";
import GetProfileDetailsRequest from "../../backend/User/Profile/getProfileDetails";
import MainAvatar from "../avatar/avatar";

const fontColorItem = "gray";
const fontColorValue = "black";

const BottomBorder = {
  borderBottom: "dotted",
  borderColor: fontColorItem,
  borderWidth: 3,
};

const NameText = {
  fontSize: 22,
  color: fontColorValue,
};

const ItemText = {
  fontSize: 14,
  color: fontColorItem,
};
// fontFamily: "serif",

const ItemValueText = {
  fontWeight: "bold",
  color: fontColorValue,
  maxWidth: 280,
  marginLeft: 16,
  textAlign: "right",
  overflowWrap: "break-word",
};

const ItemWithValue = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "inset",
  borderWidth: 1,
};

const ProfilePreview = () => {
  const [profileDetails, setProfileDetails] = useState("");

  useEffect(() => {
    GetProfileDetailsRequest({
      datacaller: (data) => {
        if (data.error) {
          console.log("error in getting profile details");
        } else {
          setProfileDetails({
            ...data,
            expertise_tags:
              "maghz_va_asab roode dastgahe_govaresh dastgahe_gvaresh dastgahe_garesh dastgahe_gesh",
          });
        }
      },
    });
    //اول اطلاعات پروفايل رو دريافت ميکنيم تو اين کامپوننت
    setProfileDetails({});
  }, []);

  //console.log(profileDetails);

  const CreateExpertisesTags = () => {
    var tags = profileDetails.expertise_tags + "";
    var tagsArray = tags.split(" ");
    console.log(tags);
    console.log(tagsArray);
    if (tagsArray.length === 0) return <div>no tags yet</div>;
    else
      return (
        <div
          style={{
            display: "flex",
            maxWidth: 290,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {tagsArray.map((t) => {
            return (
              <Chip
                key={t}
                onClick={() => {
                  console.log(
                    "tag=> " + t + " must be searched instead of this log"
                  );
                }}
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
        </div>
      );
  };

  const CreateDoctorProfile = () => {
    return (
      <div>
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
            backgroundColor: "white",
            ...BottomBorder,
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: 150,
              ...ItemValueText,
              fontSize: 16,
            }}
          >
            Doctor Details
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 350,
              marginLeft: 32,
              marginRight: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexWrap: "nowrap",
              ...ItemText,
            }}
          >
            <div style={{ ...ItemWithValue }}>
              <div>Degree:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.degree === null ? "N/A" : profileDetails.degree}
              </div>
            </div>
            <div style={{ ...ItemWithValue }}>
              <div>Curriculum vitae:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.cv === null ? "N/A" : profileDetails.cv}
              </div>
            </div>
            <div style={{ ...ItemWithValue }}>
              <div>Office location:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.office_location === null
                  ? "N/A"
                  : profileDetails.office_location}
              </div>
            </div>
            <div style={{ ...ItemWithValue }}>
              <div style={{ alignSelf: "center", paddingBottom: 3 }}>
                Expertises:
              </div>
              <div style={{}}>{CreateExpertisesTags()}</div>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
              width: 150,
              ...ItemValueText,
              fontSize: 16,
            }}
          >
            Documents Photo
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 350,
              marginLeft: 32,
              marginRight: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexWrap: "nowrap",
              ...ItemText,
              ...ItemValueText,
              maxWidth: 350,
              textAlign: "center",
            }}
          >
            {profileDetails.medical_degree_photo === null ? (
              "No Picture Uploaded"
            ) : (
              <img
                src={BackendImageAdress + profileDetails.medical_degree_photo}
                style={{ maxWidth: 350, maxHeight: 350 }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  const CreatePatientProfile = () => {
    return (
      <div>
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
            backgroundColor: "white",
            ...BottomBorder,
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: 150,
              ...ItemValueText,
              fontSize: 16,
            }}
          >
            Patient Details
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 350,
              marginLeft: 32,
              marginRight: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexWrap: "nowrap",
              ...ItemText,
            }}
          >
            <div style={{ ...ItemWithValue }}>
              <div>Height:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.height === null
                  ? "N/A"
                  : profileDetails.height + " cm"}
              </div>
            </div>
            <div style={{ ...ItemWithValue }}>
              <div>Weight:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.weight === null
                  ? "N/A"
                  : profileDetails.weight + " kg"}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: 150,
              ...ItemValueText,
              fontSize: 16,
            }}
          >
            Medical records
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 350,
              marginLeft: 32,
              marginRight: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexWrap: "nowrap",
              ...ItemText,
              ...ItemValueText,
              maxWidth: 350,
              textAlign: "center",
            }}
          >
            {profileDetails.medical_records === null
              ? "No Records"
              : profileDetails.medical_records}
          </div>
        </div>
      </div>
    );
  };

  const CreateProfileDetails = () => {
    switch (profileDetails.is_doctor) {
      case true:
        return CreateDoctorProfile();
      case false:
        return CreatePatientProfile();
    }
  };

  if (profileDetails.username === undefined) {
    return (
      <div>
        <LoadingGif height={100} />
      </div>
    );
  } else
    return (
      <div>
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
            backgroundColor: "white",
            ...BottomBorder,
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginLeft: 16,
            }}
          >
            <Avatar
              src={BackendImageAdress + profileDetails.profile_picture_url}
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div
            style={{
              flex: 1,
              minWidth: 350,
              marginLeft: 32,
              marginRight: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexWrap: "nowrap",
              ...ItemText,
            }}
          >
            <div style={{ ...NameText, ...ItemValueText, alignSelf: "center" }}>
              {profileDetails.fullname === null
                ? "No Full Name"
                : profileDetails.fullname}
            </div>
            <div style={{ ...ItemWithValue }}>
              <div>Username:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.username === null
                  ? "N/A"
                  : profileDetails.username}
              </div>
            </div>
            <div style={{ ...ItemWithValue }}>
              <div>Phone number:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.phone === null ? "N/A" : profileDetails.phone}
              </div>
            </div>
            <div style={{ ...ItemWithValue }}>
              <div>Email:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.email === null ? "N/A" : profileDetails.email}
              </div>
            </div>

            <div style={{ ...ItemWithValue }}>
              <div>Sex:</div>
              <div style={{ ...ItemValueText }}>
                {profileDetails.sex === "M" ? "Male" : ""}
                {profileDetails.sex === "F" ? "Female" : ""}

                {profileDetails.sex === "U" ? "Unsure" : ""}

                {profileDetails.sex === "P" ? "Prefer not to say" : ""}
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "red" }}>{CreateProfileDetails()}</div>
      </div>
    );
};

export default ProfilePreview;
