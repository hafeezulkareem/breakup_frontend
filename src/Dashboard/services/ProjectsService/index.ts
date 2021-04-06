import {
   CreateProjectAPIRequest,
   CreateProjectAPIResponse,
   GetProjectsAPIResponse,
} from "../../types";

export interface ProjectsService {
   createProjectAPI: (
      data: CreateProjectAPIRequest
   ) => Promise<CreateProjectAPIResponse>;

   getProjectsAPI: () => Promise<Array<GetProjectsAPIResponse>>;
}
