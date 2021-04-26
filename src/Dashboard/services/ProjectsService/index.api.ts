import { create } from "apisauce";

import { networkCallWithAxios } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

import {
   CreateProjectAPIRequest,
   CreateAPIResponse,
   GetProjectDetailsAPIResponse,
   GetProjectsAPIResponse,
   AddMemberAPIRequest,
} from "../../types";

import { endpoints } from "../endpoints";

import { ProjectsService } from ".";

class ProjectsAPIs implements ProjectsService {
   api: Record<string, any>;

   constructor() {
      this.api = create({ baseURL: "http://localhost:8000/api" });
   }

   createProjectAPI(data: CreateProjectAPIRequest): Promise<CreateAPIResponse> {
      return networkCallWithAxios(
         this.api,
         endpoints.project,
         data,
         apiMethods.post,
         true
      );
   }

   getProjectsAPI(): Promise<Array<GetProjectsAPIResponse>> {
      return networkCallWithAxios(
         this.api,
         endpoints.getProjects,
         {},
         apiMethods.get,
         true
      );
   }

   getProjectDetailsAPI(id: string): Promise<GetProjectDetailsAPIResponse> {
      return networkCallWithAxios(
         this.api,
         `${endpoints.project}${id}/`,
         {},
         apiMethods.get,
         true
      );
   }

   addMemberAPI(
      id: string,
      data: AddMemberAPIRequest
   ): Promise<GetProjectDetailsAPIResponse> {
      return networkCallWithAxios(
         this.api,
         `${endpoints.project}${id}/member/add/`,
         data,
         apiMethods.post,
         true
      );
   }
}

export { ProjectsAPIs };
