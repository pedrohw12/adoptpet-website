import styled from "styled-components";

export const Container = styled.div`
  background-color: #005BEA;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoName = styled.h1`
  color: #0091E7;
  font-weight: bold;
  letter-spacing: 5px;
`;

export const LoginButton = styled.button`
  border: none;
  border: 2px solid #0000FF;
  color: #fff;
  font-weight: bold;
  background-color: #005BEA;
  padding: 20px;
  width: 150px;
  margin-right: 15px;
  transition: all 300ms;

  &:hover {
    opacity: 0.8;
  }
`;

export const SignUpButton = styled.button`
  border: none;
  border: 2px solid #0000FF;
  color: #fff;
  font-weight: bold;
  background-color: #0000FF;
  padding: 20px;
  width: 150px;
  transition: all 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
