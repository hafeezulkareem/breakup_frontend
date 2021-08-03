import { create } from "apisauce";

import { networkCallWithAxios } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

import {
   AssignMemberAPIRequest,
   CreateTaskAPIRequest,
   ReorderTaskAPIRequest,
   UpdateTaskDescriptionAPIRequest,
} from "../../types";

import { endpoints } from "../endpoints";

import { TasksService } from ".";

class TasksAPIs implements TasksService {
   api: Record<string, any>;

   constructor() {
      this.api = create({ baseURL: "http://localhost:8000/api" });
   }

   createTaskAPI(stageId: string, data: CreateTaskAPIRequest) {
      return networkCallWithAxios(
         this.api,
         `${endpoints.stage}${stageId}${endpoints.task}`,
         data,
         apiMethods.post,
         true
      );
   }

   reorderTaskAPI(taskId: string, data: ReorderTaskAPIRequest) {
      return networkCallWithAxios(
         this.api,
         `${endpoints.task}${taskId}/order/update/`,
         data,
         apiMethods.put,
         true
      );
   }

   updateDescriptionAPI(taskId: string, data: UpdateTaskDescriptionAPIRequest) {
      return networkCallWithAxios(
         this.api,
         `${endpoints.task}${taskId}/description/update/`,
         data,
         apiMethods.put,
         true
      );
   }

   assignMemberAPI(taskId: string, data: AssignMemberAPIRequest) {
      return networkCallWithAxios(
         this.api,
         `${endpoints.task}${taskId}/assign/member/`,
         data,
         apiMethods.put,
         true
      );
   }

   deleteTaskAPI(stageId: string, taskId: string) {
      return networkCallWithAxios(
         this.api,
         `${endpoints.stage}${stageId}${endpoints.task}${taskId}/delete/`,
         {},
         apiMethods.delete,
         true
      );
   }
}

export { TasksAPIs };
