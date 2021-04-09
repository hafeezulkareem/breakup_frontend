import { StagesService } from ".";

import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import createStageAPIResponse from "../../fixtures/createStageAPIResponse.json";

class StagesFixtures implements StagesService {
   createStageAPI() {
      return resolveWithTimeOut(createStageAPIResponse);
   }
}

export { StagesFixtures };
