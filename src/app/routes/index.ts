import express from "express";
import { AuthenticationRoute } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";
import { AssetsRoute } from "../modules/assets/assets.route";
import { DownloadRoute } from "../modules/download/download.route";
import { KeywordRoute } from "../modules/keyword/keyword.route";
import { DonationRoute } from "../modules/donation/donation.route";
import { feedbackRoute } from "../modules/feedback/feedback.route";
import { AnalyticsRoute } from "../modules/analytics/analytics.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthenticationRoute,
  },
  {
    path: "/user",
    route: UserRoute,
  },
  {
    path: "/assets",
    route: AssetsRoute,
  },
  {
    path: "/download",
    route: DownloadRoute,
  },
  {
    path: "/keyword",
    route: KeywordRoute,
  },
  {
    path: "/donation",
    route: DonationRoute,
  },
  {
    path: "/feedback",
    route: feedbackRoute,
  },
  {
    path: "/analytics",
    route: AnalyticsRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export const ApplicationRootRoute = router;
