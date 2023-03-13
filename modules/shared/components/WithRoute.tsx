import { cloneElement, ReactElement } from 'react';

/**
 * Wrap anything with WithRoute component and it will check whether the user have the route we pass and render children based on that. If the user is a super admin, all is visible.
 * @param children
 * @param route
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

interface WithRouteProps {
    children: ReactElement<any>;
    route: string;
    props?: any;
}

export const WithRoute = ({ children, route, ...props }: WithRouteProps) => {
    // const selectedUserRole = useUserStore((state) => state.selectedUserRole);
    // let userHasRoute = selectedUserRole?.routes?.find((storeRoute) => storeRoute.name === route);
    // const routeGroup = selectedUserRole?.routeGroups?.find((storeRouteGroup) => storeRouteGroup.name === route);
    //
    // if (routeGroup) {
    //     userHasRoute = selectedUserRole?.routes?.find((storeRoute) => storeRoute.routeGroup === routeGroup.id);
    // }
    //
    // if (userHasRoute || (route === 'management' && selectedUserRole?.name === 'superAdmin')) {
    //     return <>{cloneElement(children, { ...props })}</>;
    // }

    return <div style={{ display: 'none' }} />;
};
