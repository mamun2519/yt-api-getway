import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";

import sendResponse from "../../../shared/response";
import { AnalyticsService } from "./analytics.services";

const getAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AnalyticsService.getAnalytics(req);
  sendResponse(res, result);
});

export const AnalyticsController = {
  getAnalytics,
};
