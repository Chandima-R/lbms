import styled from "styled-components";
import {Button, Col, Form} from "antd";

const { Item } = Form;
export const BackgroundSection = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: url('/media/backgrounds/background.png');
`;
export const SectionContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px 0 20px 0;
`;

export const FormWrapper = styled.div`
  max-width: 440px;
  width: 100%;
  padding: 1rem;
`;

export const FormHeader = styled.div`
  margin-bottom: 3rem;

  .chameleon-logo-wrapper {
    margin-bottom: 80px;
  }

  .form-header-title {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
  }

  .form-header-text {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .form-header-subtitle {
    margin: 0.2rem;
    font-size: 13px;
    font-weight: 400;
    color: #b2b2b2;
    letter-spacing: 1px;
  }
`;

export const GoogleSignButton = styled(Button)`
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  border-color: rgba(104, 106, 115, 0.2);
  border-radius: 4px;
  height: 45px;

  &:hover {
    border-color: #f64404;
    color: #f64404;
  }

  img {
    height: 90%;
    padding: 2px;
    margin-left: 24%;
  }

  .text-label {
    margin-left: 15px;
    height: 45px;
    line-height: 25px;
    font-weight: 400;
  }
`;

export const SeparatorWithText = styled.span`
  text-align: center;
  display: block;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #b2b2b2;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;

  &:after {
    content: '';
    height: 1px;
    border-top: 1px solid #ff1b2d;
    position: absolute;
    width: 25%;
    margin-left: 10px;
    top: 10px;
    right: 0;
  }

  &:before {
    content: '';
    height: 1px;
    border-top: 1px solid #ff1b2d;
    position: absolute;
    width: 25%;
    margin-right: 10px;
    top: 10px;
    left: 0;
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const BlockButtonLogin = styled(Button)`
  background: none;
  width: 185px;
  height: 47px;
  color: #323232;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 4px;
  border: 2px solid #f99b17;
`;

export const TextWrap = styled.div`
  padding-top: 2rem;
  text-align: ${(props) => props.align};

  span {
    cursor: pointer;
  }

  span:hover {
    color: #f99b17;
  }
`;

export const ClickLink = styled.span`
  color: #455fe5;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const SessionFrom = styled(Form)`
  width: ${(props) => props.width};

  .ant-input-affix-wrapper {
    border-radius: 4px;
    height: 48px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .ant-input-affix-wrapper > input.ant-input {
    font-size: 14px;
    border-radius: 4px;
  }

  .text-input-box {
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    height: 48px;
    background: #fefefe;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const TextLabel = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #b2b2b2;
  margin-bottom: 5px;
`;

export const PasswordFormItem = styled(Item)`
  .ant-form-item-explain-error {
    margin-top: 10px;
    margin-bottom: 24px;
  }
`;