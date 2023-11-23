import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { scetch1, scetch2, scetch3 } from "./assets";
import "./Images.css";

const Sketches = () => {
  const images = [
    {
      original: scetch1,
      thumbnail: scetch1,
      originalHeight: "800px",
    },
    {
      original: scetch2,
      thumbnail: scetch2,
      originalHeight: "800px",
    },
    {
      original: scetch3,
      thumbnail: scetch3,
      originalHeight: "800px",
    },
  ];

  return (
    <div className="images">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        infinite={true}
        autoPlay={true}
      />
    </div>
  );
};

export default Sketches;
