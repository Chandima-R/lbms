import { Dispatch, SetStateAction, useState } from 'react';
import { Col, Input, Row } from 'antd';
import {TopButtonWrapper} from "@/modules/shared/styles/Elements";
import {AppButton, PopModel} from "@/modules/shared/components/StyledComponents";
import CreateUser from "@/modules/shared/components/CreateUser";

interface UserFiltersProps {
    setFilters: Dispatch<SetStateAction<UserFiltersType>>;
    filters: UserFiltersType;
}

const UserFilters = ({ setFilters, filters }: UserFiltersProps) => {
    // const { data: userRolesData, loading: userRolesDataLoading } = useQuery<
    //     UserRolesForSelectQuery,
    //     UserRolesForSelectQueryVariables
    // >(USER_ROLES_FOR_SELECT, {
    //     fetchPolicy: 'no-cache',
    // });
    //
    const [isCreateUserModalVisible, setIsCreateUserModalVisible] = useState<boolean>(false);

    const showModal = () => {
        setIsCreateUserModalVisible(true);
    };

    const removeModal = () => {
        setIsCreateUserModalVisible(false);
    };

    return (
        <>
            <TopButtonWrapper>
                <div>
                    <Col>
                        <AppButton type="primary" size="large" block onClick={showModal}>
                            Add New User
                        </AppButton>
                    </Col>
                </div>

                <PopModel
                    visible={isCreateUserModalVisible}
                    onCancel={removeModal}
                    footer={null}
                    maskClosable={false}
                    closable={false}
                    destroyOnClose
                >
                    <CreateUser   setIsCreateUserModalVisible={setIsCreateUserModalVisible}/>
                </PopModel>
            </TopButtonWrapper>

            {/*<FilterBarWrapper>*/}
            {/*    <Col span={16} offset={8}>*/}
            {/*        <Row gutter={16} justify="end">*/}
            {/*            <Col span={5}>*/}
            {/*                <FilterDropdownField*/}
            {/*                    showSearch*/}
            {/*                    placeholder="User Type"*/}
            {/*                    loading={userRolesDataLoading}*/}
            {/*                    onSelect={(value) => {*/}
            {/*                        setFilters({*/}
            {/*                            ...filters,*/}
            {/*                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
            {/*                            // @ts-ignore*/}
            {/*                            userRole: value.value,*/}
            {/*                        });*/}
            {/*                    }}*/}
            {/*                    onClear={() => {*/}
            {/*                        setFilters({*/}
            {/*                            ...filters,*/}
            {/*                            userRole: null,*/}
            {/*                        });*/}
            {/*                    }}*/}
            {/*                    options={*/}
            {/*                        userRolesData?.user_role.map((userRole) => ({*/}
            {/*                            label: userRole.name,*/}
            {/*                            key: userRole.id,*/}
            {/*                        })) || []*/}
            {/*                    }*/}
            {/*                />*/}
            {/*            </Col>*/}

            {/*            <Col span={7}>*/}
            {/*                <Input*/}
            {/*                    prefix={<SearchIcon />}*/}
            {/*                    size="large"*/}
            {/*                    allowClear*/}
            {/*                    placeholder="Search"*/}
            {/*                    onChange={(event) => {*/}
            {/*                        setFilters({*/}
            {/*                            ...filters,*/}
            {/*                            userNameOrJob: event.target.value,*/}
            {/*                        });*/}
            {/*                    }}*/}
            {/*                    className="user-search"*/}
            {/*                />*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Col>*/}
            {/*</FilterBarWrapper>*/}
        </>
    );
};

export default UserFilters;
