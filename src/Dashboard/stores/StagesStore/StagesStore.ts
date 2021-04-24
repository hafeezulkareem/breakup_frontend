import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";

import { StagesService } from "../../services/StagesService";
import {
   CreateAPIResponse,
   CreateStageAPIRequest,
   ReorderAPIRequest,
   StageResponse,
} from "../../types";

import { StageModel } from "../models/StageModel";
import { TasksStore } from "../TasksStore";

class StagesStore {
   projectId!: string;
   @observable stages!: Array<StageModel>;
   tasksStore: TasksStore;
   stagesService: StagesService;
   @observable createStageAPIStatus!: number;
   @observable createStageAPIError!: string;
   @observable reorderStageAPIStatus!: number;
   @observable reorderStageAPIError!: string;

   constructor(stagesService: StagesService, tasksStore: TasksStore) {
      makeObservable(this);
      this.stagesService = stagesService;
      this.tasksStore = tasksStore;
      this.init();
   }

   @action.bound
   init() {
      this.projectId = "";
      this.stages = [];
      this.createStageAPIStatus = 0;
      this.createStageAPIError = "";
      this.reorderStageAPIStatus = 0;
      this.reorderStageAPIError = "";
   }

   @action.bound
   setProjectIdAndStages(projectId: string, stages: Array<StageResponse>) {
      this.projectId = projectId;
      this.stages = stages.map((stage) => {
         const { id, name } = stage;
         return new StageModel({ id, name });
      });
      this.tasksStore.setProjectIdAndTasks(projectId, stages);
   }

   @action.bound
   reorderStage(id: string, sourceIndex: number, destinationIndex: number) {
      if (sourceIndex < this.stages.length) {
         const stage = this.stages[sourceIndex];
         this.stages = this.stages.filter((stage) => stage.id !== id);
         this.stages.splice(destinationIndex, 0, stage);
      }
   }

   @action.bound
   setCreateStageAPIStatus(status: number) {
      this.createStageAPIStatus = status;
   }

   @action.bound
   setCreateStageAPIError(error) {
      this.createStageAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setCreateStageAPIResponse(response: CreateAPIResponse | null, name: string) {
      if (response) {
         const { id } = response;
         this.stages.push(new StageModel({ id, name }));
         this.tasksStore.addNewStage(id);
      }
   }

   @action.bound
   async createStageAPI(
      projectId: string,
      data: CreateStageAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const createStageAPIPromise = this.stagesService.createStageAPI(
         projectId,
         data
      );
      const { name } = data;
      this.setCreateStageAPIStatus(apiStatus.loading);
      await createStageAPIPromise
         .then((data) => {
            this.setCreateStageAPIStatus(apiStatus.success);
            this.setCreateStageAPIResponse(data, name);
            onSuccess();
         })
         .catch((err) => {
            this.setCreateStageAPIStatus(apiStatus.failed);
            this.setCreateStageAPIError(err);
            onFailure();
         });
   }

   @action.bound
   setReorderStageAPIStatus(status: number) {
      this.reorderStageAPIStatus = status;
   }

   @action.bound
   setReorderStageAPIError(error) {
      this.reorderStageAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   async reorderStageAPI(
      stageId: string,
      data: ReorderAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const createTaskAPIPromise = this.stagesService.reorderStageAPI(
         this.projectId,
         stageId,
         data
      );
      this.setReorderStageAPIStatus(apiStatus.loading);
      await createTaskAPIPromise
         .then((data) => {
            this.setReorderStageAPIStatus(apiStatus.success);
            onSuccess();
         })
         .catch((err) => {
            this.setReorderStageAPIStatus(apiStatus.failed);
            this.setReorderStageAPIError(err);
            onFailure();
         });
   }
}

export { StagesStore };
