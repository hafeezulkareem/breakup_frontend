import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Modal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";

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

const AddProjectModal = observer((props) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const {
      uiStore: { showAddProjectModal, updateAddProjectModalStatus },
   } = useStores();

   const closeModal = () => {
      updateAddProjectModalStatus(false);
   };

   const onChangeTitle = (event) => {
      setTitle(event.target.value);
   };

   const onChangeDescription = (event) => {
      setDescription(event.target.value);
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
               <AddProjectButton color={Button.colors.primary} startIcon="add">
                  Project
               </AddProjectButton>
            </ModalBodyContainer>
         </ModalContainer>
      </Modal>
   );
});

export { AddProjectModal };
