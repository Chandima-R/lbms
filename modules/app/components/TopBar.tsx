import { Button, Dropdown } from 'antd';
import {useState} from "react";
import {SearchBoxWrapper, TopActions, TopBarWrapper} from "@/modules/shared/styles/Layouts";
import {WithRoute} from "@/modules/shared/components/WithRoute";
import {MiniUserAvatar} from "@/modules/app/components/MiniUserAvatar";
import {CaretDownOutlined} from "@ant-design/icons";

const TopBar = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

    const overlay = (
        <>
            {/*<MiniProfile />*/}
            <h1>mini profile</h1>
        </>
    );

    return (
        <TopBarWrapper className="top-bar_header">
            <WithRoute route="directory" key="search-input">
                <SearchBoxWrapper
                    onClick={() => {
                        setIsSearchModalOpen(true);
                    }}
                >
                    <div className="searchTextWrapper">
                        {/*<SearchIcon />*/}
                        <div className="search-placeholder">Search</div>
                    </div>
                </SearchBoxWrapper>
            </WithRoute>
            <div />

            <TopActions>
                <Dropdown overlay={overlay} placement="bottomLeft" trigger={['click']}>
                    <Button className="ant-dropdown-link mini-profile-link" type="link">
                        <MiniUserAvatar size={43} />
                        <CaretDownOutlined />
                    </Button>
                </Dropdown>
            </TopActions>

            {/*<WithRoute route="directory" key="search-modal">*/}
            {/*    <SearchModal setIsSearchModalOpen={setIsSearchModalOpen} isSearchModalOpen={isSearchModalOpen} />*/}
            {/*</WithRoute>*/}
        </TopBarWrapper>
    );
};

export default TopBar;