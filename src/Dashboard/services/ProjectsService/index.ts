import { CreateProjectAPIRequest, CreateProjectAPIResponse } from "../../types";

export interface ProjectsService {
   createProjectAPI: (
      data: CreateProjectAPIRequest
   ) => Promise<CreateProjectAPIResponse>;
}
