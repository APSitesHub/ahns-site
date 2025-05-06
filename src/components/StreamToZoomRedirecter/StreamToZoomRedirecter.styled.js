import styled from 'styled-components';

export const LinkText = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.45;
  text-decoration: underline;
  text-align: center;

  margin-right: 8px;
  color: var(--main-color);
`;

export const PlatformLink = styled.a`
  border-color: var(--secondary-color);
  border-radius: 9px;
  padding: 10px 14px;
  background-color: transparent;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover,
  &:focus {
    background-color: var(--main-transparent-color);
  }
`;

export const StreamPlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StreamPlaceHolderText = styled.p`
  text-align: center;
  font-size: 32px;
  max-width: 720px;
  line-height: 1.2;
  white-space: pre-wrap;
  word-wrap: break-word;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;