import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynFn";

import config from "../../../config";
import sendResponse from "../../../shared/response";
import { StatusCodes } from "http-status-codes";
import { AuthenticationService } from "./auth.services";

const singInWithGoogle = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthenticationService.singUpWithGoogle(req);
  const { refreshToken, ...others } = result.data;
  console.log(result);
  console.log("RefreshToken", refreshToken);

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", result.data.token.refreshToken, cookieOptions);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User loged in!",
    data: others,
  });
});

export const AuthenticationController = {
  singInWithGoogle,
};
