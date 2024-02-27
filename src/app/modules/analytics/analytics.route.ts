import express from "express";

import { AnalyticsController } from "./analytics.controller";
import AuthGuard from "../../middleware/authGuard";
import { ENUM_USER_ROLE } from "../../../enum/user";

const router = express.Router();

router.get(
  "/",
  AuthGuard(ENUM_USER_ROLE.ADMIN),
  AnalyticsController.getAnalytics
);

export const AnalyticsRoute = router;
