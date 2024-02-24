import { StatusCodes } from "http-status-codes";
import API_Error from "../../../error/apiError";
import { IDonation, IDonationFilters } from "./donation.interface";
import { SortOrder, Types } from "mongoose";
import { Donation } from "./donation.model";
import { IPaginationOptions } from "../../../interface/pagination";
import { paginationHelpers } from "../../../helper/paginatinHelper";
import { donationSearchableFields } from "./donation.constant";
import { IResponse } from "../../../interface/common";
import { User } from "../user/user.model";

const insertDonationIntoDB = async (
  data: IDonation,
  userId: string
): Promise<IDonation> => {
  console.log(userId);
  const user = await User.findById(userId);
  console.log(user);
  if (!userId) {
    throw new API_Error(StatusCodes.NOT_FOUND, "User Not Found");
  }
  data.user = userId as any;
  const result = await Donation.create(data);
  return result;
};
const getAllDonationListFromDB = async (
  filters: IDonationFilters,
  pagination: IPaginationOptions
): Promise<IResponse<IDonation[]>> => {
  const { searchTerm, ...filterData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(pagination);
  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: donationSearchableFields.map((filed) => ({
        [filed]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  if (Object.keys(filterData).length) {
    andCondition.push({
      $and: Object.entries(filterData).map(([filed, value]) => ({
        [filed]: value,
      })),
    });
  }
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions = andCondition.length > 0 ? { $and: andCondition } : {};
  const result = await Donation.find(whereConditions)
    .populate("user")
    .skip(skip)
    .limit(limit);

  const total = await Donation.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getDonationByIdFromDB = async (id: string) => {
  const result = await Donation.findById(id);
  return result;
};
const deleteDonationByIdFromDB = async (id: string) => {
  const result = await Donation.deleteOne({ _id: id });
  return result;
};
const updateDonationByIdIntoDB = async (data: IDonation, id: string) => {
  const result = await Donation.updateOne({ _id: id }, data, { new: true });
  return result;
};

const myDonationListFromDB = async (
  userId: string,
  pagination: IPaginationOptions
): Promise<IResponse<IDonation[]>> => {
  if (!userId) {
    throw new API_Error(StatusCodes.NOT_FOUND, "User Not Found");
  }
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(pagination);
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const result = await Donation.find({ user: userId }).skip(skip).limit(limit);
  const total = await Donation.countDocuments({ user: userId });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const DonationService = {
  insertDonationIntoDB,
  getAllDonationListFromDB,
  getDonationByIdFromDB,
  deleteDonationByIdFromDB,
  updateDonationByIdIntoDB,
  myDonationListFromDB,
};