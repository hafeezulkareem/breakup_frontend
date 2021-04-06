export interface CreateProjectAPIRequest {
   title: string;
   description?: string;
}

export interface CreateProjectAPIResponse {
   id: string;
}

export interface GetProjectsAPIResponse {
   id: string;
   title: string;
   description: string;
}
