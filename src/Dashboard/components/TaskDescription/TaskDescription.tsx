import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import {
   Description,
   DescriptionContainer,
   DescriptionInput,
   DescriptionText,
   DescriptionTextContainer,
   TaskDescriptionContainer,
} from "./styledComponents";

interface TaskDescriptionProps {
   description: string;
}

const TaskDescription = observer((props: TaskDescriptionProps) => {
   const [editDescription, setEditDescription] = useState(false);
   const [description, setDescription] = useState("");

   useEffect(() => {
      const { description } = props;
      setDescription(description);
   }, [props]);

   const showEditDescription = () => {
      setEditDescription(true);
   };

   const hideEditDescription = () => {
      setEditDescription(false);
   };

   const onChangeDescription = (event) => {
      setDescription(event.target.value);
   };

   const checkForCompletion = (event) => {
      if (event.keyCode === 13) {
         hideEditDescription();
      }
   };

   return (
      <TaskDescriptionContainer>
         <DescriptionText>Description</DescriptionText>
         <DescriptionContainer>
            {editDescription ? (
               <DescriptionInput
                  placeholder="Description..."
                  fullWidth
                  autoFocus
                  onBlur={hideEditDescription}
                  value={description}
                  onChange={onChangeDescription}
                  onKeyDown={checkForCompletion}
               />
            ) : (
               <DescriptionTextContainer onClick={showEditDescription}>
                  <Description>Task Description</Description>
               </DescriptionTextContainer>
            )}
         </DescriptionContainer>
      </TaskDescriptionContainer>
   );
});

export { TaskDescription };
