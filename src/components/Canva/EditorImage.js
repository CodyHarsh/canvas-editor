import React, { useRef } from "react";
import "../../assets/css/EditorImage.css";
import html2canvas from "html2canvas";

export const EditorImage = ({editorData}) => {
  const canvasRef = useRef("");

  const handleDownload = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  return (
    <div className="editor-wrapper">
      <div
        className="custom-canvas1"
        ref={canvasRef}
        height={"1080px"}
        width={"1080px"}
      >
        <div
          className="custom-canvas2"
          height={"1080px"}
          width={"1080px"}
          style={{backgroundColor: editorData.current_color, }}
        >
          <img src={editorData.first_image} alt="temp" />
        </div>
        <div className="custom-canvas3" >
          <img src={editorData.image_url} alt="Image Is Wrong. Select another Image"></img>
        </div>

        <div className="custom-metadata">
            <p className="custom-message">{editorData.content_title}</p>
            <div className="custom-button">{editorData.cta}</div>
        </div>
      </div>

      <div className='download-now' onClick={handleDownload}>Download Now</div>

    </div>
  );
};
