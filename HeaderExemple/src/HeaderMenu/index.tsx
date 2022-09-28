import { StarOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const { Item } = Menu;

type Props = {
  /**
   * Menu items list
   */
  menuList: Array<string>;
};

const HeaderMenu = ({ menuList }: Props) => {
  return (
    <Menu mode="horizontal" theme="dark">
      {menuList?.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </Menu>
  );
};
export default HeaderMenu;
