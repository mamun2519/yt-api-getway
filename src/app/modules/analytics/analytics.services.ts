import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService, MainService } from "../../../shared/axios";

const getAnalytics = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get(
    "/analytics",
    req.body
  );
  return response;
};

export const AnalyticsService = {
  getAnalytics,
};
