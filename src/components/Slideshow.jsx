// AppWithSlideshow.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

const SlideshowContainer = styled.div`
  width: 100%;
  /* max-width: 600px; */
  margin: auto;
  overflow: hidden;
  position: relative;
`;

const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.img`
  width: 100%;
`;

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <SlideshowContainer>
      <Slides style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slides>
    </SlideshowContainer>
  );
};

const AppWithSlideshow = () => {
  const img = [image1, image2, image3];

  return (
    <div>
      <Slideshow images={img} />
    </div>
  );
};

export default AppWithSlideshow;
