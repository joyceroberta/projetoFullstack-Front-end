import styled from "styled-components"

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Pictures = styled.img`
  width: 200px;
  height: 200px;

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
  font-size: 20px;
  text-align: end;
    :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;