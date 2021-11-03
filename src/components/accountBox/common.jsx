import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(172, 172, 172, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color:rgba(0,115,255,1) 100%;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 106%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  box-shadow: 0px 2px 8px rgba(15, 15, 15, 0.19);
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin-left: -11px;

  &::placeholder {
    color: #c4c4c4;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.8);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(0, 115, 255, 1);
    transition: all, 100ms ease-in-out;
  }
`;

export const SubmitButton = styled.button`
  width: 106%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  box-shadow: 0px 8px 10px rgba(15, 15, 15, 0.19);
  transition: all, 240ms ease-in-out;
  background: rgb(3, 0, 36);
  background: linear-gradient(
    70deg,
    rgba(97, 9, 121, 1) 18%,
    rgba(0, 115, 255, 1) 100%
  );

  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.2);
    outline: none;
    border: none;
  }
`;
