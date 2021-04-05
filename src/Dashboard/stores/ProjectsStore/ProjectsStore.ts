import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";

import { ProjectsService } from "../../services/ProjectsService";
import { CreateProjectAPIRequest, CreateProjectAPIResponse } from "../../types";

import { MiniProjectModel } from "../models/MiniProjectModel";

class ProjectsStore {
   projectsService: ProjectsService;
   @observable creatProjectAPIStatus!: number;
   @observable createProjectAPIError!: string;
   @observable miniProjects!: Array<MiniProjectModel>;

   constructor(projectsService: ProjectsService) {
      this.projectsService = projectsService;
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.miniProjects = [];
      this.creatProjectAPIStatus = 0;
      this.createProjectAPIError = "";
   }

   @action.bound
   setCreateProjectAPIStatus(status: number) {
      this.creatProjectAPIStatus = status;
   }

   @action.bound
   setCreateProjectAPIError(error) {
      this.createProjectAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setCreateProjectAPIResponse(
      response: CreateProjectAPIResponse | null,
      title: string,
      description: string | undefined
   ) {
      if (response) {
         const { id } = response;
         const miniProject = new MiniProjectModel({ id, title, description });
         this.miniProjects.push(miniProject);
      }
   }

   @action.bound
   async createProjectAPI(
      data: CreateProjectAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const signUpAPIPromise = this.projectsService.createProjectAPI(data);
      this.setCreateProjectAPIStatus(apiStatus.loading);
      const { title, description } = data;
      await signUpAPIPromise
         .then((data) => {
            this.setCreateProjectAPIStatus(apiStatus.success);
            this.setCreateProjectAPIResponse(data, title, description);
            onSuccess();
         })
         .catch((err) => {
            this.setCreateProjectAPIStatus(apiStatus.failed);
            this.setCreateProjectAPIError(err);
            onFailure(this.createProjectAPIError);
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { ProjectsStore };
