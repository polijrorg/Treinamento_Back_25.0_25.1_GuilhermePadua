import UsersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string; 
    name: string;
    email: string;
    cpf: string;
}

class CreateUserService{
    private usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const userwithCPF = this.usersRepository.findUserbyCPF(data.cpf);
        const userwithEmail = this.usersRepository.findUserbyEmail(data.email);

        if (userwithCPF || userwithEmail) { throw Error('Já existe um usuário estes dados.')} 

        const user = this.usersRepository.create(data);
        
        return user; 
    }
}

export default CreateUserService;