import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { FaEyeDropper } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import "../../assets/css/Features/BackgroundColor.css";
export const BackgroundColor = ({setEditorData, editorData}) => {
  const [showPickerOpen, setShowPickerOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [selectedColors, setSelectedColors] = useState([]);

  const handleChangeComplete = (color, event) => {
    const updatedColors = [color.hex, ...selectedColors.slice(0, 4)];
    setSelectedColors(updatedColors);
    setEditorData({
      ...editorData,
      selected_colors: updatedColors,
      current_color: color.hex,
    })
  };

  const openEyeDropper = async () => {
    if ("EyeDropper" in window) {
      let eyeDropper = new window.EyeDropper();
      const { sRGBHex } = await eyeDropper.open();
      setColor(sRGBHex);
    } else {
      alert("Use Supproted Browser");
    }
  };

  return (
    <>
      <div className="custom-bgcolor-wrapper">
        <h1 className="custom-heading">Choose your color</h1>

        <div
          className="custom-bgcolor-container"
          onClick={() => setShowPickerOpen(true)}
        >
          {editorData.selected_colors.map(
            (
              coloring,
              index 
            ) => (
                (index == 0) ? 
                  <div key={index} style={{backgroundColor:`${coloring}`, border: "1px solid #49019B" }} className="custom-bgcolor-icon"></div>
                :
                  <div key={index} style={{backgroundColor:`${coloring}`, border: "0.2px solid black"  }} className="custom-bgcolor-icon"></div>
                
             
            )
          )}
          <div className="custom-bgcolor-icon">
            <FaPlus size={"12px"} />
          </div>
        </div>

        {showPickerOpen && (
          <div className="showPicker-wrapper">
            <div
              className="custom-shopicker"
              onClick={() => {
                setShowPickerOpen(false);
              }}
            ></div>
            <SketchPicker color={editorData.current_color} onChange={handleChangeComplete} />
            <div className="custom-eyedropper" onClick={openEyeDropper}>
              Pick Up the color:
              <FaEyeDropper />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
