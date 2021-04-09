import { create } from "apisauce";

import { networkCallWithAxios } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

import { CreateStageAPIRequest } from "../../types";

import { endpoints } from "../endpoints";

import { StagesService } from ".";

class StagesAPIs implements StagesService {
   api: Record<string, any>;

   constructor() {
      this.api = create({ baseURL: "http://localhost:8000/api" });
   }

   createStageAPI(projectId: string, data: CreateStageAPIRequest) {
      return networkCallWithAxios(
         this.api,
         `${endpoints.project}${projectId}/${endpoints.stage}`,
         data,
         apiMethods.post,
         true
      );
   }
}

export { StagesAPIs };
