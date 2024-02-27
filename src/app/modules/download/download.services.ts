import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService, MainService } from "../../../shared/axios";

const downloadInsertIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.post(
    "/download",
    req.body,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
const getAllDownloadListFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get("/download", {
    params: req.query,
    headers: {
      Authorization: req.cookies.refreshToken,
    },
  });
  console.log(response);
  return response;
};

const getDownloadByIdFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    `/download/${req.params.id}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
const updateDownloadIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.patch(
    `/download/${req.params.id}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
const deleteDownloadByIdIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.delete(
    `/download/${req.params.id}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};

const myDownloadListFrom = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    "/download/my-download-history",
    {
      params: req.query,
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  console.log(response);
  return response;
};

export const DownloadService = {
  downloadInsertIntoDB,
  getAllDownloadListFromDB,
  getDownloadByIdFromDB,
  updateDownloadIntoDB,
  deleteDownloadByIdIntoDB,
  myDownloadListFrom,
};
