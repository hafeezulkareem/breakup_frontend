import {
   CreateProjectAPIRequest,
   CreateProjectAPIResponse,
   GetProjectDetailsAPIResponse,
   GetProjectsAPIResponse,
} from "../../types";

export interface ProjectsService {
   createProjectAPI: (
      data: CreateProjectAPIRequest
   ) => Promise<CreateProjectAPIResponse>;

   getProjectsAPI: () => Promise<Array<GetProjectsAPIResponse>>;

   getProjectDetailsAPI: (id: string) => Promise<GetProjectDetailsAPIResponse>;
}
