import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 800px;
  background-color: #0091e7;
  border: 3px solid #0000ff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 5;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  p {
    color: #fff;
    font-size: 34px;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 34px;
  position: absolute;
  right: 30px;
  transition: all 300ms;

  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  border: none;
  height: 40px;
  margin: 5px;
  border-radius: 8px;
  width: 50%;
  max-width: 500px;
  padding: 20px;
`;

export const SubmitButton = styled.button`
  border: none;
  height: 40px;
  width: 50%;
  max-width: 500px;
  /* padding: 50px; */
  background-color: #0000ff;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  margin-top: 50px;

  transition: all 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
