import express from "express";
import { AnalyticsService } from "./analytics.services";

const router = express.Router();

router.get("/", AnalyticsService.getAnalytics);

export const AnalyticsRoute = router;
