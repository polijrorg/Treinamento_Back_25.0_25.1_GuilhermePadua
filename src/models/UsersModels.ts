import { v4 as uuidv4 } from 'uuid';

class Users {
    id: string;
    name: string;
    cpf: string;
    email: string;
    created_at: Date;
    updated_at: Date;

    constructor({
        id,
        name,
        cpf,
        email,    
   }:Omit<Users, 'created-at' | 'updated_at'>){
        this.id = id || uuidv4();
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.created_at = new Date;
        this.updated_at = new Date;
    }
}
export default Users;