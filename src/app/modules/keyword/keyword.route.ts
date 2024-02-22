import express from "express";
import { KeywordController } from "./keyword.controller";

const router = express.Router();
router.get("/getKeywords", KeywordController.getAllKeywordList);
router.get("/getTrendingKeywords", KeywordController.getAllTrendingKeywords);
router.get("/getOneKeyword/:id", KeywordController.getKeywordById);
router.post("/insertKeyword", KeywordController.KeywordInset);

export const KeywordRoute = router;
