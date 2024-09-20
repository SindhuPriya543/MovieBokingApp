import React, { useState } from "react";
import leftarrow from "../images/left_arrow.png";
import rightarrow from "../images/right_arrow.png";
const MoviesImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-[50rem] mx-auto">
      <button
        onClick={goToPrevious}
        className="absolute  left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full"
      >
        <img src={leftarrow} className="w-[2.5rem] h-[2.5rem] rounded-full" />
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-[50rem] h-[30rem] object-fill rounded"
      />

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full"
      >
        <img src={rightarrow} className="w-[2.5rem] h-[2.5rem] rounded-full" />
      </button>
    </div>
  );
};

export default MoviesImageSlider;
