import { Button, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import DashboardSidebar from "./DashboardSidebar";
const { Header, Content } = Layout;

const DashboardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <DashboardSidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/*render Outlet */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
