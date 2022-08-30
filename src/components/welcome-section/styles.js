import styled from "styled-components";

export const Container = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  padding: 100px 0px 300px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      rgba(31, 23, 133, 0.8),
      rgba(31, 23, 133, 0.1)
    ),
    url("/dog-bgImg.jpeg");
  background-size: cover;
`;

export const WelcomeText = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 86px;
`;

export const Description = styled.p`
  color: #fff;
  opacity: 0.8;
  font-size: 20px;
  width: 50%;
  text-align: center;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195.99px;
  height: 57.52px;
  color: #000;
  clip-path: polygon(5% 13%, 100% 0, 93% 90%, 0 100%);
  background: #04F9F2;
  border: none;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  cursor: pointer;
  transition: color 150ms ease-in-out;
  font-family: 'ProximaNova-Bold';
  font-style: normal;
  text-align: center;
  margin-top: 50px;

  &:disabled {
    opacity: 0.5;
    cursor: default !important;
  }

  &:hover {
    filter: opacity(0.9);
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #005BEA;
    color: #fff;
    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (min-width: 1600px) {
    width: 305px;
    height: 89px;
    font-size: 32px;
    line-height: 40px;
  }

  @media (min-width: 1920px) {
    width: 300px;
    height: 90px;
    font-size: 40px;
    line-height: 48px;
  }
`