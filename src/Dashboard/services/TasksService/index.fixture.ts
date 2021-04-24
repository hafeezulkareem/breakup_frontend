import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import createTaskAPIResponse from "../../fixtures/createTaskAPIResponse.json";

import { TasksService } from ".";

class TasksFixture implements TasksService {
   createTaskAPI() {
      return resolveWithTimeOut(createTaskAPIResponse);
   }

   reorderTaskAPI() {
      return resolveWithTimeOut({});
   }
}

export { TasksFixture };
