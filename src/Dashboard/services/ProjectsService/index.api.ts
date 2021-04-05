import { create } from "apisauce";

import { networkCallWithAxios } from "../../../Common/utils/APIUtils";
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
      return networkCallWithAxios(
         this.api,
         endpoints.createProject,
         data,
         apiMethods.post
      );
   }
}

export { ProjectsAPIs };
