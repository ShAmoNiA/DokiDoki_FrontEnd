import {
  Avatar,
  colors,
  IconButton,
  Slider,
  Tooltip,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Cropper from "react-easy-crop";
import { Redirect } from "react-router";
import { CameraIcon, LoadingGif, RotatePicture } from "../../asset/svgIcons";
import EditProfilePictureRequest from "../../backend/User/Profile/editProfilePicture";
import GetProfilePictureRequest from "../../backend/User/Profile/getProfilePicture";
import UploadImageRequest from "../../backend/User/uploadImage";
import { MainColors } from "../../config";
import getCroppedImg from "./getOutPut";

const bottomOptionsHeight = 70;

const avatarZoomOptions = { min: 1, max: 3, step: 0.25 };

const MainAvatar = ({ style, size, avatarupdated }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const [imageSrc, setImageSrc] = useState("");

  const [zoom, setZoom] = useState(1);

  const [rotate, setRotate] = useState(0);

  const [activePart, setActivePart] = useState("avatar");

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [reloadProfilePicture, setReloadProfilePicture] = useState(0);

  const [profilePicture, setProfilePicture] = useState("");

  //نتيجه نهايي به صورت
  //blob
  // لينکش تو اين متغير ذخيره ميشه
  const [croppedImage, setCroppedImage] = useState(null);

  useEffect(() => {
    if (croppedImage !== null) {
      setActivePart("loading");

      UploadImageRequest({
        image: croppedImage,
        datacaller: GetImageUrlFromServer,
      });
    }
  }, [croppedImage]);

  useEffect(() => {
    GetProfilePictureRequest({ datacaller: GetPrfolePictureFromServer });
  }, [reloadProfilePicture]);

  const GetImageUrlFromServer = ({ image_url, error }) => {
    if (error) {
      console.log("error in sending picture to server");
      setActivePart("avatar");
      //ارور هندل نداریم. فعلا بر میگردیم به عقب
    } else {
      setActivePart("loading");

      // اینجا باید به سرور پاس بدیم
      // اطلاعاتی که میگیریم رو و پروفایل رو تعییر بدیم
      // بعد از تغییر عکس پروفایل
      // لودینگ رو تموم میکنیم
      // و به بخش
      // avatar
      // تغییر میدیم
      // و تصویر اواتار رو عوض میکنیم
      // در شروع باید یک عکس پروفایل بگیریم
      EditProfilePictureRequest({
        profile_picture_url: image_url,
        datacaller: GetEditProfilePictureResponseFromServer,
      });
    }
  };

  const GetEditProfilePictureResponseFromServer = (data) => {
    if (data.error) {
      console.log("error in changing profile url");
      setActivePart("avatar");
      //ارور هندل نداریم. فعلا بر میگردیم به عقب
    } else {
      setReloadProfilePicture(reloadProfilePicture + 1);
      setActivePart("avatar");
      avatarupdated();
    }
  };

  const GetPrfolePictureFromServer = (data) => {
    if (data.error) {
      console.log("error in getting prfoile picture from server");
      setActivePart("avatar");
      //ارور هندل نداریم. فعلا بر میگردیم به عقب
    } else {
      setProfilePicture(data);
    }
  };

  //listener
  //براي انتخاب تصوير و تبديل وضعيت به حالت اديت
  const handleImageChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "image/jpeg" || file.type === "image/png") {
        let imageDataUrl = await readFile(file);
        setImageSrc(imageDataUrl);
        setActivePart("edit");
      } else {
        console.log("error only png and jpg supported");
      }
    } else {
      console.log("error choose a file please");
    }
  };

  //خواندن فايل  و تبديل به
  //data 64
  //جهت اديت
  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  //اينجا براي نمايش خروجي هست
  //با فرمت data 64
  // از اين لينک
  // https://codesandbox.io/s/q8q1mnr01w?file=/src/index.js:1204-1219
  const GetOutPutImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotate
      );
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error("an error accured");
      setActivePart("avatar");
      //ارور هندل نداریم. فعلا بر میگردیم به عقب
    }
  }, [croppedAreaPixels, rotate]);

  //هر بار که کراپ کامل شود
  //اطلاعات اپديت ميشن. براي خروجي نهايي نياز ميشن اين اطلاعات
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  //بعد از انتخاب شدن فايل
  //به اديت تغيير ميکنه
  //بعد از اديت و انجام عمليات به لودينگ ميره
  const CreateActivePart = () => {
    switch (activePart) {
      case "avatar":
        return CreateAvatarPart();

      case "edit":
        return CreateEditAvatarPart();

      case "loading":
        return CreateLoading();
    }
  };

  //يک کامپوننت از کلاس کراپر ساخته ميشه
  //براي ديدن مثال ها
  // https://ricardo-ch.github.io/react-easy-crop/
  //لينک اصلي لايبرري
  // https://www.npmjs.com/package/react-easy-crop
  const CreateCropper = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Cropper
        style={{
          containerStyle: {
            position: "relative",
            width: size - bottomOptionsHeight,
            height: size - bottomOptionsHeight,
          },
        }}
        zoom={zoom}
        crop={crop}
        onCropChange={setCrop}
        cropShape="round"
        image={imageSrc}
        rotation={rotate}
        aspect={1 / 1}
        onCropComplete={onCropComplete}
      />
    </div>
  );

  //اسلايدر توي زوم
  // مقداري که به کراپر پاس داده شده رو
  //تغيير ميده
  const CreateZoomSlider = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        style={{ height: 0 }}
        aria-label="Zoom"
        defaultValue={1}
        valueLabelDisplay="auto"
        step={avatarZoomOptions.step}
        onChange={(event, newValue) => {
          setZoom(newValue);
        }}
        min={avatarZoomOptions.min}
        max={avatarZoomOptions.max}
        valueLabelFormat={(value) => value + "X"}
        ValueLabelComponent={({ value, children }) => (
          <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
          </Tooltip>
        )}
      />
    </div>
  );

  //روتيت مقدار پاس داده شده به کراپر رو تغيير ميده
  //کنسل، وضعيت رو از اديت به اواتار تغيير ميده
  const CreateBottomButtonOptions = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => {
            if (rotate === 270) setRotate(0);
            else setRotate(rotate + 90);
          }}
          size="small"
        >
          <RotatePicture size={24} fill={MainColors.BoldBluePrimaryBorder} />
        </IconButton>
      </div>

      <div>
        <Button
          onClick={() => {
            setImageSrc("");
            setActivePart("avatar");
          }}
          variant="outlined"
          color="inherit"
        >
          cancell
        </Button>
      </div>

      <div>
        <Button
          onClick={() => {
            //setActivePart("loading");
            GetOutPutImage();
          }}
          style={{
            background:
              "linear-gradient(70deg, rgba(97,9,121,1) 18%,rgba(0,115,255,1) 100%)",
            color: "white",
          }}
        >
          Upload
        </Button>
      </div>
    </div>
  );

  const CreateEditAvatarPart = () => {
    return (
      <>
        {CreateCropper()}

        {CreateZoomSlider()}

        {CreateBottomButtonOptions()}
      </>
    );
  };

  const CreateLoading = () => {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: size,
          display: "flex",
        }}
      >
        <LoadingGif height={100} />
      </div>
    );
  };

  const CreateAvatarPart = () => {
    return (
      <>
        <Avatar
          src={profilePicture}
          style={{ width: "100%", height: "100%" }}
        />
        <form style={{ position: "relative", bottom: size / 3 }}>
          <label htmlFor="icon-button-file">
            <IconButton
              style={{ backgroundColor: "white" }}
              aria-label="upload picture"
              component="span"
            >
              <CameraIcon />
            </IconButton>
          </label>
          <input
            type="file"
            id="icon-button-file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            required
            style={{ display: "none" }}
          />
        </form>
      </>
    );
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        ...{ ...style },
      }}
    >
      {CreateActivePart()}
    </div>
  );
};

export default MainAvatar;
