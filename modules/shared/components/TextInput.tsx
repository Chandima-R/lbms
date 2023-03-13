import { Input, Form as AntForm, Popover } from 'antd';
import { Controller } from 'react-hook-form';
import { isRequired } from '../functions/formHelpers';
import {TextInputProps} from "@/modules/shared/types";
import {TextInputWrapper} from "@/modules/shared/styles/Forms";

const { Item: FormItem } = AntForm;

const TextInput = ({
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
    type,
    suffix,
    labelCol,
    addonAfter,
    addonBefore,
    required,
    min,
    max,
    className,
    popOver,
    maxLength,
    }: TextInputProps) => {
    let error;

    if (name.includes('.')) {
        const nameIndexes = name.split('.');

        if (errors && nameIndexes.length === 3 && errors[nameIndexes[0]] && errors[nameIndexes[0]][nameIndexes[1]]) {
            error = errors[nameIndexes[0]][nameIndexes[1]][nameIndexes[2]];
        }
    } else if (errors) {
        error = errors[name];
    }

    return (
        <TextInputWrapper>
            <FormItem
                required={required || (validationSchema && isRequired(validationSchema, name))}
                label={label}
                name={name}
                labelCol={labelCol}
                validateStatus={errors && error ? 'error' : ''}
                help={errors && error?.message}
                className="app-text-input"
            >
                {/*{popOver ? (*/}
                {/*    <Popover placement={popOver?.placement} title={popOver?.title} content={popOver?.content} trigger="click">*/}
                {/*        /!* For some reason, without this space, the pop over will not work. So, do not remove it! *!/{' '}*/}
                {/*        <Controller*/}
                {/*            render={({ field }) => (*/}
                {/*                <Input*/}
                {/*                    // eslint-disable-next-line react/jsx-props-no-spreading*/}
                {/*                    {...field}*/}
                {/*                    type={type}*/}
                {/*                    disabled={disabled}*/}
                {/*                    placeholder={placeholder}*/}
                {/*                    size={size}*/}
                {/*                    prefix={prefix}*/}
                {/*                    addonAfter={addonAfter}*/}
                {/*                    addonBefore={addonBefore}*/}
                {/*                    max={max}*/}
                {/*                    min={min}*/}
                {/*                    defaultValue={defaultValue}*/}
                {/*                    className={`${className} ${addonAfter || addonBefore ? 'with-addon' : ''}`}*/}
                {/*                    suffix={suffix}*/}
                {/*                    maxLength={maxLength}*/}
                {/*                />*/}
                {/*            )}*/}
                {/*            control={control}*/}
                {/*            name={name}*/}
                {/*        />*/}
                {/*    </Popover>*/}
                {/*) : (*/}
                    <Controller
                        render={({ field }) => (
                            <Input
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...field}
                                type={type}
                                disabled={disabled}
                                placeholder={placeholder}
                                size={size}
                                prefix={prefix}
                                addonAfter={addonAfter}
                                addonBefore={addonBefore}
                                max={max}
                                min={min}
                                defaultValue={defaultValue}
                                className={`${className} ${addonAfter || addonBefore ? 'with-addon' : ''}`}
                                suffix={suffix}
                                maxLength={maxLength}
                            />
                        )}
                        control={control}
                        name={name}
                    />
                {/*)}*/}
            </FormItem>
        </TextInputWrapper>
    );
};

export default TextInput