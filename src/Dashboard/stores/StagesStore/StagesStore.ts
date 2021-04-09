import { action, makeObservable, observable } from "mobx";

import { StageResponse } from "../../types";

import { StageModel } from "../models/StageModel";

class StagesStore {
   projectId!: string;
   @observable stages!: Array<StageModel>;

   constructor() {
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.projectId = "";
      this.stages = [];
   }

   @action.bound
   setProjectIdAndStages(projectId: string, stages: Array<StageResponse>) {
      this.projectId = projectId;
      this.stages = stages.map((stage) => {
         const { id, name, tasks } = stage;
         return new StageModel({ id, name, tasks });
      });
   }
}

export { StagesStore };
