import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";
import sendResponse from "../../../shared/response";
import { AssetsService } from "./assets.services";

const getAllAssetByAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.getAllAssetsByAdminFromDB(req);
  sendResponse(res, result);
});
const getAllAssetByUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.getAllAssetsByUserFromDB(req);
  sendResponse(res, result);
});

const PostAsset = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.createAssetIntoDB(req);
  sendResponse(res, result);
});

const getAssetByIdForAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.getAssetByIdForAdminFromDB(req);

  sendResponse(res, result);
});
const getAssetByIdForUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.getAssetByIdForUserFromDB(req);

  sendResponse(res, result);
});
const updateAssetById = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.updateAssetByIdIntoDB(req);
  sendResponse(res, result);
});
const deleteAssetById = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetsService.deleteAssetByIdIntoDB(req);
  sendResponse(res, result);
});

export const AssetController = {
  getAllAssetByAdmin,
  getAllAssetByUser,
  PostAsset,
  getAssetByIdForAdmin,
  getAssetByIdForUser,
  updateAssetById,
  deleteAssetById,
};
