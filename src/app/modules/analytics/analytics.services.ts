import { Request } from "express";

import { MainService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interface/common";
//
const getAnalytics = async (req: Request): Promise<IGenericResponse> => {
  console.log(req.cookies.refreshToken);
  const response: IGenericResponse = await MainService.get(`/analytic`, {
    headers: {
      Authorization: req.cookies.refreshToken,
    },
  });

  return response;
};
export const AnalyticsService = {
  getAnalytics,
};
