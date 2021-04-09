import { CreateAPIResponse, CreateStageAPIRequest } from "../../types";

export interface StagesService {
   createStageAPI: (
      projectId: string,
      data: CreateStageAPIRequest
   ) => Promise<CreateAPIResponse>;
}
