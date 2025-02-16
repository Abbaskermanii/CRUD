import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

export const getUsers = async () => {
  return await userRepository.find();
};

export const createUser = async (userData: Partial<User>) => {
  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create(userData);
  await userRepository.save(newUser);
  return newUser;
};
