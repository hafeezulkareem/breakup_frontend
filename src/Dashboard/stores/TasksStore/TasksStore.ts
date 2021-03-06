import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";

import { TasksService } from "../../services/TasksService";
import {
   CreateAPIResponse,
   CreateTaskAPIRequest,
   ReorderTaskAPIRequest,
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
   @observable reorderTaskAPIStatus!: number;
   @observable reorderTaskAPIError!: string;
   @observable deleteTaskAPIStatus!: number;
   @observable deleteTaskAPIError!: string;

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
      this.reorderTaskAPIStatus = 0;
      this.reorderTaskAPIError = "";
      this.deleteTaskAPIStatus = 0;
      this.deleteTaskAPIError = "";
   }

   @action.bound
   setProjectIdAndTasks(projectId: string, stages: Array<StageResponse>) {
      this.projectId = projectId;
      stages.forEach((stage) => {
         const { id, tasks } = stage;
         const taskModels = tasks.map((task) => {
            const { id, title, status, description, assignee } = task;
            return new TaskModel(this.tasksService, {
               id,
               title,
               status,
               description,
               assignee,
            });
         });
         this.tasks[id] = taskModels;
      });
   }

   @action.bound
   addNewStage(stageId: string) {
      this.tasks[stageId] = [];
   }

   @action.bound
   reorderTask(
      id: string,
      sourceIndex: number,
      sourceStageId: string,
      destinationIndex: number,
      destinationStageId: string
   ) {
      const tasks = this.tasks[sourceStageId];
      if (sourceIndex < tasks.length) {
         const task = tasks[sourceIndex];
         this.tasks[sourceStageId] = tasks.filter((task) => task.id !== id);
         this.tasks[destinationStageId].splice(destinationIndex, 0, task);
      }
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
      title: string,
      status: string
   ) {
      if (response) {
         const { id } = response;
         this.tasks[stageId].push(
            new TaskModel(this.tasksService, {
               id,
               title,
               status,
               description: "",
               assignee: {},
            })
         );
      }
   }

   @action.bound
   async createTaskAPI(
      stageId: string,
      data: CreateTaskAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const createTaskAPIPromise = this.tasksService.createTaskAPI(
         stageId,
         data
      );
      const { title, status } = data;
      this.setCreateTaskAPIStatus(apiStatus.loading);
      await createTaskAPIPromise
         .then((data) => {
            this.setCreateTaskAPIStatus(apiStatus.success);
            this.setCreateTaskAPIResponse(data, stageId, title, status);
            onSuccess();
         })
         .catch((err) => {
            this.setCreateTaskAPIStatus(apiStatus.failed);
            this.setCreateTaskAPIError(err);
            onFailure();
         });
   }

   @action.bound
   setReorderTaskAPIStatus(status: number) {
      this.reorderTaskAPIStatus = status;
   }

   @action.bound
   setReorderTaskAPIError(error) {
      this.reorderTaskAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   async reorderTaskAPI(
      stageId: string,
      data: ReorderTaskAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const createTaskAPIPromise = this.tasksService.reorderTaskAPI(
         stageId,
         data
      );
      this.setReorderTaskAPIStatus(apiStatus.loading);
      await createTaskAPIPromise
         .then((data) => {
            this.setReorderTaskAPIStatus(apiStatus.success);
            onSuccess();
         })
         .catch((err) => {
            this.setReorderTaskAPIStatus(apiStatus.failed);
            this.setReorderTaskAPIError(err);
            onFailure();
         });
   }

   @action.bound
   setDeleteTaskAPIStatus(status: number) {
      this.deleteTaskAPIStatus = status;
   }

   @action.bound
   setDeleteTaskAPIError(error) {
      this.deleteTaskAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   deleteTask(stageId: string, taskId: string) {
      const tasks = this.tasks[stageId];
      if (tasks) {
         this.tasks[stageId] = tasks.filter((task) => task.id !== taskId);
      }
   }

   @action.bound
   async deleteTaskAPI(
      stageId: string,
      taskId: string,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const deleteTaskAPIPromise = this.tasksService.deleteTaskAPI(
         stageId,
         taskId
      );
      this.setDeleteTaskAPIStatus(apiStatus.loading);
      await deleteTaskAPIPromise
         .then((data) => {
            this.setDeleteTaskAPIStatus(apiStatus.success);
            this.deleteTask(stageId, taskId);
            onSuccess();
         })
         .catch((err) => {
            this.setDeleteTaskAPIStatus(apiStatus.failed);
            this.setDeleteTaskAPIError(err);
            onFailure(this.deleteTaskAPIError);
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { TasksStore };
