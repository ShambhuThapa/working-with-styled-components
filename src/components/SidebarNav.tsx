import styled from 'styled-components';
import Icon from './Icon';
import { MenuProps, TMenuItem, TMenuProps } from '../global/types';

const Sidebar = styled.div`
  width: 60px;
  height: 100vh;
  box-shadow: ${({ theme: { shadows } }) => shadows.rightShadow};
`;

const Menu = styled.div<MenuProps>`
  cursor: pointer;
  margin: 8px;
  background: ${({ is_active, theme: { colors } }) => (is_active ? colors?.primary : '')};
  border-radius: 5px;
`;

const SidebarNav = (props: TMenuProps) => {
  return (
    <Sidebar>
      {props.Menus?.map((menu: TMenuItem) => {
        return (
          <Menu
            key={menu.key}
            is_active={props?.activeTab === menu.key ? true : false}
            onClick={() => menu.tabAction(menu.key)}
          >
            {props?.activeTab === menu.key ? (
              <Icon icon={menu.active_icon} alt={menu.name} />
            ) : (
              <>
                <Icon icon={menu.inactive_icon} alt={menu.name} />
              </>
            )}
          </Menu>
        );
      })}
    </Sidebar>
  );
};

export default SidebarNav;
