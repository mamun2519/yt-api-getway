import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";
import sendResponse from "../../../shared/response";
import { feedbackService } from "./feedback.services";

const feedbackInsert = catchAsync(async (req: Request, res: Response) => {
  const result = await feedbackService.feedbackInsertIntoDB(req);
  sendResponse(res, result);
});
const getAllFeedbackList = catchAsync(async (req: Request, res: Response) => {
  const result = await feedbackService.getAllFeedbackListFromDB(req);
  sendResponse(res, result);
});

const getFeedbackById = catchAsync(async (req: Request, res: Response) => {
  const result = await feedbackService.getFeedbackByIdFromDB(req);
  sendResponse(res, result);
});

const updateFeedbackById = catchAsync(async (req: Request, res: Response) => {
  const result = await feedbackService.updateFeedbackIntoDB(req);

  sendResponse(res, result);
});
const deleteFeedbackById = catchAsync(async (req: Request, res: Response) => {
  const result = await feedbackService.deleteFeedbackByIdIntoDB(req);

  sendResponse(res, result);
});

export const feedbackController = {
  feedbackInsert,
  getAllFeedbackList,
  getFeedbackById,
  deleteFeedbackById,
  updateFeedbackById,
};
