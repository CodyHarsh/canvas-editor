import React, { useState } from 'react'
import customizationStyles from '../../assets/css/Customization.css'
import { IoMdClose } from "react-icons/io";
import { ImageUpload } from '../Features/ImageUpload';
import { WiStars } from "react-icons/wi";
import { BackgroundColor } from '../Features/BackgroundColor';

export const Customization = ({handleImageUpload, editorData, handleCtaUpdate, handleTitleUpdate,setEditorData}) => {

  

  return (
     <>
      <div className="container">
        <div className="iconContainer">
          <IoMdClose className="icon" />
        </div>
        <h1 className="title">Ad customization</h1>
        <h2 className="subtitle">Customize your ad and get the templates accordingly</h2>
        <div className="adImgContainer"><ImageUpload handleImageUpload={handleImageUpload} editorData={editorData} /> </div>
        <div>
          <div className="editContentsDivider">
            <hr className="hr" />
            <span className="editContentsText">Edit contents</span>
            <hr className="hr" />
          </div>
        </div>
        <div className="container-cta" >
            <label className="label1">Ad Content</label>
            <input onChange={handleTitleUpdate} placeholder='1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs' type="text" className="input-field" onchange="(e)=>ctaHandler(e)" />
        </div>


        <div className="container-cta">
          <label className="label1">CTA</label>
          <input onChange={handleCtaUpdate} placeholder='Shop Now' type="text" className="input-field" onchange="(e)=>ctaHandler(e)" />
          
        </div>

        <div className="adContentContainer"><BackgroundColor setEditorData = {setEditorData} editorData ={editorData} /> </div>

      </div>
    </>
  )
}
