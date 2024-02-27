import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService } from "../../../shared/axios";

const getAllUserFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get("/user/all-user", {
    params: req.query,
    headers: {
      Authorization: req.cookies.refreshToken,
    },
  });
  return response;
};

const getUserByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get(
    `/user/${req.params.id}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
const getUserByEmailFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get(
    `/user/${req.params.email}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
const deleteUserByIdIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.delete(
    `/user/${req.params.id}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
export const UserService = {
  getAllUserFromDB,
  getUserByIdFromDB,
  deleteUserByIdIntoDB,
  getUserByEmailFromDB,
};
