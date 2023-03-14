import styled from "styled-components";
import {Avatar} from "antd";

export const AvatarWrapper = styled(Avatar)`
  padding: 2px;

  img {
    border-radius: 100%;
  }
`;

export const TopButtonWrapper = styled.div`
  margin-bottom: 32px;
  margin-top: -64px;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: stretch;

  .ant-btn {
    max-width: 185px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    line-height: 48px;
    padding: 0;
  }
`;