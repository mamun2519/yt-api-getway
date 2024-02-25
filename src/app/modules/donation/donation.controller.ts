import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";
import { JwtPayload } from "jsonwebtoken";
import { DonationService } from "./donation.services";
import sendResponse from "../../../shared/response";
import { StatusCodes } from "http-status-codes";
import { donationFilterableFields } from "./donation.constant";
import { paginationFiled } from "../../../constant/pagination";
import pick from "../../../shared/pick";

const insertDonation = catchAsync(async (req: Request, res: Response) => {
  const user = (req as JwtPayload).user;
  const result = await DonationService.insertDonationIntoDB(
    req.body,
    user.userId as string
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Donation Complete",
    data: result,
  });
});
const getAllDonationList = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, donationFilterableFields);
  const paginationOptions = pick(req.query, paginationFiled);
  const result = await DonationService.getAllDonationListFromDB(
    filters,
    paginationOptions
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All Donation List Fetch Successfully",
    meta: result.meta,
    data: result.data,
  });
});
const getDonationById = catchAsync(async (req: Request, res: Response) => {
  const result = await DonationService.getDonationByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Single Donation List Fetch Successfully",
    data: result,
  });
});
const deleteDonationById = catchAsync(async (req: Request, res: Response) => {
  const result = await DonationService.deleteDonationByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Delete Donation  Fetch Successfully",
    data: result,
  });
});
const updateDonationById = catchAsync(async (req: Request, res: Response) => {
  const result = await DonationService.updateDonationByIdIntoDB(
    req.body,
    req.params.id
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Delete Donation  Fetch Successfully",
    data: result,
  });
});

const myDonationList = catchAsync(async (req: Request, res: Response) => {
  const user = (req as JwtPayload).user;
  const paginationOptions = pick(req.query, paginationFiled);
  const result = await DonationService.myDonationListFromDB(
    user.userId,
    paginationOptions
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All Donation List Fetch Successfully",
    data: result,
  });
});
const paymentByStripe = catchAsync(async (req: Request, res: Response) => {
  const result = await DonationService.paymentByStripe(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Payment Intent Fetched",
    data: result,
  });
});
export const DonationController = {
  insertDonation,
  getAllDonationList,
  getDonationById,
  deleteDonationById,
  updateDonationById,
  myDonationList,
  paymentByStripe,
};
