import { ColProps, Form as AntForm, Select } from 'antd';
import { Controller } from 'react-hook-form';
import { SchemaOf } from 'yup';
import { SelectProps, SelectValue } from 'antd/lib/select';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { CaretDownFilled } from '@ant-design/icons';
import { isRequired } from '../functions/formHelpers';
import {SelectOption} from "@/modules/shared/types";

const { Item: FormItem } = AntForm;
const { Option } = Select;

interface SelectFieldProps {
    name: string;
    label?: string;
    control: any;
    placeholder?: string;
    validationSchema?: SchemaOf<any>;
    errors: any;
    disabled?: boolean;
    showSearch?: boolean;
    labelCol?: ColProps;
    loading?: boolean;
    options: SelectOption[];
    mode?: SelectProps<any>['mode'];
    handleChange?: (value: SelectValue) => void;
    className?: string;
    size?: SizeType;
    dropdownRender?: (menu: ReactElement) => ReactElement;
    defaultValue?: string;
    onSearch?: any;
    required?: boolean;
    allowClear?: boolean;
}

export const SelectFieldWrapper = styled(FormItem)`
  width: 100%;

  .ant-select-selection-overflow-item {
    .ant-select-selection-item {
      background-color: #5f5c5c !important;
      color: #fff !important;
      border-radius: 36px;
      padding: 14px 10px !important;
      margin: 1px !important;
    }

    .ant-select-selection-item-remove {
      color: #fff;
    }
  }

  .ant-select-selection-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .option-label {
      width: 100%;
    }
  }

  .single-input-field {
    .ant-select-selection-item {
      color: #414141;
      background-color: transparent;
      //font-weight: bold;
      //justify-content: center;
    }
  }
`;

const SelectOptionLabel = styled.span`
  .edit-action-button {
    float: right;
    color: darkblue;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    .edit-action-button {
      opacity: 1;
    }
  }
`;

export const SelectField = ({
    name,
    label,
    control,
    placeholder,
    validationSchema,
    errors,
    disabled,
    showSearch,
    loading,
    options,
    mode,
    handleChange,
    className,
    labelCol,
    size,
    dropdownRender,
    defaultValue,
    onSearch,
    required,
}: SelectFieldProps) => {
    let error;
    if (name.includes('.')) {
        const nameIndexes = name.split('.');

        if (errors && nameIndexes.length === 3 && errors[nameIndexes[0]] && errors[nameIndexes[0]][nameIndexes[1]]) {
            error = errors[nameIndexes[0]][nameIndexes[1]][nameIndexes[2]];
        }
    } else {
        error = errors?.[name];
    }

    return (
        <SelectFieldWrapper
            required={required || (validationSchema && isRequired(validationSchema, name))}
            label={label}
            name={name}
            labelCol={labelCol}
            validateStatus={errors && error ? 'error' : ''}
            help={errors && error?.message}
        >
            <Controller
                render={({ field }) => (
                    <Select
                        suffixIcon={<CaretDownFilled />}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...field}
                        dropdownRender={dropdownRender}
                        filterOption={(input, option) => {
                            if (Array.isArray(option?.children)) {
                                return !!option?.children?.find(
                                    (child) => child?.props?.children?.toString()?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0,
                                );
                            }
                            if (option && option?.children) {
                                // @ts-ignore
                                return option?.children?.toString()?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0;
                            }

                            return false;
                        }}
                        mode={mode}
                        allowClear
                        disabled={disabled}
                        placeholder={placeholder}
                        loading={loading}
                        showSearch={showSearch}
                        showArrow
                        onChange={(event) => {
                            field.onChange(event);

                            if (handleChange) {
                                handleChange(event);
                            }
                        }}
                        className={className}
                        size={size}
                        defaultValue={defaultValue}
                        onSearch={onSearch}
                    >
                        {options?.map((option) => (
                            <Option
                                disabled={option.disabled}
                                className={option.key}
                                key={option.key}
                                value={option.key}
                                style={{ display: 'flex', justifyContent: 'space-between' }}
                            >
                                <SelectOptionLabel className="option-label">
                                    {option.label}{' '}
                                    {option.editAction && (
                                        <span
                                            tabIndex={0}
                                            role="button"
                                            className="edit-action-button"
                                            onClick={(event) => option.editAction(event)}
                                        >
                      Edit
                    </span>
                                    )}
                                </SelectOptionLabel>

                                {option?.labelImg && (
                                    <img
                                        alt={option?.labelImg?.alt}
                                        style={{ float: 'right', borderRadius: option?.labelImg?.borderRadius }}
                                        width={option?.labelImg?.size || 15}
                                        height={option?.labelImg?.size || 15}
                                        src={option.labelImg?.src}
                                    />
                                )}
                            </Option>
                        ))}
                    </Select>
                )}
                control={control}
                name={name}
            />
        </SelectFieldWrapper>
    );
};
