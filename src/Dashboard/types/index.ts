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

interface TaskResponse {
   id: string;
   title: string;
   description: string;
}

export interface StageResponse {
   id: string;
   name: string;
   tasks: Array<TaskResponse>;
}

export interface MemberDetails {
   user: string;
   role: string;
}

export interface GetProjectDetailsAPIResponse {
   id: string;
   title: string;
   description;
   members: Array<MemberDetails>;
   stages: Array<StageResponse>;
}

export interface CreateStageAPIRequest {
   name: string;
}

export interface CreateTaskAPIRequest {
   title: string;
}

export interface ReorderAPIRequest {
   order: number;
}

export interface ReorderTaskAPIRequest extends ReorderAPIRequest {
   source_id: string;
   destination_id: string;
}

export interface AddMemberAPIRequest {
   email: string;
}
