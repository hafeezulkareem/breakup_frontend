import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import postCreateProjectAPIResponse from "../../fixtures/postCreateProjectAPIResponse.json";

import { ProjectsService } from ".";

class ProjectsFixtures implements ProjectsService {
   createProjectAPI() {
      return resolveWithTimeOut(postCreateProjectAPIResponse);
   }
}

export { ProjectsFixtures };
