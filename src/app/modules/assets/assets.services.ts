import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService, MainService } from "../../../shared/axios";
import { IUploadFile } from "../../../interface/file";
import { v2 as cloudinary } from "cloudinary";
const createAssetIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const files = req.files as IUploadFile[];

  const uploadPromises = files.map(async (file) => {
    return await cloudinary.uploader.upload(file.path);
  });

  // // Wait for all uploads to complete
  const results = await Promise.all(uploadPromises);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadFIles = results.map((file: any) => {
    return {
      public_id: file.public_id,
      type: file.format,
      url: file.secure_url,
    };
  });

  req.body.file = uploadFIles;
  req.body.data = JSON.parse(req.body.data);
  const uploadData = { ...req.body.data, file: req.body.file };

  req.body.data = uploadData;
  const response: IGenericResponse = await MainService.post(
    "/assets/insert",
    req.body.data,
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
