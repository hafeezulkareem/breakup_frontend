import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { BiBookAdd } from "react-icons/bi";
import cogoToast from "cogo-toast";

import { colors } from "../../../Common/themes/colors";
import Button from "../../../Common/components/Button";
import { useStores } from "../../../Common/stores";
import { isFetching } from "../../../Common/utils/APIUtils";

import {
   AddButton,
   AddTaskButton,
   AddTaskButtonText,
   AddTaskInput,
   AddTaskInputContainer,
   ButtonsContainer,
   CancelButton,
} from "./styledComponents";

interface AddTaskProps {
   projectId: string;
   stageId: string;
}

const AddTask = observer((props: AddTaskProps) => {
   const { projectId, stageId } = props;

   const [addTask, setAddTask] = useState(false);
   const [taskTitle, setTaskTitle] = useState("");
   const {
      tasksStore: { createTaskAPI, createTaskAPIStatus, createTaskAPIError },
   } = useStores();

   const hideAddTask = () => {
      setAddTask(false);
      setTaskTitle("");
   };

   const onSuccessCreateTaskAPI = () => {
      cogoToast.success("Task created successfully", {
         position: "bottom-center",
      });
      hideAddTask();
   };

   const onFailureCreateTaskAPI = () => {
      cogoToast.error(createTaskAPIError, {
         position: "bottom-center",
      });
   };

   const validateAndAddTask = (event) => {
      if (taskTitle.length) {
         createTaskAPI(
            projectId,
            stageId,
            { title: taskTitle },
            onSuccessCreateTaskAPI,
            onFailureCreateTaskAPI
         );
      } else {
         cogoToast.error("Task title is required", {
            position: "bottom-center",
         });
      }
   };

   return addTask ? (
      <AddTaskInputContainer>
         <AddTaskInput
            placeholder={"Task title"}
            multiline
            rows={3}
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            autoFocus={true}
         />
         <ButtonsContainer>
            <AddButton
               color={Button.colors.primary}
               onClick={validateAndAddTask}
               loading={isFetching(createTaskAPIStatus)}
            >
               Add
            </AddButton>
            <CancelButton
               color={Button.colors.danger}
               onClick={hideAddTask}
               disabled={isFetching(createTaskAPIStatus)}
            >
               Cancel
            </CancelButton>
         </ButtonsContainer>
      </AddTaskInputContainer>
   ) : (
      <AddTaskButton disableShadow onClick={() => setAddTask(true)}>
         <AddTaskButtonText>Add task</AddTaskButtonText>
         <BiBookAdd size={18} color={colors.pictonBlue} />
      </AddTaskButton>
   );
});

export { AddTask };
