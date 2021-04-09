import {
   CreateProjectAPIRequest,
   CreateAPIResponse,
   GetProjectDetailsAPIResponse,
   GetProjectsAPIResponse,
} from "../../types";

export interface ProjectsService {
   createProjectAPI: (
      data: CreateProjectAPIRequest
   ) => Promise<CreateAPIResponse>;

   getProjectsAPI: () => Promise<Array<GetProjectsAPIResponse>>;

   getProjectDetailsAPI: (id: string) => Promise<GetProjectDetailsAPIResponse>;
}
