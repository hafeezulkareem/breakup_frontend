import {
   CreateProjectAPIRequest,
   CreateAPIResponse,
   GetProjectDetailsAPIResponse,
   GetProjectsAPIResponse,
   AddMemberAPIRequest,
   AddMemberAPIResponse,
} from "../../types";

export interface ProjectsService {
   createProjectAPI: (
      data: CreateProjectAPIRequest
   ) => Promise<CreateAPIResponse>;

   getProjectsAPI: () => Promise<Array<GetProjectsAPIResponse>>;

   getProjectDetailsAPI: (id: string) => Promise<GetProjectDetailsAPIResponse>;

   addMemberAPI: (
      id: string,
      data: AddMemberAPIRequest
   ) => Promise<AddMemberAPIResponse>;
}
