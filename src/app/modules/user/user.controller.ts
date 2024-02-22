import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";

import sendResponse from "../../../shared/response";

import { UserService } from "./user.services";

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUserFromDB(req);

  sendResponse(res, result);
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUserByIdFromDB(req);

  sendResponse(res, result);
});

const deleteUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUserByIdIntoDB(req);

  sendResponse(res, result);
});

export const UserController = {
  getAllUser,
  getUserById,
  deleteUserById,
};
