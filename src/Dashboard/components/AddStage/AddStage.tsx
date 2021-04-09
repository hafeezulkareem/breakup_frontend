import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { BsFileEarmarkPlus } from "react-icons/bs";
import cogoToast from "cogo-toast";

import { colors } from "../../../Common/themes/colors";
import { useStores } from "../../../Common/stores";

import {
   AddStageButton,
   AddStageButtonText,
   AddStageInput,
} from "./styledComponents";

interface AddStageProps {
   projectId: string;
}

const AddStage = observer((props: AddStageProps) => {
   const { projectId } = props;

   const [addStage, setAddStage] = useState(false);
   const [stageName, setStageName] = useState("");
   const {
      stagesStore: { createStageAPI, createStageAPIError },
   } = useStores();

   const hideAddStageInput = () => {
      setAddStage(false);
      setStageName("");
   };

   const onSuccessCreateStageAPI = () => {
      cogoToast.success("Stage created successfully", {
         position: "bottom-center",
      });
      hideAddStageInput();
   };

   const onFailureCreateStageAPI = () => {
      cogoToast.error(createStageAPIError, {
         position: "bottom-center",
      });
   };

   const validateAndAddStage = (event) => {
      if (event.keyCode === 13) {
         if (stageName.length >= 3) {
            createStageAPI(
               projectId,
               { name: stageName },
               onSuccessCreateStageAPI,
               onFailureCreateStageAPI
            );
         } else {
            cogoToast.error("Stage name length should be at least 3", {
               position: "bottom-center",
            });
         }
      }
   };

   return addStage ? (
      <AddStageInput
         placeholder={"Stage name"}
         fullWidth
         value={stageName}
         onChange={(event) => setStageName(event.target.value)}
         onBlur={hideAddStageInput}
         autoFocus={true}
         onKeyDown={validateAndAddStage}
      />
   ) : (
      <AddStageButton onClick={() => setAddStage(true)}>
         <AddStageButtonText>Add a stage</AddStageButtonText>
         <BsFileEarmarkPlus size={18} color={colors.pictonBlue} />
      </AddStageButton>
   );
});

export { AddStage };
