import { UsersController, registerUser } from "./controller/UsersController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UsersController,
    action: "getUsersHandler",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: "",
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: registerUser,
    action: "registerHandler",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: "",
    action: "remove",
  },
];
