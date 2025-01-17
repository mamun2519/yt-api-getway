import { NextFunction, Request, Response } from "express";
import API_Error from "../../error/apiError";
import { StatusCodes } from "http-status-codes";

import { Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelpers } from "../../helper/jwtHalper";
//*Auth Guard
const AuthGuard =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.refreshToken;

      console.log("Token------", token);

      if (!token) {
        throw new API_Error(StatusCodes.UNAUTHORIZED, "You are not authorized");
      }
      //* verified token
      let verifiedUser = null;
      verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret_token as Secret
      );
      req.user = verifiedUser; // role  , userid

      //* role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new API_Error(StatusCodes.FORBIDDEN, "Forbidden");
      }
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

export default AuthGuard;
