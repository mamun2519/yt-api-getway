import { IGenericErrorMessage } from "./error";

export interface IGenericResponse {
  success: boolean;
  statusCode: number;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: any;
}

export type IResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
