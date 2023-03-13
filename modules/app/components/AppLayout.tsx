import {memo, useEffect} from "react";
import {AppLayoutProps} from "@/modules/app/types";
import {useAuthState} from "react-firebase-hooks/auth";
import {firebaseAuth} from "@/modules/shared/utils/firebase";
import {useAtom} from "jotai";
import {appLoadingAtom} from "@/modules/app/store/appStore";
import {useRouter} from "next/router";
import {sessionRoutes} from "@/modules/app/data";
import TopBar from "@/modules/app/components/TopBar";
import SideBar from "@/modules/app/components/SideBar";
import {Layout} from "antd";

const { Content, Footer } = Layout;

// eslint-disable-next-line react/display-name
const AppLayout = memo(({children}: AppLayoutProps) => {
    const [user, isFirebaseLoading] = useAuthState(firebaseAuth);
    const [appLoading, setAppLoading] = useAtom(appLoadingAtom);
    const router = useRouter();

    useEffect(() => {
        setAppLoading(true);

        if (!isFirebaseLoading) {
            if (user && sessionRoutes.includes(router.pathname)) {
                router.push('/').finally(() => {
                    setAppLoading(false);
                });
            } else if (!user && !sessionRoutes.includes(router.pathname)) {
                router.push('/login').finally(() => {
                    setAppLoading(false);
                });
            } else {
                setAppLoading(false);
            }
        } else {
            setAppLoading(false);
        }
    }, [isFirebaseLoading, router, setAppLoading]);

    if (sessionRoutes.includes(router.pathname)) {
        return <div>{children}</div>;
    }

    if (!user) {
        return <div />;
    }

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout>
                <TopBar />
                <Content>{children}</Content>
                <Footer style={{ textAlign: 'center' }}>
                    {'Copyright © '}
                    <a color="inherit" href="#">
                        Lower Body Management System
                    </a>{' '}
                    {new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
    )
})

export default AppLayout