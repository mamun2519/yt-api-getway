import { Request } from "express";

import { MainService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interface/common";
import { Donation } from "../donation/donation.model";

const getAnalytics = async (req: Request): Promise<IGenericResponse> => {
  const donation = await Donation.countDocuments();
  const response: IGenericResponse = await MainService.get(
    `/analytic?donation=${donation}`,
    {
      headers: {
        Authorization: req.cookies.refreshToken,
      },
    }
  );

  return response;
};
export const AnalyticsService = {
  getAnalytics,
};
