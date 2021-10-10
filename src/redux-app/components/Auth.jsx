import { Tabs, PageHeader } from "antd";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { StyledPageHeaderWrapper, StyledTabsWrapper } from "./Style";

const { TabPane } = Tabs;

export const Auth = ({ requestLogin, requestRegistration }) => {
  return (
    <>
      <StyledPageHeaderWrapper>
        <PageHeader ghost={false} title="SignUp Page" />
      </StyledPageHeaderWrapper>
      <StyledTabsWrapper defaultActiveKey="1" tabPosition="top">
        <TabPane tab="Login" key="1">
          <LoginForm requestLogin={requestLogin} />
        </TabPane>
        <TabPane tab="Registration" key="2">
          <RegistrationForm requestRegistration={requestRegistration} />
        </TabPane>
      </StyledTabsWrapper>
    </>
  );
};
