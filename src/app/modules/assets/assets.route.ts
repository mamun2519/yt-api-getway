import express from "express";
import { AssetController } from "./assets.controller";

const router = express.Router();
//api
router.delete("/:id", AssetController.deleteAssetById);
router.patch("/:id", AssetController.updateAssetById);
router.get("/details-user/:id", AssetController.getAssetByIdForUser);
router.get("/details-admin/:id", AssetController.getAssetByIdForAdmin);

router.post("/insert", AssetController.PostAsset);
router.get("/all-user", AssetController.getAllAssetByUser);
router.get("/all-admin", AssetController.getAllAssetByAdmin);

export const AssetsRoute = router;