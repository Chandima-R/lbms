import {Col, Row} from "antd";
import {BackgroundSection, SectionContainer} from "@/modules/shared/components/StyledComponents";
import LoginForm from "@/modules/session/components/LoginForm";

const Login = () => {
    return(
        <Row>
            <Col xs={0} sm={12} lg={16}>
                <BackgroundSection />
            </Col>
            <Col xs={24} sm={12} lg={8}>
                <SectionContainer>
                    <LoginForm />
                </SectionContainer>
            </Col>
        </Row>
    )
}

export default Login