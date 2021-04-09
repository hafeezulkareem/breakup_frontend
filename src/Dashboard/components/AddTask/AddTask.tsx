import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { BiBookAdd } from "react-icons/bi";

import { colors } from "../../../Common/themes/colors";
import Button from "../../../Common/components/Button";

import {
   AddButton,
   AddTaskButton,
   AddTaskButtonText,
   AddTaskInput,
   AddTaskInputContainer,
   ButtonsContainer,
   CancelButton,
} from "./styledComponents";

const AddTask = observer((props) => {
   const [addTask, setAddTask] = useState(false);
   const [taskTitle, setTaskTitle] = useState("");

   const hideAddTask = () => {
      setAddTask(false);
      setTaskTitle("");
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
            <AddButton color={Button.colors.primary}>Add</AddButton>
            <CancelButton color={Button.colors.danger} onClick={hideAddTask}>
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
