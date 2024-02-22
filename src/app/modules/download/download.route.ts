import express from "express";
import AuthGuard from "../../middleware/authGuard";
import { DownloadController } from "./download.controller";
import { ENUM_USER_ROLE } from "../../../enum/user";

const route = express.Router();
route.get(
  "/my-download-history",
  AuthGuard(ENUM_USER_ROLE.USER),
  DownloadController.myDownloadList
);
route.get("/:id", DownloadController.getDownloadById);
route.delete("/:id", DownloadController.deleteDownloadById);
route.patch("/:id", DownloadController.updateDownload);
route.post(
  "/",

  AuthGuard(ENUM_USER_ROLE.USER),
  DownloadController.downloadInsert
);
route.get("/", DownloadController.getAllDownloadList);

export const DownloadRoute = route;
