import app from "./app";
import config from "./config";

// Main Server
const bootstrap = async () => {
  try {
    app.listen(config.port, () => {
      console.log(
        `API Geteway server Is Run Successfully PORT NO- ${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
