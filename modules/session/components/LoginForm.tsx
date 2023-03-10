import {useState} from "react";
import {useRouter} from "next/router";
import {
    BlockButtonLogin, ClickLink,
    FormHeader,
    FormWrapper,
    GoogleSignButton, LoginButtonContainer,
    SeparatorWithText, SessionFrom, TextLabel, TextWrap
} from "@/modules/shared/components/StyledComponents";
// @ts-ignore
import { GoogleAuthProvider, signInWithPopup} from "@firebase/auth";
import CheckBoxField from "@/modules/shared/components/CheckBoxField";
import {useForm} from "react-hook-form";
import TextInput from "@/modules/shared/components/TextInput";
import {PasswordInput} from "@/modules/shared/components/PasswordInput";

const defaultValues = {
    username: '',
    password: '',
    rememberMe: false,
};
const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isForgotPassword, setForgetPasswordView] = useState(false);
    const router = useRouter();
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({ defaultValues });

    const showForgetPassword = () => {
        setForgetPasswordView(true);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);

        // localStorage.setItem('rememberMe', rememberMe.toString());
        //
        // if (rememberMe) {
        //     setAppPersistentStorage({ storage: 'localStorage' });
        // } else {
        //     setAppPersistentStorage({ storage: 'sessionStorage' });
        // }
        //
        // try {
        //     await Auth.signIn(data.username, data.password);
        //
        //     const { isAccountInitiated } = await fetchUserInformation();
        //     if (!isAccountInitiated) {
        //         await router.push('/onboarding');
        //     } else {
        //         await router.push('/profile');
        //     }
        // } catch (error) {
        //     setIsLoading(false);
        //     logout().then();
        //
        //     if (error.code === 'UserNotConfirmedException') {
        //         setUsername(data.username);
        //         setPassword(data.password);
        //
        //         setIsConfirmSignupMode(true);
        //     } else {
        //         notification.error({
        //             message: 'Error',
        //             description: 'The username or password you entered does not match our system record.',
        //         });
        //     }
        // }
    };

    return(
        <FormWrapper>
            <FormHeader>
                <div className="chameleon-logo-wrapper">
                    <img alt="LBMS Logo" width={307} height={36} src="/media/images/logo.png" />
                </div>
                <h1 className="form-header-title">Log In</h1>
                <p className="form-header-subtitle -with-text-left">Welcome to Lower Body Monitoring System</p>
            </FormHeader>
            <GoogleSignButton
                block
                size="large"
            >
                <img src="/media/images/google-logo-icon.svg" alt="Google Logo" />{' '}
                <span className="text-label">Sign in with Google</span>
            </GoogleSignButton>
            <p>
                {/* Or Sign in with Username */}
                <SeparatorWithText>Or Sign In With Username</SeparatorWithText>
            </p>

            <SessionFrom onFinish={handleSubmit(onSubmit)} prefixCls="login-form">
                <TextLabel>Email</TextLabel>
                <TextInput
                    className="text-input-box"
                    disabled={isLoading}
                    name="username"
                    placeholder="Enter Username"
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

            </SessionFrom>
            <LoginButtonContainer>
                <CheckBoxField
                    errors={errors}
                    name="rememberMe"
                    label="Remember me"
                    control={control}
                    labelCol={{ span: 24 }}
                />
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

            <TextWrap align="left">
                <ClickLink role="button" onClick={showForgetPassword}>
                    Forgot Password?
                </ClickLink>
            </TextWrap>
        </FormWrapper>
    )
}

export default LoginForm