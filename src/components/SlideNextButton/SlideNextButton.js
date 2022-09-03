import { React } from 'react';
import { useSwiper } from 'swiper/react';
import './SlideNextButton.css'

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button className="next-button" onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}

export default SlideNextButton