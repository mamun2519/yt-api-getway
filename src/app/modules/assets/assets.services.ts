import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService, MainService } from "../../../shared/axios";
import { IUploadFile } from "../../../interface/file";
import { FileUploadHelper } from "../../../helper/fileUploader";
import { sendArrayReturnObject } from "../../../utils/tags";

const createAssetIntoDB = async (req: Request) => {
  const SendingFile = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(SendingFile);
  const file = {
    public_id: uploadedImage?.public_id,
    type: uploadedImage?.format,
    url: uploadedImage?.secure_url,
  };
  //set file
  req.body.file = file;
  // persing data
  req.body.data = JSON.parse(req.body.data);
  // send array or convert object
  const tags = sendArrayReturnObject(req.body.data.tags);
  // set tags
  req.body.data.tags = tags;
  const uploadData = { ...req.body.data, file: req.body.file };
  // set updated data
  req.body.data = uploadData;
  // send main service response
  const response: IGenericResponse = await MainService.post(
    "/assets/insert",
    req.body.data,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
  // const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  // console.log(uploadedImage);
};
const getAllAssetsByUserFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get("/assets/all-user", {
    params: req.query,
    headers: {
      Authorization: req.cookies.refreshToken,
    },
  });
  // console.log(response);
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
        Authorization: req.cookies.refreshToken,
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
        Authorization: req.cookies.refreshToken,
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
        Authorization: req.cookies.refreshToken,
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
        Authorization: req.cookies.refreshToken,
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
        Authorization: req.cookies.refreshToken,
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
