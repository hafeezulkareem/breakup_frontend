import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Modal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import cogoToast from "cogo-toast";

import { useStores } from "../../../Common/stores";
import { colors } from "../../../Common/themes/colors";
import Button from "../../../Common/components/Button";

import {
   AddProjectButton,
   AddProjectTitle,
   CloseButton,
   ModalBodyContainer,
   ModalContainer,
   ProjectDescriptionInput,
   ProjectTitleInput,
   TitleBar,
} from "./styledComponents";
import "./styles.css";
import { isFetching } from "../../../Common/utils/APIUtils";

const AddProjectModal = observer((props) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const {
      uiStore: { showAddProjectModal, updateAddProjectModalStatus },
      projectsStore: { createProjectAPI, creatProjectAPIStatus },
   } = useStores();

   const closeModal = () => {
      setTitle("");
      setDescription("");
      updateAddProjectModalStatus(false);
   };

   const onChangeTitle = (event) => {
      setTitle(event.target.value);
   };

   const onChangeDescription = (event) => {
      setDescription(event.target.value);
   };

   const onSuccessCreateProjectAPI = () => {
      closeModal();
      cogoToast.success("Project created successfully", {
         position: "bottom-center",
      });
   };

   const onFailureCreateProjectAPI = (createProjectAPIError: string) => {
      cogoToast.error(createProjectAPIError, { position: "bottom-center" });
   };

   const createProject = () => {
      if (title) {
         createProjectAPI(
            { title, description },
            onSuccessCreateProjectAPI,
            onFailureCreateProjectAPI
         );
      } else {
         cogoToast.error("Title is required", { position: "bottom-center" });
      }
   };

   return (
      <Modal
         isOpen={showAddProjectModal}
         onRequestClose={closeModal}
         className="add-project-modal"
         overlayClassName="add-project-overlay"
         closeTimeoutMS={300}
         ariaHideApp={false}
      >
         <ModalContainer>
            <TitleBar>
               <AddProjectTitle>New Project</AddProjectTitle>
               <CloseButton onClick={closeModal}>
                  <IoIosCloseCircle color={colors.persianRed} size={24} />
               </CloseButton>
            </TitleBar>
            <ModalBodyContainer>
               <ProjectTitleInput
                  placeholder={"Project title"}
                  fullWidth
                  value={title}
                  onChange={onChangeTitle}
               />
               <ProjectDescriptionInput
                  placeholder={"Project description"}
                  multiline
                  rows={5}
                  value={description}
                  onChange={onChangeDescription}
               />
               <AddProjectButton
                  color={Button.colors.primary}
                  startIcon="add"
                  onClick={createProject}
                  loading={isFetching(creatProjectAPIStatus)}
               >
                  Project
               </AddProjectButton>
            </ModalBodyContainer>
         </ModalContainer>
      </Modal>
   );
});

export { AddProjectModal };
