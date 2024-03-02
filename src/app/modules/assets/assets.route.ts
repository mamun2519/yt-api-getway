import express from "express";
import { AssetController } from "./assets.controller";
import { FileUploadHelper } from "../../../helper/fileUploader";

const router = express.Router();
//api
router.delete("/:id", AssetController.deleteAssetById);
router.patch("/:id", AssetController.updateAssetById);
router.get("/details-user/:id", AssetController.getAssetByIdForUser);
router.get("/details-admin/:id", AssetController.getAssetByIdForAdmin);

router.post(
  "/insert",
  FileUploadHelper.upload.single("file"),
  AssetController.PostAsset
);
router.get("/all-user", AssetController.getAllAssetByUser);
router.get("/all-admin", AssetController.getAllAssetByAdmin);
//routes
export const AssetsRoute = router;
