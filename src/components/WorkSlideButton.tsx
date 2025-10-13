"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSlideButtonProps {
  containerStyle: string;
  btnStyle: string;
}

export default function WorkSlideButton({
  containerStyle,
  btnStyle,
}: WorkSlideButtonProps) {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
}
