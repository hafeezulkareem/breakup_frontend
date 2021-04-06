import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import postCreateProjectAPIResponse from "../../fixtures/postCreateProjectAPIResponse.json";
import getProjectsAPIResponse from "../../fixtures/getProjectsAPIResponse.json";

import { ProjectsService } from ".";

class ProjectsFixtures implements ProjectsService {
   createProjectAPI() {
      return resolveWithTimeOut(postCreateProjectAPIResponse);
   }

   getProjectsAPI() {
      return resolveWithTimeOut(getProjectsAPIResponse);
   }
}

export { ProjectsFixtures };
