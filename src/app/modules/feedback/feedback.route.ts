import express from "express";
import AuthGuard from "../../middleware/authGuard";

import { ENUM_USER_ROLE } from "../../../enum/user";
import { feedbackController } from "./feedback.controller";

const route = express.Router();
// route.get(
//   "/my-feedback-history",
//   //   AuthGuard(ENUM_USER_ROLE.USER),
//   feedbackController.myfeedbackList
// );
route.get("/:id", feedbackController.getFeedbackById);
route.delete("/:id", feedbackController.deleteFeedbackById);
route.patch("/:id", feedbackController.updateFeedbackById);
route.post(
  "/",

  //   AuthGuard(ENUM_USER_ROLE.USER),
  feedbackController.feedbackInsert
);
route.get("/", feedbackController.getAllFeedbackList);

export const feedbackRoute = route;
