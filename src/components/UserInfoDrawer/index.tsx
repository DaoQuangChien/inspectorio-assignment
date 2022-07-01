import { FC, useState } from "react";
import axios from "axios";
import Drawer from "antd/lib/drawer";
import Button from "antd/lib/button";
import Header from "../Header";
import { Avatar, List, Skeleton } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./styles.css";

interface Props {
  userName: string;
}

interface UserData {
  name: string;
  location: string;
  avatar_url: string;
}

const UserInfoDrawer: FC<Props> = ({ userName }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData[]>([]);
  const handleFetchData = async () => {
    setVisible(true);
    setLoading(true);
    try {
      const res = await axios.get<UserData>(
        `https://api.github.com/users/${userName}`
      );

      setUserData([res.data]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={handleFetchData}>
        {userName}
      </Button>
      <Drawer
        title={
          <Header
            title={
              <div className="user-info-header">
                <button className="back-btn" onClick={() => setVisible(false)}>
                  <LeftOutlined /> Back
                </button>
                <span className="title">Person</span>
              </div>
            }
          />
        }
        width="100%"
        closable={false}
        visible={visible}
        headerStyle={{
          padding: 0,
        }}
      >
        <List
          bordered
          loading={loading}
          dataSource={userData}
          renderItem={(item) => (
            <List.Item>
              <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={item.name}
                  description={item.location}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default UserInfoDrawer;
