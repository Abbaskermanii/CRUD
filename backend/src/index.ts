import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        async (req: Request, res: Response, next: Function) => {
          try {
            const controller = new (route.controller as any)();
            const result = await controller[route.action](req, res, next);

            if (result !== null && result !== undefined) {
              res.json(result);
            }
          } catch (error) {
            next(error);
          }
        }
      );
    });

    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
