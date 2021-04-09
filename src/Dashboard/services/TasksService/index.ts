import { CreateAPIResponse, CreateTaskAPIRequest } from "../../types";

export interface TasksService {
   createTaskAPI: (
      projectId: string,
      stageId: string,
      data: CreateTaskAPIRequest
   ) => Promise<CreateAPIResponse>;
}
