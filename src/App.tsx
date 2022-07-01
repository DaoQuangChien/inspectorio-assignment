import React, { FC } from "react";
import Typography from "antd/lib/typography";
import Space from "antd/lib/space";
import { Header, UserInfoDrawer } from "./components";
import { topFive } from "./model/data";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Header title="Home" />
      <div className="content">
        <Typography.Title>Top 5 GitHub Users</Typography.Title>
        <Typography.Paragraph>
          Tap the username to see more information
        </Typography.Paragraph>
        <Space wrap>
          {topFive.map((name) => (
            <UserInfoDrawer userName={name} key={name} />
          ))}
        </Space>
      </div>
    </div>
  );
};

export default App;
