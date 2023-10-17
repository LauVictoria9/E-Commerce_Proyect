import React from "react";

/* Card import */
import Card from "./Card";

/* Icons imports */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ sliderId, data }) => {
  const handlePreviousButton = () => {
    const slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft - 512;
  };

  const handleNextButton = () => {
    const slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft + 512;
  };

  return (
    <div className="w-full flex items-center h-full">
      <button
        onClick={handlePreviousButton}
        className="text-white mx-4 flex-shrink-0 bg-white/25 flex justify-center items-center w-8 h-8 rounded-full transition-transform hover:scale-110 duration-200 ease-in-out active:scale-100 active:duration-0"
      >
        <FaChevronLeft />
      </button>

      <div
        id={sliderId}
        className="flex flex-nowrap h-full gap-4 flex-grow overflow-x-scroll scroll-smooth scrollbar-none overflow-y-hidden"
      >
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>

      <button
        onClick={handleNextButton}
        className="text-white mx-4 flex-shrink-0 bg-white/25 flex justify-center items-center w-8 h-8 rounded-full transition-transform hover:scale-110 duration-200 ease-in-out active:scale-100 active:duration-0"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
