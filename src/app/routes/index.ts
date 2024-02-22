import express from "express";
import { AuthenticationRoute } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";
import { AssetsRoute } from "../modules/assets/assets.route";
import { DownloadRoute } from "../modules/download/download.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export const ApplicationRootRoute = router;
