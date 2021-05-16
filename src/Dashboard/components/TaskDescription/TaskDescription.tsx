import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import cogoToast from "cogo-toast";
import { FiAlignLeft } from "react-icons/fi";

import { colors } from "../../../Common/themes/colors";

import { TaskModel } from "../../stores/models/TaskModel";

import {
   Description,
   DescriptionContainer,
   DescriptionIconAndText,
   DescriptionInput,
   DescriptionPlaceholder,
   DescriptionText,
   DescriptionTextContainer,
   TaskDescriptionContainer,
} from "./styledComponents";

interface TaskDescriptionProps {
   task: TaskModel | null;
}

const TaskDescription = observer((props: TaskDescriptionProps) => {
   const { task } = props;

   const [editDescription, setEditDescription] = useState(false);
   const [description, setDescription] = useState("");

   useEffect(() => {
      setDescription(task ? task.description : "");
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

   const onSuccessUpdateDescription = () => {
      cogoToast.success("Description updated successfully", {
         position: "bottom-center",
      });
      hideEditDescription();
   };

   const onFailureUpdateDescription = (error: string) => {
      cogoToast.error(error, { position: "bottom-center" });
   };

   const updateDescription = () => {
      if (description !== task?.description) {
         task?.updateDescriptionAPI(
            { description },
            onSuccessUpdateDescription,
            onFailureUpdateDescription
         );
      } else {
         hideEditDescription();
      }
   };

   const checkForCompletion = (event) => {
      if (event.keyCode === 13) {
         updateDescription();
      }
   };

   return (
      <TaskDescriptionContainer>
         <DescriptionIconAndText>
            <FiAlignLeft size={22} color={colors.sanJuan} />
            <DescriptionText>Description</DescriptionText>
         </DescriptionIconAndText>
         <DescriptionContainer>
            {editDescription ? (
               <DescriptionInput
                  placeholder="Description..."
                  fullWidth
                  autoFocus
                  onBlur={updateDescription}
                  value={description}
                  onChange={onChangeDescription}
                  onKeyDown={checkForCompletion}
               />
            ) : (
               <DescriptionTextContainer onClick={showEditDescription}>
                  <Description>
                     {task?.description === "" ? (
                        <DescriptionPlaceholder>
                           Add description...
                        </DescriptionPlaceholder>
                     ) : (
                        task?.description
                     )}
                  </Description>
               </DescriptionTextContainer>
            )}
         </DescriptionContainer>
      </TaskDescriptionContainer>
   );
});

export { TaskDescription };
