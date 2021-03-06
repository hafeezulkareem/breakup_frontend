import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";

import { ProjectsService } from "../../services/ProjectsService";
import {
   CreateProjectAPIRequest,
   CreateAPIResponse,
   GetProjectDetailsAPIResponse,
   GetProjectsAPIResponse,
   AddMemberAPIRequest,
   AddMemberAPIResponse,
} from "../../types";

import { MiniProjectModel } from "../models/MiniProjectModel";
import { ProjectDetailsModel } from "../models/ProjectDetailsModel";
import { StagesStore } from "../StagesStore";

class ProjectsStore {
   projectsService: ProjectsService;
   @observable creatProjectAPIStatus!: number;
   @observable createProjectAPIError!: string;
   @observable miniProjects!: Array<MiniProjectModel>;
   @observable getProjectsAPIStatus!: number;
   @observable getProjectsAPIError!: string;
   @observable getProjectDetailsAPIStatus!: number;
   @observable getProjectDetailsAPIError!: string;
   @observable addMemberAPIStatus!: number;
   @observable addMemberAPIError!: string;
   @observable projectDetails!: ProjectDetailsModel | null;
   stagesStore: StagesStore;

   constructor(projectsService: ProjectsService, stagesStore: StagesStore) {
      this.projectsService = projectsService;
      this.stagesStore = stagesStore;
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
      this.projectDetails = null;
      this.getProjectDetailsAPIStatus = 0;
      this.getProjectDetailsAPIError = "";
      this.addMemberAPIStatus = 0;
      this.addMemberAPIError = "";
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
      response: CreateAPIResponse | null,
      title: string,
      description: string
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
      const createProjectAPIPromise =
         this.projectsService.createProjectAPI(data);
      this.setCreateProjectAPIStatus(apiStatus.loading);
      const { title, description } = data;
      await createProjectAPIPromise
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
         this.miniProjects = [];
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
      const getProjectsAPIPromise = this.projectsService.getProjectsAPI();
      this.setGetProjectsAPIStatus(apiStatus.loading);
      await getProjectsAPIPromise
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
   setGetProjectDetailsAPIStatus(status: number) {
      this.getProjectDetailsAPIStatus = status;
   }

   @action.bound
   setGetProjectDetailsAPIError(error) {
      this.getProjectDetailsAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setGetProjectDetailsAPIResponse(
      response: GetProjectDetailsAPIResponse | null
   ) {
      if (response) {
         const { id, title, description, members, stages } = response;
         this.stagesStore.setProjectIdAndStages(id, stages);
         this.projectDetails = new ProjectDetailsModel({
            id,
            title,
            description,
            members,
         });
      }
   }

   @action.bound
   async getProjectDetailsAPI(
      id: string,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const getProjectDetailsAPIPromise =
         this.projectsService.getProjectDetailsAPI(id);
      this.setGetProjectDetailsAPIStatus(apiStatus.loading);
      await getProjectDetailsAPIPromise
         .then((data) => {
            this.setGetProjectDetailsAPIStatus(apiStatus.success);
            this.setGetProjectDetailsAPIResponse(data);
            onSuccess();
         })
         .catch((err) => {
            this.setGetProjectDetailsAPIStatus(apiStatus.failed);
            this.setGetProjectDetailsAPIError(err);
            onFailure();
         });
   }

   @action.bound
   setAddMemberAPIStatus(status: number) {
      this.addMemberAPIStatus = status;
   }

   @action.bound
   setAddMemberAPIError(error) {
      this.addMemberAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setAddMemberAPIResponse(response: AddMemberAPIResponse) {
      if (response) {
         const { id, name, email } = response;
         this.projectDetails?.addNewMember({ id, name, email, role: "MEMBER" });
      }
   }

   @action.bound
   async addMemberAPI(
      data: AddMemberAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      let projectId = "";
      if (this.projectDetails) {
         const {
            projectBasicDetails: { id },
         } = this.projectDetails;
         projectId = id;
      }
      const addMemberAPIPromise = this.projectsService.addMemberAPI(
         projectId,
         data
      );
      this.setAddMemberAPIStatus(apiStatus.loading);
      await addMemberAPIPromise
         .then((data) => {
            this.setAddMemberAPIStatus(apiStatus.success);
            this.setAddMemberAPIResponse(data);
            onSuccess();
         })
         .catch((err) => {
            this.setAddMemberAPIStatus(apiStatus.failed);
            this.setAddMemberAPIError(err);
            onFailure(this.addMemberAPIError);
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { ProjectsStore };
