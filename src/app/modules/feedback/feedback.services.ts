import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService } from "../../../shared/axios";

const feedbackInsertIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post(
    "/feedback",
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const getAllFeedbackListFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get("/feedback", {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getFeedbackByIdFromDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get(
    `/feedback/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const updateFeedbackIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.patch(
    `/feedback/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};
const deleteFeedbackByIdIntoDB = async (
  req: Request
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.delete(
    `/feedback/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

export const feedbackService = {
  feedbackInsertIntoDB,
  getAllFeedbackListFromDB,
  getFeedbackByIdFromDB,
  updateFeedbackIntoDB,
  deleteFeedbackByIdIntoDB,
};
