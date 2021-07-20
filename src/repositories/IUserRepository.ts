import { User } from "../entities/User";

export interface IuserRepository{
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}