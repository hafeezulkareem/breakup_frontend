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

export interface GetProjectDetailsAPIResponse {
   id: string;
   title: string;
   description;
   admin_id: string;
   admin_name: string;
   stages: Array<string>;
}
