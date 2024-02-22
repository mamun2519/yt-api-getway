import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";
import sendResponse from "../../../shared/response";
import { keywordService } from "./keyword.services";

const KeywordInset = catchAsync(async (req: Request, res: Response) => {
  const result = await keywordService.keywordInsertIntoDB(req);
  sendResponse(res, result);
});
const getAllKeywordList = catchAsync(async (req: Request, res: Response) => {
  const result = await keywordService.getAllKeywordsFromDB(req);
  sendResponse(res, result);
});

const getKeywordById = catchAsync(async (req: Request, res: Response) => {
  const result = await keywordService.getKeywordByIdFromDB(req);
  sendResponse(res, result);
});

const getAllTrendingKeywords = catchAsync(
  async (req: Request, res: Response) => {
    const result = await keywordService.getAllTrendingKeywords(req);
    sendResponse(res, result);
  }
);

export const KeywordController = {
  KeywordInset,
  getAllKeywordList,
  getKeywordById,
  getAllTrendingKeywords,
};
