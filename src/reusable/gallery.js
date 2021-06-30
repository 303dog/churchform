import React from "react";
import ImageGallery from "react-image-gallery";
import "./gallery.css";

const images = [
  {
    original: "logo02.png",
    thumbnail: "logo02.png",
  },
  {
    original: "color001.jpg",
    thumbnail: "color001.jpg",
  },
  {
    original: "./image002.jpg",
    thumbnail: "./image002.jpg",
  },
  {
    original: "image012.jpg",
    thumbnail: "image012.jpg",
  },
  {
    original: "image013.jpg",
    thumbnail: "image013.jpg",
  },
  {
    original: "image003.jpg",
    thumbnail: "image003.jpg",
  },
  {
    original: "image011.jpg",
    thumbnail: "image011.jpg",
  },
  {
    original: "image001.jpg",
    thumbnail: "image001.jpg",
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        autoPlay={true}
        thumbnailPosition='bottom'
        useBrowserFullscreen={false}
        showPlayButton={false}
      />
    );
  }
}

export default MyGallery;
