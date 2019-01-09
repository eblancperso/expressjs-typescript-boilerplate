import { Request, Response } from "express";
import { User } from "types";

export class UsersRoutes {
  public users: User[] = [
    {
      email: "john@doe.com"
    }
  ];

  public routes(app): void {
    app.route("/users").get((req: Request, res: Response) => {
      res.status(200).send(this.users);
    });
  }
}
