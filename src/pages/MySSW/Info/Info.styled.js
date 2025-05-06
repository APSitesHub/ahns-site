import styled from 'styled-components';

export const InfoBox = styled.div`
  position: absolute;
  top: 30px;
  right: 60px;
  z-index: 5;

  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  font-family: var(--my-ap-font-family);

  overflow: hidden;
  border-radius: 20px;
  padding: 0 20px;
  padding-bottom: 10px;
  padding-right: 0;
  height: auto;
  width: calc(100% - 65px);
  max-height: 700px;

  border-bottom: 10px solid #ffffff80;

  @media screen and (min-width: 480px) {
    width: 362px;
  }

  @media screen and (min-width: 768px) {
    width: 562px;
    right: 90px;
  }

  @media screen and (min-height: 480px) {
    top: 60px;
    height: 400px;
  }

  @media screen and (min-height: 640px) {
    top: 142px;
    height: 520px;
  }

  @media screen and (min-height: 1024px) {
    height: auto;
  }
`;

export const InfoHeading = styled.h3`
  padding: 9px 0;

  color: #525266;
  border-bottom: 1px solid #0000000d;
  margin-bottom: -1px;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 21px;

  font-size: 14px;
  line-height: 1.2;
  color: #525266;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #fff;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-gutter: 10px;
`;

export const InfoListItem = styled.li`
  padding-right: 10px;

  &:first-child {
    padding-top: 10px;
  }

  &:not(:last-child) {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--main-color);
  }
`;

export const InfoListItemDate = styled.span`
  display: block;
  text-align: right;
  color: var(--main-semi-transparent-color);
  font-size: 16px;
  line-height: 1.2;
`;

export const InfoListItemText = styled.p`
  color: #525266;
  font-size: 14px;
  line-height: 1.2;
  white-space: pre-wrap;
  word-wrap: break-word;
  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const PdfWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PdfBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const PdfLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--main-color);
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
