import { create } from "apisauce";

import { authNetworkCallWithAxios } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

import { CreateProjectAPIRequest, CreateProjectAPIResponse } from "../../types";

import { endpoints } from "../endpoints";

import { ProjectsService } from ".";

class ProjectsAPIs implements ProjectsService {
   api: Record<string, any>;

   constructor() {
      this.api = create({ baseURL: "http://localhost:8000/api" });
   }

   createProjectAPI(
      data: CreateProjectAPIRequest
   ): Promise<CreateProjectAPIResponse> {
      return authNetworkCallWithAxios(
         this.api,
         endpoints.createProject,
         data,
         apiMethods.post
      );
   }
}

export { ProjectsAPIs };
