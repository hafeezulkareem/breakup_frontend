import React from "react";
import { observer } from "mobx-react-lite";
import Modal from "react-modal";
import { RiCloseCircleFill } from "react-icons/ri";
import Avatar from "react-avatar";
import cogoToast from "cogo-toast";

import { useStores } from "../../../Common/stores";
import { colors } from "../../../Common/themes/colors";
import Button from "../../../Common/components/Button";

import { TaskDescription } from "../TaskDescription";
import { TaskAssignMember } from "../TaskAssignMember";

import {
   DeleteButton,
   TaskAssigneeDetailsContainer,
   TaskDetailsContainer,
   TaskDetailsLeftContainer,
   TaskDetailsRightContainer,
   TaskFooter,
   TaskModalCloseButton,
   TaskModalContainer,
   TaskRightSectionTitle,
   TaskTitle,
   TaskTitleBar,
} from "./styledComponents";
import "./styles.css";
import { isFetching } from "../../../Common/utils/APIUtils";

const TaskModal = observer((props) => {
   const {
      taskUIStore: { showTaskModal, updateTaskModalVisibility, task, stageId },
      tasksStore: { deleteTaskAPI, deleteTaskAPIStatus },
   } = useStores();

   const closeModal = () => {
      updateTaskModalVisibility(false);
   };

   let assignMemberAPI, assignee, title;
   if (task) {
      assignMemberAPI = task.assignMemberAPI;
      assignee = task.assignee;
      title = task.title;
   }

   const onFailureTaskDeleteAPI = (error: string) => {
      cogoToast.error(error, { position: "bottom-center" });
   };

   const onSuccessTaskDeleteAPI = () => {
      closeModal();
      cogoToast.success("Task deleted successfully", {
         position: "bottom-center",
      });
   };

   const deleteTask = () => {
      deleteTaskAPI(
         stageId,
         task?.id as string,
         onSuccessTaskDeleteAPI,
         onFailureTaskDeleteAPI
      );
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
               <TaskTitle>{title}</TaskTitle>
               <TaskModalCloseButton disableShadow onClick={closeModal}>
                  <RiCloseCircleFill size={20} color={colors.persianRed} />
               </TaskModalCloseButton>
            </TaskTitleBar>
            <TaskAssigneeDetailsContainer>
               <Avatar
                  name={assignee ? assignee.name : ""}
                  size="40"
                  round="100%"
               />
            </TaskAssigneeDetailsContainer>
            <TaskDetailsContainer>
               <TaskDetailsLeftContainer>
                  <TaskDescription task={task} />
               </TaskDetailsLeftContainer>
               <TaskDetailsRightContainer>
                  <TaskRightSectionTitle>Add to Card</TaskRightSectionTitle>
                  <TaskAssignMember assignMemberAPI={assignMemberAPI} />
               </TaskDetailsRightContainer>
            </TaskDetailsContainer>
            <TaskFooter>
               <DeleteButton
                  color={Button.colors.danger}
                  loading={isFetching(deleteTaskAPIStatus)}
                  onClick={deleteTask}
               >
                  Delete
               </DeleteButton>
            </TaskFooter>
         </TaskModalContainer>
      </Modal>
   );
});

export { TaskModal };
