import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { UsersRoutes } from "./routes/users";

class App {
  public app: express.Application;
  public usersRoutes: UsersRoutes = new UsersRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.usersRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }
}

export default new App().app;
