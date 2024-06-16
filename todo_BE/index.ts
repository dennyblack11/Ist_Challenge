import { log } from "console";
import express, { Application, json } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();

const port: number = 4000;

app.use(cors());
app.use(json());

mainApp(app);

const server = app.listen(port, () => {
  console.clear();
  dbConfig();
});

process
  .on("unhandledRejection", (reason: any) => {
    log(reason);
    server.close(() => {
      process.exit(1);
    });
  })
  .on("uncaughtException", (error: Error) => {
    log(error);
    process.exit(1);
  });

