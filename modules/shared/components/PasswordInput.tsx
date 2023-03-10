import { ColProps, Input } from 'antd';
import { Controller, useWatch } from 'react-hook-form';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ReactNode } from 'react';
import { SchemaOf } from 'yup';
import styled from 'styled-components';
import PasswordStrengthBar from 'react-password-strength-bar';
import { isRequired } from '../functions/formHelpers';
import {PasswordFormItem} from "@/modules/shared/components/StyledComponents";

const PasswordInputWrapper = styled.div`
  .ant-form-item-control-input-content {
    border: none !important;
  }

  input {
    outline: none;
    min-height: 35px !important;
  }

  margin-bottom: ${(props) => (props.$showPasswordStrengthMeter ? '45px' : '0px')};
`;

interface PasswordInputProps {
    name: string;
    label?: string;
    size: SizeType;
    control: any;
    defaultValue?: any;
    placeholder: string;
    prefix?: ReactNode;
    validationSchema?: SchemaOf<any>;
    errors: any;
    disabled?: boolean;
    suffix?: ReactNode;
    labelCol?: ColProps;
    addonAfter?: ReactNode;
    showPasswordStrengthMeter?: boolean;
    className?: string;
}

export const PasswordInput = ({
                                  name,
                                  label,
                                  size,
                                  control,
                                  defaultValue,
                                  placeholder,
                                  prefix,
                                  validationSchema,
                                  errors,
                                  disabled,
                                  suffix,
                                  labelCol,
                                  addonAfter,
                                  showPasswordStrengthMeter,
                                  className,
                              }: PasswordInputProps) => {
    const value: string = useWatch({ control, name });

    return (
        <PasswordInputWrapper $showPasswordStrengthMeter={showPasswordStrengthMeter}>
            <PasswordFormItem
                required={validationSchema && isRequired(validationSchema, name)}
                label={label}
                name={name}
                labelCol={labelCol}
                validateStatus={errors && errors[name] ? 'error' : ''}
                help={errors && errors[name]?.message}
            >
                <Controller
                    render={({ field }) => (
                        <Input.Password
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...field}
                            suffix={suffix}
                            type="password"
                            disabled={disabled}
                            placeholder={placeholder}
                            size={size}
                            prefix={prefix}
                            addonAfter={addonAfter}
                            className={className}
                        />
                    )}
                    control={control}
                    name={name}
                    defaultValue={defaultValue}
                />
                {showPasswordStrengthMeter && <PasswordStrengthBar password={value} />}
            </PasswordFormItem>
        </PasswordInputWrapper>
    );
};
