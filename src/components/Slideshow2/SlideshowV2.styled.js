import styled from "styled-components";

export const SlideshowContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
`;

export const Slides = styled.div`
  display: none;
`;

export const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  left: 0;
  border-radius: 3px 0 0 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right: 0;
  border-radius: 3px 0 0 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const NumberText = styled.div`
  color: black;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &.active,
  &:hover {
    background-color: #717171;
  }
`;
