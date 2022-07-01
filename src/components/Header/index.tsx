import { FC, ReactNode } from "react";
import "./styles.css";

interface Props {
  title: ReactNode;
}

const Header: FC<Props> = ({ title }) => {
  return <div className="header-bar">{title}</div>;
};

export default Header;
