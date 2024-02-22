import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService, MainService } from "../../../shared/axios";

const createAssetIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.post(
    "/assets/insert",
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const getAllAssetsByUserFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get("/assets/all-user", {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  console.log(response);
  return response;
};
const getAllAssetsByAdminFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    "/assets/all-admin",
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const getAssetByIdForUserFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    `/assets/details-user/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const getAssetByIdForAdminFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    `/assets/details-admin/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const deleteAssetByIdIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.delete(
    `/assets/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const updateAssetByIdIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.patch(
    `/assets/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
export const AssetsService = {
  getAllAssetsByUserFromDB,
  getAllAssetsByAdminFromDB,
  getAssetByIdForUserFromDB,
  getAssetByIdForAdminFromDB,
  deleteAssetByIdIntoDB,
  updateAssetByIdIntoDB,
  createAssetIntoDB,
};
