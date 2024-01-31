import React, { useState, useEffect } from "react";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";

import {
  SlideshowContainer,
  Slides,
  Prev,
  Next,
  // NumberText,
  Dot,
} from "./SlideshowV2.styled";

const SlideshowV2 = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    let newIndex = slideIndex + n;

    if (newIndex > slides.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = slides.length;
    }

    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    }

    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <SlideshowContainer>
      <Slides className="mySlides fade">
        {/* <NumberText>1 / 3</NumberText> */}
        <img src={image1} style={{ width: "100%" }} />
      </Slides>

      <Slides className="mySlides fade">
        {/* <NumberText>2 / 3</NumberText> */}
        <img src={image2} style={{ width: "100%" }} />
      </Slides>

      <Slides className="mySlides fade">
        {/* <NumberText>3 / 3</NumberText> */}
        <img src={image3} style={{ width: "100%" }} />
      </Slides>

      <Prev onClick={() => plusSlides(-1)}>❮</Prev>
      <Next onClick={() => plusSlides(1)}>❯</Next>

      <div style={{ textAlign: "center" }}>
        <Dot className="dot" onClick={() => currentSlide(1)}></Dot>
        <Dot className="dot" onClick={() => currentSlide(2)}></Dot>
        <Dot className="dot" onClick={() => currentSlide(3)}></Dot>
      </div>
    </SlideshowContainer>
  );
};

export default SlideshowV2;
