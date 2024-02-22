import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";
import sendResponse from "../../../shared/response";
import { DownloadService } from "./download.services";

const downloadInsert = catchAsync(async (req: Request, res: Response) => {
  const result = await DownloadService.downloadInsertIntoDB(req);
  sendResponse(res, result);
});
const getAllDownloadList = catchAsync(async (req: Request, res: Response) => {
  const result = await DownloadService.getAllDownloadListFromDB(req);
  sendResponse(res, result);
});

const getDownloadById = catchAsync(async (req: Request, res: Response) => {
  const result = await DownloadService.getDownloadByIdFromDB(req);
  sendResponse(res, result);
});

const updateDownload = catchAsync(async (req: Request, res: Response) => {
  const result = await DownloadService.updateDownloadIntoDB(req);

  sendResponse(res, result);
});
const deleteDownloadById = catchAsync(async (req: Request, res: Response) => {
  const result = await DownloadService.deleteDownloadByIdIntoDB(req);

  sendResponse(res, result);
});
const myDownloadList = catchAsync(async (req: Request, res: Response) => {
  const result = await DownloadService.myDownloadListFrom(req);

  sendResponse(res, result);
});

export const DownloadController = {
  downloadInsert,
  getAllDownloadList,
  getDownloadById,
  updateDownload,
  myDownloadList,
  deleteDownloadById,
};
