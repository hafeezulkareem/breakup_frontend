import React from "react";
import { observer } from "mobx-react-lite";
import Modal from "react-modal";
import { RiCloseCircleFill } from "react-icons/ri";

import { useStores } from "../../../Common/stores";
import { colors } from "../../../Common/themes/colors";

import { TaskDescription } from "../TaskDescription";
import { TaskAssignMember } from "../TaskAssignMember";

import {
   TaskDetailsContainer,
   TaskDetailsLeftContainer,
   TaskDetailsRightContainer,
   TaskModalCloseButton,
   TaskModalContainer,
   TaskRightSectionTitle,
   TaskTitle,
   TaskTitleBar,
} from "./styledComponents";
import "./styles.css";

const TaskModal = observer((props) => {
   const {
      taskUIStore: { showTaskModal, updateTaskModalVisibility, task },
   } = useStores();

   const closeModal = () => {
      updateTaskModalVisibility(false);
   };

   return (
      <Modal
         isOpen={showTaskModal}
         onRequestClose={closeModal}
         className="task-modal"
         overlayClassName="task-overlay"
         closeTimeoutMS={300}
         ariaHideApp={false}
      >
         <TaskModalContainer>
            <TaskTitleBar>
               <TaskTitle>Task Title</TaskTitle>
               <TaskModalCloseButton disableShadow onClick={closeModal}>
                  <RiCloseCircleFill size={20} color={colors.persianRed} />
               </TaskModalCloseButton>
            </TaskTitleBar>
            <TaskDetailsContainer>
               <TaskDetailsLeftContainer>
                  <TaskDescription task={task} />
               </TaskDetailsLeftContainer>
               <TaskDetailsRightContainer>
                  <TaskRightSectionTitle>Add to Card</TaskRightSectionTitle>
                  <TaskAssignMember />
               </TaskDetailsRightContainer>
            </TaskDetailsContainer>
         </TaskModalContainer>
      </Modal>
   );
});

export { TaskModal };
