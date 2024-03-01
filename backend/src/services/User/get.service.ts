// services/getAllUsers.service.ts

import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";




const getAllUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    confirmPassword: user.confirmPassword
  }));
};

export { getAllUsersService };