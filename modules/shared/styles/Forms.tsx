import styled from "styled-components";

export const TextInputWrapper = styled.div`
  .ant-input-suffix {
    padding: 0;
    svg {
      margin-right: 10px;
      color: #c4c4c4;
    }
  }

  .with-addon {
    .ant-form-item-control-input-content {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }

  .ant-input-group-addon {
    border-color: #e9e9e9 !important; 
    font-size: 13px;
    min-width: 62px;
    letter-spacing: 1px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
