import { Request, Response } from "express";
import { getUsers } from "../services/UsersServices";
import { createUser } from "../services/UsersServices";

export class UsersController {
  getUsersHandler = async (req: Request, res: Response) => {
    try {
      const users = await getUsers();
      return users
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ message: "Server Error" });
    }
  };
}
export class registerUser {
  registerHandler = async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);
      return newUser
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server Error" });
    }
  };
}
