import BodyClassName from 'react-body-classname';
import {AppContentCard, InnerPageTitle} from "@/modules/shared/components/StyledComponents";
import UserFilters from "@/modules/shared/components/UserFilters";
import {useState} from "react";
import {UserFiltersType} from "@/modules/types";
const ManagerUsers = () => {
    const [filters, setFilters] = useState<UserFiltersType>({
        userRole: null,
        userNameOrJob: null,
    });

    return(
        <BodyClassName>
            <AppContentCard paddingside="30px" className="list-data">
                <InnerPageTitle title="User Management" />
                <UserFilters setFilters={setFilters} filters={filters} />
            </AppContentCard>
        </BodyClassName>
    )
}

export default ManagerUsers