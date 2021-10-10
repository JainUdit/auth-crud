import { useEffect } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { PageHeader, Button, notification } from "antd";
import { Switch, Route, withRouter } from "react-router-dom";
import { UsersList } from "./UsersList";
import EditUsers from "./EditUsers";
import { StyledPageHeaderWrapper } from "./Style";

const UserDetailsPage = (props) => {
  const { requestLogout } = props;

  const openNotification = () => {
    notification.open({
      message: "Happy Birthday!",
      description: "Wishing you a very happy birthday!!!",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  useEffect(() => {
    const usersData = localStorage.getItem("userDetails");
    const user = usersData && JSON.parse(usersData);
    if (user && user.birthdate) {
      const monthDiff = new Date(user.birthdate).getMonth() - new Date().getMonth();
      const dateDiff = new Date(new Date(user.birthdate)).getDate() - new Date().getDate();
      if (monthDiff === 0 && dateDiff === 0) {
        openNotification();
      }
    }
  }, []);

  const handleClick = () => requestLogout();

  return (
    <>
      <StyledPageHeaderWrapper>
        <PageHeader
          ghost={false}
          title="User Details"
          extra={[
            <Button key="1" type="primary" onClick={handleClick}>
              Logout
            </Button>,
          ]}
        />
      </StyledPageHeaderWrapper>

      <Switch>
        <Route
          exact
          path="/list"
          name="Users List View"
          render={(propsData) => <UsersList {...propsData} {...props} />}
        />
        <Route
          exact
          path="/list/add"
          name="Add Users"
          render={(propsData) => <EditUsers {...propsData} {...props} />}
        />
        <Route
          exact
          path="/list/edit/:id"
          name="Edit Users"
          render={(propsData) => (
            <EditUsers {...propsData} {...props} isEditRoute />
          )}
        />
      </Switch>
    </>
  );
};

export default withRouter(UserDetailsPage);
