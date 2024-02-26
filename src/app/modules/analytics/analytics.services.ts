import { Request } from "express";

import { MainService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interface/common";

const getAnalytics = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await MainService.get("/analytic", {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  console.log(response);
  return response;
};

export const AnalyticsService = {
  getAnalytics,
};
