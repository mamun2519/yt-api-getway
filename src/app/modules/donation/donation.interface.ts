import { Model, Types } from "mongoose";

import { IUser } from "../user/user.interface";

export type IDonation = {
  user: Types.ObjectId | IUser;
  userEmail: string;
  transactionId: string;
  paymentMethod: string;
  amount: number;
  status: string;
};

export type IDonationFilters = {
  searchTerm?: string;
  userEmail?: string;
  transactionId?: string;
};

export type donationModel = Model<IDonation>;
