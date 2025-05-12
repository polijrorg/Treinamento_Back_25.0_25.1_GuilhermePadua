import UsersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string
    data: {
    name: string;
    email: string;
    }
}

class UpdateUserService{
    private usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const user = this.usersRepository.getById(data.id);
        if(!user){throw Error('Esse usuário não existe.')}
        
        const userwithEmail = this.usersRepository.findUserbyEmail(data.data.email);
        if(userwithEmail) {throw Error('Já existe um usuário com esse email.')}

        const updatedUser = this.usersRepository.update(data);
        return updatedUser; 
    }
}

export default UpdateUserService;