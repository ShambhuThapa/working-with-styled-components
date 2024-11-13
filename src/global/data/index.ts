
//Icons-Gray
import GrayMap from '/icons/Map.svg';
import GrayFrame from '/icons/Frame.svg';
import GrayGroup from '/icons/Group.svg';
// Icons-white
import WhiteMap from '/icons/WhiteMap.svg';
import WhiteFrame from '/icons/WhiteFrame.svg';
import WhiteGroup from '/icons/WhiteGroup.svg';
import { TMenuItem } from '../types';
 

  export const createMenus = (handleActiveTab: (tab_name: string) => void): TMenuItem[] => [
    { key: 'map', name: 'map', inactive_icon: GrayMap, active_icon: WhiteMap, tabAction: () => handleActiveTab('map') },
    { key: 'frame', name: 'frame', inactive_icon: GrayFrame, active_icon: WhiteFrame, tabAction: () => handleActiveTab('frame') },
    { key: 'group', name: 'group', inactive_icon: GrayGroup, active_icon: WhiteGroup, tabAction: () => handleActiveTab('group') },
  ];