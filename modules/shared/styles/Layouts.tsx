import styled from "styled-components";
import {Header} from "antd/lib/layout/layout";
import {Button, Card, Input} from "antd";

export const TopBarWrapper = styled(Header)`
  padding: 0;
  background-color: #323232;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentCard = styled(Card)`
  padding: 48px 64px;
  margin: 32px auto;
  width: 100%;
  max-width: 1160px;
  //box-shadow: ${(props) => props.theme.dropShadows.ds1};
  background-color: #ffffff;
  border: none;

  .ant-card-body {
    padding: 0;
    position: relative;
  }
  .create-company__header {
    padding: 0;
  }
`;

export const FormContentCard = styled(ContentCard)`
  //background-color: #fafafa;
`;

export const SearchInputBox = styled(Input)`
  width: ${(props) => props.$width};
  height: 40px;
  background-color: transparent;
  margin-left: 20px;
  border-color: white;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-radius: 0;

  :hover {
    border-right: none;
    border-color: white !important;
  }

  .ant-input {
    font-size: 16px;
    background-color: transparent;
    color: ${(props) => props.$textColor};
  }

  &.ant-input-affix-wrapper-focused {
    border-right: none;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .search-icon {
    padding-right: 5px;
  }
`;

export const SearchBoxWrapper = styled(Button)`
  margin: 5px;
  width: 30%;
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: transparent;
  :hover {
    background-color: transparent;
    box-shadow: none;
  }
  :focus {
    background-color: transparent;
    box-shadow: none;
  }
  :active {
    box-shadow: none;
  }
  .searchTextWrapper {
    padding: 15px;
    margin: 10px;
    color: white;
    width: 100%;
    height: 35px;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
  }

  .search-placeholder {
    font-size: 15px;
    font-weight: 400;
    margin-left: 10px;
    margin-bottom: 4px;
  }
`;

export const TopActions = styled.div`
  padding: 0 30px;

  .ant-btn-link {
    color: #fff !important;
  }
  .ant-dropdown-trigger {
    position: relative;
  }
  .ant-btn-icon-only {
    padding-right: 10px;
    border-right: 1px solid #fff;
  }
`;