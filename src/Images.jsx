import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { eyes, hypno, oct, hand, sea, pink } from "./assets";
import "./Images.css";

const Images = () => {
  const images = [
    {
      original: eyes,
      thumbnail: eyes,
      originalHeight: "500px",
      originalWidth: "500px",
    },
    {
      original: hypno,
      thumbnail: hypno,
      originalHeight: "500px",
    },
    {
      original: oct,
      thumbnail: oct,
      originalHeight: "500px",
    },
    {
      original: hand,
      thumbnail: hand,
      originalHeight: "500px",
    },
    {
      original: sea,
      thumbnail: sea,
      originalHeight: "500px",
    },
    {
      original: pink,
      thumbnail: pink,
      originalHeight: "500px",
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

export default Images;
