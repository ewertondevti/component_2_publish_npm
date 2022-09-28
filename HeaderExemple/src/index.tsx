import React, { FC, ReactNode } from "react";
import HeaderMenu from "./HeaderMenu";
import "./Header.scss";

type Props = {
  /**
   * Menu items list
   */
  menuList: Array<string>;
  /**
   * Customize header
   */
  render?: ReactNode;
  /**
   * Customize menu
   */
  renderMenu?: ReactNode;
};

const Header = ({ menuList, render, renderMenu }: Props) => {
  if (!!render) return <>{render}</>;

  return (
    <div className="content">
      <img src="./assets/reactjs.png" alt="Logo" />

      {!!renderMenu ? <>{renderMenu}</> : <HeaderMenu menuList={menuList} />}
    </div>
  );
};
export default Header;
