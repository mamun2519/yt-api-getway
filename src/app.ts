import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { ApplicationRootRoute } from "./app/routes";
const app: Application = express();
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51L1nmNCGpaTt0RU81oq26j6Ta7gwb9pGlOOwxjeXAQgefsXMvmRxFUopKE2St6GDbDpxjUug0KxRyqzL6oKarPcR00lqLjh70r"
);
//middleware
app.use([
  cors({
    origin: "http://localhost:5173",
  }),
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: true }),
]);

app.get("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 200,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// application route
app.use("/api/v1", ApplicationRootRoute);
// api test
app.get("/health", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Server Is Run Successfully");
});

// root api
app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send({ success: true, message: "Server is run" });
});
// Global Error Handler
app.use(globalErrorHandler);
// Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(300).json({
    success: false,
    message: "Not Found",
    errorMessages: [{ path: req.originalUrl, message: "API Not Found" }],
  });
  next();
});

export default app;
