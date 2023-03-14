import styled from "styled-components";
import {Button, Card, Col, Form, Modal, PageHeader} from "antd";
import {BaseButtonProps, ButtonProps} from "antd/lib/button/button";

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

export const AppContentCard = styled(Card)`
  margin: 32px auto;
  width: 100%;
  max-width: 1160px;
  background-color: transparent;
  border: none;

  .ant-card-body {
    padding: 0;
    position: relative;
  }

  .floating-action {
    position: absolute;
    right: 10px;
    bottom: 30px;
  }

  &.single-user_wrapper .ant-btn-link {
    padding: 0;
    margin-bottom: 32px;
    font-size: 18px;
    background-color: transparent;
  }
`;

export const InnerPageTitle = styled(PageHeader)`
  padding-left: 0;
  padding-right: 0;
`;

interface AppButtonProps extends BaseButtonProps {
    $inverted?: boolean;
    outlined?: boolean;
    success?: boolean;
    save?: boolean;
}


export const AppButton = styled<AppButtonProps>(Button)`
  font-size: 13px;
  min-width: 185px !important;
  height: 47px;
  border-radius: 4px;
  color: #323232;
  border: 2px solid #f99b17;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  font-weight: 700;

  &:last-child {
    margin-left: 10px;
  }

  &:hover {
    background: #fc4a1a; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #f7b733, #fc4a1a); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #f7b733,
      #fc4a1a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
  }

  ${(props) =>
    props.$inverted &&
    'background-color: transparent; color: #333333; border: 1px solid #666666; box-shadow: none; &:hover {background: none; color: #333333; }'}
  ${(props) => props?.outlined && 'background-color: transparent !important;border 1px solid #f99b17;color: #f99b17;'}
  ${(props) => props.danger && 'color: #CF2F2F !important; border-color: #CF2F2F;'}
  ${(props) => props.success && 'color: #05BD92 !important; border-color: #05BD92;'}
  ${(props) =>
    props.save &&
    'background-color: #ffffff; border-color: #f99b17; color: #323232; font-weight: bold; border-width: 2px;'}
  ${(props) => props.cancel && 'font-weight: bold; border'}
  &:hover {
    ${(props) => (props.outlined || props.$inverted) && 'background-color: transparent; color: #f99b17;'}
  }

  &:focus {
    ${(props) => (props.outlined || props.$inverted) && 'color: #f99b17;'}
  }

  .update {
    font-weight: bold;
    background-color: #ffffff;
    border: 3px solid;
  }
`;

export const PopModel = styled(Modal)`
  max-width: 800px;
  width: ${(props) => (props.width ? props.width : '60')}% !important;

  .ant-modal-body {
    padding: 32px 40px 32px 40px;
  }

  .ant-modal-body .ant-page-header {
    padding: 0;
    margin-bottom: -6px;
  }

  .ant-modal-body .ant-page-header {
    overflow: visible;
  }

  .ant-modal-body .ant-page-header-heading-sub-title {
    margin-bottom: 16px;
  }

  .ant-modal-close-icon {
    margin-left: -64px;

    svg {
      width: 19px;
      height: 19px;
      color: #333333;
      margin-top: 42px;
    }
  }

  .modal-title {
    display: block;
    font-size: 16px;
    color: #636262;
    font-weight: 700;
  }

  .modal-sub-title {
    color: #909090;
    display: block;
    margin-bottom: 20px;
  }
`;

export const ModelInner = styled.div`
  padding: 10px 30px;

  .ant-page-header {
    padding: 0 0 30px;
  }
  .ant-page-header-heading-title,
  .ant-page-header-heading-sub-title,
  .ant-page-header-heading,
  .ant-page-header-heading-left {
    display: block;
    width: 100%;
  }

  .left-outlined {
    color: #f99b17;
    margin-bottom: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
  }

  .upload-steps-wrapper {
    .ant-steps-item-container {
      overflow: visible;
      width: 100%;
    }

    .ant-steps-item-title::after {
      width: 100px;
    }

    .ant-steps-item {
      &:nth-child(2) .step-title {
        left: -81px;
      }
    }

    .ant-steps-item-title {
      &:after {
        background-color: #e9e9e9 !important;
        margin-top: 4px;
      }
    }

    .ant-steps-item {
      padding: 0 !important;
      overflow: visible;
    }

    .ant-steps-item-container {
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 26px;
    }

    .step-title {
      top: 30px;
      position: absolute;
      font-size: 13px;
      color: #666;
      left: -51px;
    }
  }
`;

export const TabHeader = styled(PageHeader)`
  padding: 20px 0;
  border-bottom: none;
  margin-bottom: ${(props) => props.$marginBottom || '20px'};

  &.hide-bottom-margin {
    margin-bottom: unset;

    .ant-page-header-heading-title {
      padding-bottom: unset;
    }
  }

  .ant-page-header-back {
    display: none;
  }

  .solution-partner-header {
    margin-bottom: 1px !important;
    margin-top: 1px !important;
    font-weight: bold;
  }

  .ant-page-header-heading-left {
    display: block;
    position: relative;
    width: 100%;
  }

  .ant-page-header-heading-title,
  .ant-page-header-heading-sub-title {
    display: block;
    width: 100%;
  }

  .ant-page-header-heading-sub-title {
    font-size: 12px;
    color: #666666;
    letter-spacing: 0.6px;
  }

  .ant-page-header-heading-title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    padding-bottom: 0;
    color: #141414;
  }
`;


export const FloatingFab = styled<ButtonProps>(Button)`
  position: absolute !important;
  right: 70px;
  top: ${(props) => props.$top || '68px'};
  background: white;
  color: #323232;
  letter-spacing: 1px;
  width: 185px !important;
  height: 47px !important;
  border-radius: 4px;
  border: 2px solid #f99b17;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.06);
  .anticon {
    font-size: 21px;
  }
  &:hover {
    background: transparent;
    color: #f99b17;
  }
`;
