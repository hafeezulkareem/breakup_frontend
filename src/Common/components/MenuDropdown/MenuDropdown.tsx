import React from "react";
import { MdExpandMore } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { clearUserSession } from "../../utils/StorageUtils";

import BaseDropdown from "./../BaseDropdown";
import { DropDownButton, Menu, MenuItem } from "./styledComponents";

interface MenuDropdownProps {
   user?: string;
}
const MenuDropdown = (props: MenuDropdownProps) => {
   const { user } = props;
   const history = useHistory();

   const logout = () => {
      clearUserSession();
      history.replace("/sign-in");
   };

   return (
      <BaseDropdown>
         {(onTrigger, show) => (
            <>
               <DropDownButton onClick={() => onTrigger()}>
                  <h4 className="ml-2 md:ml-4 mr-2 font-bold">{user}</h4>
                  <MdExpandMore />
               </DropDownButton>
               {show && (
                  <Menu>
                     <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
               )}
            </>
         )}
      </BaseDropdown>
   );
};

export default MenuDropdown;
