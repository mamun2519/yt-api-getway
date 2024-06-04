import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from "http";

//* Main Server
const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("database connect");
    const server: Server = app.listen(config.port, () => {
      console.log(
        `API Getaway server Is Run Successfully PORT NO- ${config.port}`
      );
    });
    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.log("Server closed");
          process.exit(1);
        });
      } else {
        process.exit(1);
      }
    };

    const unexpectedErrorHandler = (error: unknown) => {
      console.log(error);
      exitHandler();
    };

    process.on("uncaughtException", unexpectedErrorHandler);
    process.on("unhandledRejection", unexpectedErrorHandler);

    process.on("SIGTERM", () => {
      console.log("SIGTERM received");
      if (server) {
        server.close();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
