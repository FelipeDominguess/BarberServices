import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../erros/AppError"

export const createUserService = async (data: any): Promise<any> => {
    const { email, name, password } = data
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if (findUser) {
        throw new AppError("user already exists", 409)
    }

    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        confirmPassword: data.confirmPassword,
       
    })

    await userRepository.save(user)



    return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
}