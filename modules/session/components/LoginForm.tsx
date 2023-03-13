import {useState} from "react";
import {useRouter} from "next/router";
import {
    BlockButtonLogin,
    FormHeader,
    FormWrapper,
    LoginButtonContainer,
    SessionFrom,
    TextLabel
} from "@/modules/shared/components/StyledComponents";
// @ts-ignore
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "@firebase/auth";
import {SubmitHandler, useForm} from "react-hook-form";
import TextInput from "@/modules/shared/components/TextInput";
import {PasswordInput} from "@/modules/shared/components/PasswordInput";
import {firebaseAuth} from "@/modules/shared/utils/firebase";
import toast from "react-hot-toast";

const defaultValues = {
    username: '',
    password: '',
    rememberMe: false,
};

type LoginFormInputs = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({ defaultValues });

    async function logIn(email: string, password: string) {
        try {
            setIsLoading(true);
            await signInWithEmailAndPassword(firebaseAuth, email, password);
            setIsLoading(false);
            router.push('/').then();
        } catch (error) {
            setIsLoading(false);

            toast.error('Something went wrong. Please try again.');
        }
    }

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        logIn(data.email, data.password);
    };

    return(
        <FormWrapper>
            <FormHeader>
                <h1 className="form-header-title">Log In</h1>
            </FormHeader>

            <SessionFrom onFinish={handleSubmit(onSubmit)}prefixCls="login-form">
                <TextLabel>Email</TextLabel>
                <TextInput
                    className="text-input-box"
                    disabled={isLoading}
                    name="email"
                    placeholder="Enter Email"
                    size="large"
                    control={control}
                />
                <TextLabel>Password</TextLabel>
                <PasswordInput
                    className="text-input-box"
                    disabled={isLoading}
                    name="password"
                    placeholder="Enter Password"
                    password
                    size="large"
                    control={control}
                    errors={errors}
                />
                <LoginButtonContainer>
                    <BlockButtonLogin
                        className="login-button"
                        data-test="signin-submit"
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={isLoading}
                    >
                        Log in
                    </BlockButtonLogin>
                </LoginButtonContainer>
            </SessionFrom>
        </FormWrapper>
    )
}

export default LoginForm