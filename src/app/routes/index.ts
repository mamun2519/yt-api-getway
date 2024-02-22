import express from "express";
import { AuthenticationRoute } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export const ApplicationRootRoute = router;
