import Users from "../models/UsersModels";

interface ICreateUserDTO{
    id: string;
    name: string;
    email: string;
    cpf: string
}
interface IUpdateUserDTO{
    id: string;
    data: {
        name: string;
        email: string;
    }

}
class UsersRepository{
    private users: Users[] = [];

    constructor(){
        this.users = [];
    }

    public findUserbyCPF(cpf: string): Users | undefined {
        return this.users.find((user: Users) => user.cpf == cpf);
    }
    public findUserbyEmail(email: string): Users | undefined {
        return this.users.find((user: Users) => user.email == email);
    }
    public create(data: ICreateUserDTO): Users{
        const user = new Users({
            ...data,
            created_at: new Date()
        });
        this.users.push(user);
        return user;
    }
    public getAll(): Users[]{
        return this.users;
    }
    public getById(id: string): Users | undefined {
        return this.users.find((user: Users) => user.id == id);
    }
    public update(data: IUpdateUserDTO): Users{
        const index = this.users.findIndex((user: Users) => user.id == data.id);
        return (this.users[index] = {...this.users[index], ...data.data, updated_at: new Date});
    }
}
export default UsersRepository;