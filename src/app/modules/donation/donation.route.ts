import express from "express";
import AuthGuard from "../../middleware/authGuard";
import { ENUM_USER_ROLE } from "../../../enum/user";
import { DonationController } from "./donation.controller";
import ApiValidationRequest from "../../middleware/RequestValidation";
import { DownloadValidation } from "./donation.validation";

const route = express.Router();

route.get(
  "/my-donation-history",
  AuthGuard(ENUM_USER_ROLE.USER),
  DonationController.myDonationList
);
route.get("/create-payment-intent", DonationController.paymentByStripe);
route.get("/:id", DonationController.getDonationById);
route.delete("/:id", DonationController.deleteDonationById);
route.patch("/:id", DonationController.updateDonationById);
route.post(
  "/",
  ApiValidationRequest(DownloadValidation.createDonationZodSchema),
  AuthGuard(ENUM_USER_ROLE.USER),
  DonationController.insertDonation
);
route.get("/", DonationController.getAllDonationList);

export const DonationRoute = route;
