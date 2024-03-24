import React from "react";
import '../../assets/css/Features/ImageUpload.css';
import { BiCloudUpload } from "react-icons/bi";

export const ImageUpload = ({handleImageUpload, editorData}) => {
  return (
    <div class="flex-container">
      <input
        type="file"
        id="image-input"
        accept="image/*"
        hidden
        onChange={handleImageUpload}
      />

      <span className="faFileImport"><BiCloudUpload size="34px" color="#0096FF"></BiCloudUpload></span>
      <p className="label1">Change the ad creative image.</p>
      <label for="image-input"  className="label2">
        select file 
      </label>
      <label className="label3">{editorData.image_name}</label>
    </div>
  );
};
