import React, { useState } from "react";

import { RAISE_BUG, RESOLVE_BUG } from "../../constants/UIConstants";

import {
   DropdownButton,
   DropdownContainer,
   DropdownIcon,
   DropdownItem,
   DropdownItems,
   DropdownList,
} from "./styledComponents";

const options = [
   { label: "Raise Bug", value: RAISE_BUG },
   { label: "Resolve Bug", value: RESOLVE_BUG },
];

const Dropdown = (props) => {
   const { status, setStatus } = props;

   const [open, setOpen] = useState(false);

   const toggleDropdown = () => {
      setOpen(!open);
   };

   const onChange = (option) => {
      toggleDropdown();
      setStatus(option);
   };

   return (
      <DropdownContainer>
         <DropdownButton onClick={toggleDropdown}>
            {status ? status.label : "Select"}
            <DropdownIcon
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
               ></path>
            </DropdownIcon>
         </DropdownButton>
         {open ? (
            <DropdownList>
               <DropdownItems aria-labelledby="dropdown">
                  {options.map((option) => {
                     return (
                        <DropdownItem onClick={() => onChange(option)}>
                           {option.label}
                        </DropdownItem>
                     );
                  })}
               </DropdownItems>
            </DropdownList>
         ) : null}
      </DropdownContainer>
   );
};

export default Dropdown;
