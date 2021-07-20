import { User } from "../../entities/User";
import { EMailProvider } from "../../providers/IMailProvider";
import { IuserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IuserRepository,
    private mailProvider: EMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe Netflix',
        email: 'netflix@gmail.com',
      }, 
      subject: 'Seja bem-vindo á plataforma',
      body: '<p>Teste Solid typeScript</p>'
    });
  }
}
