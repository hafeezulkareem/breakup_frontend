import {
   CreateAPIResponse,
   CreateStageAPIRequest,
   ReorderAPIRequest,
} from "../../types";

export interface StagesService {
   createStageAPI: (
      projectId: string,
      data: CreateStageAPIRequest
   ) => Promise<CreateAPIResponse>;

   deleteStageAPI: (projectId: string, stageId: string) => Promise<{}>;

   reorderStageAPI: (
      projectId: string,
      stageId: string,
      data: ReorderAPIRequest
   ) => Promise<{}>;
}
