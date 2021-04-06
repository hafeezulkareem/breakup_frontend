import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";

import { ProjectsService } from "../../services/ProjectsService";
import {
   CreateProjectAPIRequest,
   CreateProjectAPIResponse,
   GetProjectsAPIResponse,
} from "../../types";

import { MiniProjectModel } from "../models/MiniProjectModel";

class ProjectsStore {
   projectsService: ProjectsService;
   @observable creatProjectAPIStatus!: number;
   @observable createProjectAPIError!: string;
   @observable miniProjects!: Array<MiniProjectModel>;
   @observable getProjectsAPIStatus!: number;
   @observable getProjectsAPIError!: string;

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
      this.getProjectsAPIStatus = 0;
      this.getProjectsAPIError = "";
   }

   @action.bound
   getProjectTitleWithId(id: string): string {
      const project = this.miniProjects.find((project) => project.id === id);
      if (project) {
         return project.title;
      }
      return "";
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
   setGetProjectsAPIStatus(status: number) {
      this.getProjectsAPIStatus = status;
   }

   @action.bound
   setGetProjectsAPIError(error) {
      this.getProjectsAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setGetProjectsAPIResponse(response: Array<GetProjectsAPIResponse> | null) {
      if (response) {
         response.forEach((project) => {
            const { id, title, description } = project;
            this.miniProjects.push(
               new MiniProjectModel({ id, title, description })
            );
         });
      }
   }

   @action.bound
   async getProjectsAPI(
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const signUpAPIPromise = this.projectsService.getProjectsAPI();
      this.setGetProjectsAPIStatus(apiStatus.loading);
      await signUpAPIPromise
         .then((data) => {
            this.setGetProjectsAPIStatus(apiStatus.success);
            this.setGetProjectsAPIResponse(data);
            onSuccess();
         })
         .catch((err) => {
            this.setGetProjectsAPIStatus(apiStatus.failed);
            this.setGetProjectsAPIError(err);
            onFailure();
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { ProjectsStore };
