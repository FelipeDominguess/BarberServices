import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController } from "../controllers/User/user.controller";

const userRoutes = Router()
userRoutes.post("", createUserController)
userRoutes.get("",getAllUsersController)
userRoutes.delete("/:id",deleteUserController)
export { userRoutes }