import express from "express";
import { AuthenticationController } from "./auth.controller";

const router = express.Router();

router.post("/signin", AuthenticationController.singInWithGoogle);

export const AuthenticationRoute = router;
