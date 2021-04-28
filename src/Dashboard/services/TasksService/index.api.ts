import { create } from "apisauce";

import { networkCallWithAxios } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

import {
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
}

export { TasksAPIs };
