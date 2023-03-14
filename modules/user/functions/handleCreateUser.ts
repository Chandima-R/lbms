import {UseFormReturn} from "react-hook-form";
import {Dispatch, SetStateAction} from "react";
import {CreateUserDataType} from "@/modules/shared/components/CreateUser";

interface HandleCreateUserArgs {
    data: CreateUserDataType;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsCreateUserModalVisible: Dispatch<SetStateAction<boolean>>;
    reset: UseFormReturn['reset'];
}

export const handleCreateUser = async ({
    data,
    setIsLoading,
    setIsCreateUserModuleVisible,
    reset,
}: HandleCreateUserArgs) => {
    try{
        setIsLoading(true)

        await function createuser(){
            console.log(111, data)
        }
    }catch(error){
        console.log(999, error)
    }
}