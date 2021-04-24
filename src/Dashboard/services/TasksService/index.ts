import {
   CreateAPIResponse,
   CreateTaskAPIRequest,
   ReorderTaskAPIRequest,
} from "../../types";

export interface TasksService {
   createTaskAPI: (
      stageId: string,
      data: CreateTaskAPIRequest
   ) => Promise<CreateAPIResponse>;

   reorderTaskAPI: (taskId: string, data: ReorderTaskAPIRequest) => Promise<{}>;
}
