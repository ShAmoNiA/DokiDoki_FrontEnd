import { Avatar, colors, IconButton, Slider, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import { useCallback } from "react";
import Cropper from "react-easy-crop";
import { Redirect } from "react-router";
import { CameraIcon, LoadingGif, RotatePicture } from "../../asset/svgIcons";
import { MainColors } from "../../config";
import MainIconButton from "../baseComponents/iconButton";
import getCroppedImg from "./getOutPut";

const bottomOptionsHeight = 70;

const MainAvatar = ({ style, size }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const [imageSrc, setImageSrc] = useState("");

  const [zoom, setZoom] = useState(1);

  const [rotate, setRotate] = useState(0);

  const [activePart, setActivePart] = useState("avatar");

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  //نتيجه نهايي به صورت
  //blob
  // لينکش تو اين متغير ذخيره ميشه
  const [croppedImage, setCroppedImage] = useState(null);

  //listener
  //براي انتخاب تصوير و تبديل وضعيت به حالت اديت
  const handleImageChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setActivePart("edit");
    } else {
    }
  };

  //خواندن فايل  و تبديل به
  //blob
  //جهت اديت
  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  //اينجا براي نمايش خروجي هست
  //با فرمت blob
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
      setActivePart("loading");
    } catch (e) {
      console.error(e);
      console.error("an error accured");
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
      <div style={{ marginRight: 10 }}>Zoom:</div>
      <Slider
        style={{ height: 0 }}
        aria-label="Zoom"
        defaultValue={1}
        valueLabelDisplay="auto"
        step={0.25}
        onChange={(event, newValue) => {
          setZoom(newValue);
        }}
        min={1}
        max={3}
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
        <div style={{ marginRight: 3 }}> Rotate:</div>
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
        <button
          onClick={() => {
            setImageSrc("");
            setActivePart("avatar");
          }}
        >
          cancell
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            //setActivePart("loading");
            GetOutPutImage();
          }}
        >
          Upload
        </button>
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
        <Avatar style={{ width: "100%", height: "100%" }} />
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
