import { CreateAPIResponse, CreateTaskAPIRequest } from "../../types";

export interface TasksService {
   createTaskAPI: (
      stageId: string,
      data: CreateTaskAPIRequest
   ) => Promise<CreateAPIResponse>;
}
