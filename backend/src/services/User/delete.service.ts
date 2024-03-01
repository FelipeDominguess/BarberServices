import { FindOneOptions } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";


const deleteUserService = async (id: number): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const options: FindOneOptions<User> = {
    where: { id },
  };

  const user = await userRepository.findOne(options);
  if (!user) {
    throw new Error("User not found");
  }

  await userRepository.remove(user);
};

export { deleteUserService };