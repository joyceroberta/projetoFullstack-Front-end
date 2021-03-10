import styled from "styled-components";

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;

export const Pictures = styled.img`
  width: 300px;
  height: 300px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 2px black solid;
`;

export const DivProfile = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px black solid;
`;

export const DivPost = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 15px;
  text-align: end;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;
