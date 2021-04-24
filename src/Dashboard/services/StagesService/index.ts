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

   reorderStageAPI: (
      projectId: string,
      stageId: string,
      data: ReorderAPIRequest
   ) => Promise<{}>;
}
