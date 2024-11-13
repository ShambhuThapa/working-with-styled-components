export type TMenuItem = {
    key: string;
    name: string;
    active_icon: string;
    inactive_icon: string;
    tabAction: (tab_key: string) => void;
  };
  export type TMenuProps = {
    activeTab: string;
    Menus: TMenuItem[];
  };
  export type MenuProps= {
    is_active: boolean;
  }