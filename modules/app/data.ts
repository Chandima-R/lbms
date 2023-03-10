import {Route, RouteGroup} from "@/modules/app/types";

export const dashboardRoute: Route = {
    name: 'Dashboard',
    path: '/',
};

export const routeGroups: RouteGroup[] = [
    {
        name: 'General',
        routes: [
            dashboardRoute,
            {
                name: 'Orders',
                path: '/orders',
            },
        ],
    },
    {
        name: 'Administration',
        routes: [
            {
                name: 'Modules & Features',
                path: '/modules-features',
            },
        ],
    },
];

export const routeNames: Route[] = routeGroups.reduce<Route[]>(
    (routes, item) => [...routes, ...item.routes.map((route) => route)],
    [],
);

export const sessionRoutes = ['/login', '/forgot-password'];
