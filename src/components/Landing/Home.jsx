import React, { useState } from "react";
import initialEditorData from "../../utils/editorData";
import { EditorImage } from "../Canva/EditorImage";
import { Customization } from "../Canva/Customization";
import homeStyles from "../../assets/css/Home.module.css";
import image1 from "../../assets/images/coeffee.jpeg";
import image2 from "../../assets/images/global_temp_landscape_temp_10_Design_Pattern.png"
import image3 from "../../assets/images/global_temp_landscape_temp_10_Mask_stroke.png";
import image4 from "../../assets/images/global_temp_landscape_temp_10_mask.png";

const initialData = {
  image_url: image1,
  image_name: "No Image Uploaded",
  content_title: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
  cta: "Shop Now",
  selected_colors: [],
  current_color: '#FFFFFF',
  first_image: image2,
  second_image: image3,
  third_image: image4,
};
export const Home = () => {
  const [editorData, setEditorData] = useState(initialData);
 
  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(uploadedImage);
    const imageName = uploadedImage.name;

    setEditorData({
      ...editorData,
      image_url: imageUrl,
      image_name:
        imageName.length > 40 ? imageName.substring(0, 39) + "..." : imageName,
    });
  };

  const handleTitleUpdate = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length > 0) {
      setEditorData({
        ...editorData,
        content_title: newTitle,
      });
    } else {
      setEditorData({
        ...editorData,
        content_title: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
      });
    }
  };

  const handleCtaUpdate = (event) => {
    const newCta = event.target.value;
    if (newCta.length > 0) {
      setEditorData({
        ...editorData,
        cta: newCta,
      });
    } else {
      setEditorData({
        ...editorData,
        cta: "Shop Now",
      });
    }
  };
  return (
    <div className={homeStyles.homewrapper}>
      <EditorImage editorData={editorData} set />
      <Customization
        editorData={editorData}
        setEditorData={setEditorData}
        handleCtaUpdate={handleCtaUpdate}
        handleTitleUpdate={handleTitleUpdate}
        handleImageUpload={handleImageUpload}
      />
    </div>
  );
};
