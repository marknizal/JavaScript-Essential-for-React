import styled from "styled-components";

export const SlideshowContainer = styled.div`
  width: 100%;
  /* max-width: 600px; */
  margin: auto;
  overflow: hidden;
  position: relative;
`;
export const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;
export const Slide = styled.img`
  width: 100%;
  object-fit: cover;
`;
