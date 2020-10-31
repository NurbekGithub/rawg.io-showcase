import styled from "styled-components";

export const GameCardWrapper = styled.div`
  background-color: #202020;
  border-radius: 12px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
`;

export const GameCardMedia = styled.div`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const GameCardInfo = styled.div`
  padding: 16px;
`;

export const GameCardInfoMeta = styled.div`
  margin-bottom: 7px;
`;

export const GameCardInfoHeading = styled.div`
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
`;

export const GameCardInfoButtons = styled.div`
  display: flex;
  align-items: center;
`;
