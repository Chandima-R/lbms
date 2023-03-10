import { ReactNode } from 'react';

export interface AppLayoutProps {
    children: ReactNode;
}


export interface Route {
    name: string;
    path: string;
}

export interface RouteGroup {
    name: string;
    routes: Route[];
}
