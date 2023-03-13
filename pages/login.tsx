import {Col, Row} from "antd";
import {BackgroundSection, SectionContainer} from "@/modules/shared/components/StyledComponents";
import LoginForm from "@/modules/session/components/LoginForm";

const Login = () => {
    return(
        <Row>
            <Col xs={24} sm={24} lg={24}>
                <SectionContainer>
                    <LoginForm />
                </SectionContainer>
            </Col>
        </Row>
    )
}

export default Login