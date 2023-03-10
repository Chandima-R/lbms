import { MouseEvent, ReactNode } from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { SchemaOf } from 'yup';
import { ColProps } from 'antd';
import { RenderFunction } from 'antd/lib/_util/getRenderPropValue';
import { TooltipPlacement } from 'antd/lib/tooltip';

export type SelectedKey = {
    rowKey: string[];
};

type LabelImgType = {
    alt: string;
    src: string;
    size?: number;
    borderRadius?: string;
};

export type SelectOption = {
    value?: string | null;
    label: string;
    key: string;
    labelImg?: LabelImgType;
    editAction?: (event: MouseEvent<HTMLSpanElement>) => void;
    disabled?: boolean;
};

interface PopOverType {
    title?: React.ReactNode | RenderFunction;
    content?: React.ReactNode | RenderFunction;
    placement: TooltipPlacement;
}

export interface TextInputProps {
    name: string;
    label?: string;
    size?: SizeType;
    control: any;
    defaultValue?: any;
    placeholder?: string;
    prefix?: ReactNode;
    validationSchema?: SchemaOf<any>;
    errors?: any;
    disabled?: boolean;
    type?: string;
    rows?: number | undefined;
    suffix?: ReactNode;
    labelCol?: ColProps;
    addonAfter?: ReactNode;
    addonBefore?: ReactNode | string;
    required?: boolean;
    min?: number;
    max?: number;
    className?: string;
    popOver?: PopOverType;
    maxLength?: number;
}

export interface FileWithString extends File {
    string: string;
    blob?: string;
    isBrandFetch?: boolean;
    url: string;
}
