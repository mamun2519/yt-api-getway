import { z } from "zod";

const createDonationZodSchema = z.object({
  body: z.object({
    userEmail: z.string({
      required_error: "user Email is required",
    }),
    transactionId: z.string({
      required_error: "transactionId  is required",
    }),
    paymentMethod: z.string({
      required_error: "paymentMethod  is required",
    }),
    amount: z.number({
      required_error: "number  is required",
    }),
  }),
});

export const DownloadValidation = {
  createDonationZodSchema,
};
