import { Request } from "express";
import { IGenericResponse } from "../../../interface/common";
import { AuthService } from "../../../shared/axios";

const singUpWithGoogle = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post(
    "/auth/signin",
    req.body
  );
  return response;
};

export const AuthenticationService = {
  singUpWithGoogle,
};
