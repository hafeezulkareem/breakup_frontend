export interface CreateProjectAPIRequest {
   userId: string;
   title: string;
   description?: string;
}

export interface CreateProjectAPIResponse {
   id: string;
}
