export interface CreateProjectAPIRequest {
   title: string;
   description: string;
}

export interface CreateAPIResponse {
   id: string;
}

export interface GetProjectsAPIResponse {
   id: string;
   title: string;
   description: string;
}

export interface StageResponse {
   id: string;
   name: string;
   tasks: Array<any>;
}

export interface GetProjectDetailsAPIResponse {
   id: string;
   title: string;
   description;
   admin_id: string;
   admin_name: string;
   stages: Array<StageResponse>;
}

export interface CreateStageAPIRequest {
   name: string;
}

export interface CreateTaskAPIRequest {
   title: string;
}

export interface ReorderTaskAPIRequest {
   source_id: string;
   destination_id: string;
   order: number;
}
