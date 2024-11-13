import SidebarNav from './SidebarNav';
// Tabs
import MapTab from './../components/MapTab';
import FrameTab from './../components/FrameTab';
import GroupTab from './../components/GroupTab';
import { useState } from 'react';
import { TabMenuEnum } from '../global/enum';
import { createMenus } from '../global/data';
import { TMenuItem } from '../global/types';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(TabMenuEnum.MAP as string);
  const handleActiveTab = (tab_name: string) => {
    setActiveTab(tab_name);
  };

  const Menus: TMenuItem[] = createMenus(handleActiveTab);
  return (
    <>
      <SidebarNav Menus={Menus} activeTab={activeTab} />
      {activeTab === TabMenuEnum.MAP && <MapTab />}
      {activeTab === TabMenuEnum.FRAME && <FrameTab />}
      {activeTab === TabMenuEnum.GROUP && <GroupTab />}
    </>
  );
};

export default Sidebar;
