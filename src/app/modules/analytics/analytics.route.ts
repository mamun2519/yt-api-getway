import express from "express";

import { AnalyticsController } from "./analytics.controller";

const router = express.Router();

router.get("/", AnalyticsController.getAnalytics);

export const AnalyticsRoute = router;
