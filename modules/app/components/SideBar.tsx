import {SideBarWrapper, SideMenuWrapper} from "@/modules/shared/styles/SideBar";
import {Menu} from "antd";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {WithRoute} from "@/modules/shared/components/WithRoute";

interface Key {
    key: string;
    parent?: string;
}

const SideBar = () => {
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onOpenChange = (newOpenKeys) => {
        setOpenKeys(newOpenKeys);
    };

    const onMenuItemClick = ({ keyPath }) => {
        if (!openKeys.find((openKey) => keyPath.includes(openKey))) setOpenKeys([]);
    };

    return(
        <SideBarWrapper>
            <Menu
                theme="dark"
                mode="inline"
                selectable
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                defaultSelectedKeys={selectedKeys}
                defaultOpenKeys={openKeys}
                onOpenChange={onOpenChange}
                onSelect={({ keyPath }) => {
                    setSelectedKeys(keyPath);
                }}
            >
                <Menu.Item key="title" className="app-title">
                    <Link href="/profile">
                        <img src="/images/cc-logo.svg" width={200} alt="LBMS" key={1} />
                    </Link>
                </Menu.Item>

                <SideMenuWrapper key="sideMenu">
                    <Link href="/users">
                        <p>Users</p>
                    </Link>
                </SideMenuWrapper>

                <SideMenuWrapper key="sideMenu">
                    <Link href="/documents">
                        <p>Documents</p>
                    </Link>
                </SideMenuWrapper>
            </Menu>
        </SideBarWrapper>
    )
}

export default SideBar