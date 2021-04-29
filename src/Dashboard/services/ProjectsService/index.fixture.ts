import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import postCreateProjectAPIResponse from "../../fixtures/postCreateProjectAPIResponse.json";
import getProjectsAPIResponse from "../../fixtures/getProjectsAPIResponse.json";
import getProjectDetailsAPIResponse from "../../fixtures/getProjectDetailsAPIResponse.json";
import addMemberAPIResponse from "../../fixtures/addMemberAPIResponse.json";

import { ProjectsService } from ".";

class ProjectsFixtures implements ProjectsService {
   createProjectAPI() {
      return resolveWithTimeOut(postCreateProjectAPIResponse);
   }

   getProjectsAPI() {
      return resolveWithTimeOut(getProjectsAPIResponse);
   }

   getProjectDetailsAPI() {
      return resolveWithTimeOut(getProjectDetailsAPIResponse);
   }

   addMemberAPI() {
      return resolveWithTimeOut(addMemberAPIResponse);
   }
}

export { ProjectsFixtures };
