import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { MainService } from "../../../shared/axios";

const keywordInsertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.post(
    "/keyword/insertKeyword",
    req.body,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};
const getAllKeywordsFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    "/keyword/getKeywords",
    {
      params: req.query,
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );

  return response;
};

const getKeywordByIdFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    `/keyword/getOneKeyword/${req.params.id}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );
  return response;
};

const getAllTrendingKeywords = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    "/keyword/getTrendingKeywords",
    {
      params: req.query,
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );

  return response;
};

export const keywordService = {
  keywordInsertIntoDB,
  getAllKeywordsFromDB,
  getKeywordByIdFromDB,
  getAllTrendingKeywords,
};
