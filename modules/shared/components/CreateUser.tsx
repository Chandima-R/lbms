import {FloatingFab, ModelInner, TabHeader} from "@/modules/shared/components/StyledComponents";
import {CloseCircleOutlined, CloseSquareOutlined} from "@ant-design/icons";
import {Dispatch, Fragment, SetStateAction, useState} from "react";
import {SelectProps} from "antd/lib/select";
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Col, Divider, Form, Typography} from "antd";
import {FormInner, InputWrapper} from "@/modules/shared/styles/Forms";
import TextInput from "@/modules/shared/components/TextInput";
import { getUserDefaultValues } from '../../user/functions/getUserDefaultValues';
import {handleCreateUser} from "@/modules/user/functions/handleCreateUser";

export interface CreateUserDataType {
    firstName: string;
    lastName: string;
    email: string;
    // username: string;
    // userRoleIds: string[];
    // companyId: string;
}

export interface Field {
    name: string;
    label: string;
    defaultValue?: string;
    type: string;
    mode?: SelectProps<any>['mode'];
}

export interface CreateUSerFormFieldGroups {
    title: string;
    fields: Field[];
}

interface CreateUserProps {
    setIsCreateUserModalVisible: Dispatch<SetStateAction<boolean>>;
}
const CreateUser = ({ setIsCreateUserModalVisible }: CreateUserProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const CreateUserValidationSchema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().required('Email is required').email('Enter a valid email'),
    });

    const formFieldGroups: CreateUSerFormFieldGroups[] = [
        {
            title: '',
            fields: [
                {
                    name: 'firstName',
                    label: 'First Name',
                    defaultValue: '',
                    type: 'text',
                },
                {
                    name: 'lastName',
                    label: 'Last Name',
                    defaultValue: '',
                    type: 'text',
                },
                {
                    name: 'email',
                    label: 'Email Address',
                    defaultValue: '',
                    type: 'email',
                },
            ],
        },
    ];

    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<CreateUserDataType>({
        // @ts-ignore
        defaultValues: getUserDefaultValues({ formFieldGroups }),
        resolver: yupResolver(CreateUserValidationSchema),
    });

    const onSubmit = handleSubmit((data) => {
        handleCreateUser({
            data,
            setIsLoading,
            setIsCreateUserModalVisible,
            reset,
        }).then();
    });

    return(
        <ModelInner>
            <CloseCircleOutlined
                className="left-outlined"
                onClick={() => {
                    setIsCreateUserModalVisible(false);
                }}
            />
            <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} labelAlign="left" onFinish={onSubmit}>
                <TabHeader
                    title="Add New User"
                    // subTitle="This section is for the administrator to generate a new user profile.."
                />

                <br />

                <FloatingFab
                    type="primary"
                    loading={isLoading}
                    htmlType="submit"
                    $top="97px"
                    className="tab-content__save"
                    id="create-user"
                >
                    Save
                </FloatingFab>

                <FormInner gutter={64}>
                    {formFieldGroups.map((fieldGroup) => {
                        return (
                            <Fragment key={fieldGroup.title}>
                                {fieldGroup.title && (
                                    <Col span={24} key={fieldGroup.title} className="inner-section__title">
                                        <Typography.Title level={4}>{fieldGroup.title}</Typography.Title>
                                    </Col>
                                )}

                                {fieldGroup.fields.map((field) => {
                                    // if (field.name === 'userRoleIds') {
                                    //     return (
                                    //         <InputWrapper span={12} key={field.name}>
                                    //             <SelectField
                                    //                 placeholder={field.label}
                                    //                 options={userRolesForSelect}
                                    //                 control={control}
                                    //                 name={field.name}
                                    //                 errors={errors}
                                    //                 label={field.label}
                                    //                 className="form-inner__select user-rolese"
                                    //                 validationSchema={CreateUserValidationSchema}
                                    //                 loading={userRolesDataLoading}
                                    //                 mode={field.mode}
                                    //             />
                                    //         </InputWrapper>
                                    //     );
                                    // }
                                    // if (field.name === 'companyId') {
                                    //     return (
                                    //         <InputWrapper span={12} key={field.name}>
                                    //             <SelectField
                                    //                 placeholder={field.label}
                                    //                 options={companyForSelect}
                                    //                 control={control}
                                    //                 name={field.name}
                                    //                 errors={errors}
                                    //                 label={field.label}
                                    //                 className="form-inner__select user-rolese"
                                    //                 validationSchema={CreateUserValidationSchema}
                                    //                 loading={companyDataLoading}
                                    //                 mode={field.mode}
                                    //                 dropdownRender={(menu) => {
                                    //                     return (
                                    //                         <DropdownRenderWrapper>
                                    //                             {menu}
                                    //                             <Divider style={{ margin: '4px 0' }} />
                                    //                             <div>
                                    //                                 <a className="input-wrapper-link" href="/companies/create" target="_blank">
                                    //                                     <Button className="input-wrapper-button">
                                    //                                         <img
                                    //                                             className="dropdown-add-icon"
                                    //                                             src="/images/add-icon-mono.svg"
                                    //                                             alt="Add icon"
                                    //                                         />{' '}
                                    //                                         Add Company
                                    //                                     </Button>
                                    //                                 </a>
                                    //                             </div>
                                    //                         </DropdownRenderWrapper>
                                    //                     );
                                    //                 }}
                                    //             />
                                    //         </InputWrapper>
                                    //     );
                                    // }
                                    return (
                                        <InputWrapper span={12} key={field.name}>
                                            <TextInput
                                                size="large"
                                                placeholder={field.label}
                                                control={control}
                                                name={field.name}
                                                errors={errors}
                                                label={field.label}
                                                type={field.type}
                                                validationSchema={CreateUserValidationSchema}
                                            />
                                        </InputWrapper>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
                </FormInner>
            </Form>
        </ModelInner>
    )
}

export default CreateUser