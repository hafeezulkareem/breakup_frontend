import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

import "./styles.css";

interface PopoverProps {
   popoverButton: React.ReactNode;
   onClickItem: (value: string) => void;
   list: Array<{ label: string; value: string }>;
   menuListStyles: Object;
}

const Popover = (props: PopoverProps) => {
   const { popoverButton, onClickItem, list, menuListStyles } = props;

   const onSelect = (value: string) => {
      onClickItem(value);
   };

   return (
      <Menu>
         <MenuButton className="menu-button">{popoverButton}</MenuButton>
         <MenuList className="menu-list" style={menuListStyles}>
            {list.map((item) => {
               const { label, value } = item;
               return (
                  <MenuItem
                     className="menu-item"
                     onSelect={() => onSelect(value)}
                     key={value}
                  >
                     {label}
                  </MenuItem>
               );
            })}
         </MenuList>
      </Menu>
   );
};

Popover.defaultProps = {
   menuListStyles: {},
};

export { Popover };
