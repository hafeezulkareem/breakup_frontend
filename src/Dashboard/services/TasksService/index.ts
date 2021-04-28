import {
   CreateAPIResponse,
   CreateTaskAPIRequest,
   ReorderTaskAPIRequest,
   UpdateTaskDescriptionAPIRequest,
} from "../../types";

export interface TasksService {
   createTaskAPI: (
      stageId: string,
      data: CreateTaskAPIRequest
   ) => Promise<CreateAPIResponse>;

   reorderTaskAPI: (taskId: string, data: ReorderTaskAPIRequest) => Promise<{}>;

   updateDescriptionAPI: (
      taskId: string,
      data: UpdateTaskDescriptionAPIRequest
   ) => Promise<{}>;
}
