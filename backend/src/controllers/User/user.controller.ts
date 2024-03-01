import { Response, Request } from "express";
import { createUserService } from "../../services/User/create.service";
import { getAllUsersService } from "../../services/User/get.service";
import { deleteUserService } from "../../services/User/delete.service";

const createUserController = async (req: Request, res: Response) => {

    const newUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

const getAllUsersController = async (_req: Request, res: Response) => {
    const users = await getAllUsersService();
  
    return res.status(200).json(users);
  };

  const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    await deleteUserService(Number(id));
  
    return res.status(204).json({ message: "User deleted successfully" });
  };

export { createUserController, getAllUsersController, deleteUserController }