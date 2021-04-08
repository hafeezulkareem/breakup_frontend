import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { BsFileEarmarkPlus } from "react-icons/bs";

import { colors } from "../../../Common/themes/colors";

import {
   AddStageButton,
   AddStageButtonText,
   AddStageInput,
} from "./styledComponents";

const AddStage = observer((props) => {
   const [addStage, setAddStage] = useState(false);
   const [stageName, setStageName] = useState("");

   const hideAddStageInput = () => {
      setAddStage(false);
      setStageName("");
   };

   return addStage ? (
      <AddStageInput
         placeholder={"Stage name"}
         fullWidth
         value={stageName}
         onChange={(event) => setStageName(event.target.value)}
         onBlur={hideAddStageInput}
         autoFocus={true}
      />
   ) : (
      <AddStageButton onClick={() => setAddStage(true)}>
         <AddStageButtonText>Add a stage</AddStageButtonText>
         <BsFileEarmarkPlus size={18} color={colors.pictonBlue} />
      </AddStageButton>
   );
});

export { AddStage };
