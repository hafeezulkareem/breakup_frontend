import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";

import { TasksService } from "../../services/TasksService";
import {
   CreateAPIResponse,
   CreateTaskAPIRequest,
   StageResponse,
} from "../../types";

import { TaskModel } from "../models/TaskModel";

class TasksStore {
   projectId!: string;
   @observable tasks!:
      | {
           stageId: Array<TaskModel>;
        }
      | {};
   tasksService: TasksService;
   @observable createTaskAPIStatus!: number;
   @observable createTaskAPIError!: string;

   constructor(tasksService) {
      makeObservable(this);
      this.tasksService = tasksService;
      this.init();
   }

   @action.bound
   init() {
      this.projectId = "";
      this.tasks = {};
      this.createTaskAPIStatus = 0;
      this.createTaskAPIError = "";
   }

   @action.bound
   setProjectIdAndTasks(projectId: string, stages: Array<StageResponse>) {
      this.projectId = projectId;
      stages.forEach((stage) => {
         const { id, tasks } = stage;
         const taskModels = tasks.map((task) => {
            const { id, title } = task;
            return new TaskModel({ id, title });
         });
         this.tasks[id] = taskModels;
      });
   }

   @action.bound
   addNewStage(stageId: string) {
      this.tasks[stageId] = [];
   }

   @action.bound
   setCreateTaskAPIStatus(status: number) {
      this.createTaskAPIStatus = status;
   }

   @action.bound
   setCreateTaskAPIError(error) {
      this.createTaskAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setCreateTaskAPIResponse(
      response: CreateAPIResponse | null,
      stageId: string,
      title: string
   ) {
      if (response) {
         const { id } = response;
         this.tasks[stageId].push(new TaskModel({ id, title }));
         console.log("TASKS", this.tasks[stageId]);
      }
   }

   @action.bound
   async createTaskAPI(
      projectId: string,
      stageId: string,
      data: CreateTaskAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const createTaskAPIPromise = this.tasksService.createTaskAPI(
         projectId,
         stageId,
         data
      );
      const { title } = data;
      this.setCreateTaskAPIStatus(apiStatus.loading);
      await createTaskAPIPromise
         .then((data) => {
            this.setCreateTaskAPIStatus(apiStatus.success);
            this.setCreateTaskAPIResponse(data, stageId, title);
            onSuccess();
         })
         .catch((err) => {
            this.setCreateTaskAPIStatus(apiStatus.failed);
            this.setCreateTaskAPIError(err);
            onFailure();
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { TasksStore };
