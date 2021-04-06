import React, { ReactNode, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { PopoverContainer } from "./styledComponents";

interface BasePopoverProps {
   children: (onTrigger: Function, show: boolean) => ReactNode;
   mobile?: boolean;
}

const BasePopover = observer((props: BasePopoverProps) => {
   const { children, mobile } = props;

   const ref = useRef<HTMLDivElement>(null);
   const [show, setShow] = useState(false);

   const onClickOutside = (event) => {
      if (ref && !ref.current?.contains(event.target)) {
         setShow(false);
      }
   };

   const onTrigger = (event: React.MouseEvent) => {
      setShow((value) => (value = !value));
   };

   useEffect(() => {
      window.addEventListener("mousedown", onClickOutside);

      return () => {
         window.removeEventListener("mousedown", onClickOutside);
      };
   }, [ref]);

   return (
      <PopoverContainer ref={ref} mobile={mobile}>
         {children(onTrigger, show)}
      </PopoverContainer>
   );
});

export { BasePopover };
