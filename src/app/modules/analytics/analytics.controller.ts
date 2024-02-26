import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";
import { AnalyticsService } from "./analytics.services";
import sendResponse from "../../../shared/response";
import { StatusCodes } from "http-status-codes";

const getAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AnalyticsService.getAnalytics(req);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Fetch Analytics Successfully",
    data: result,
  });
});

export const AnalyticsController = {
  getAnalytics,
};
