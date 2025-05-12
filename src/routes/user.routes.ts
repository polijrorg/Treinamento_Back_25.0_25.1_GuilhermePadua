import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

import UsersRepository from "../repositories/UsersRepository";
import CreateUserService from "../services/CreateUsers";
import GetUserService from "../services/GetUserService";
import UpdateUserService from "../services/UpdateUsers";

const usersRouter = Router();
export const userRepository = new UsersRepository();

usersRouter.post('/create', (request: Request, response: Response) => {
    try{
        const {name, email, cpf} = request.body;
        if (!name || !email || !cpf){
            return response.status(400).json('Error: Por favor envie todas as informações!')
        } 
        
        const createUser = new CreateUserService(userRepository);
         
        const user = createUser.execute({
            id: uuidv4(),
            name,
            email,
            cpf
        })
        return response.json(user);

    } catch(e: unknown) {
        if (e instanceof Error) {
            return response.status(400).json({error: e.message});
        }
        return response.status(400).json({error: 'Aconteceu um erro!'});
    }
})

usersRouter.get('/getAll', (request: Request, response: Response) => {
 const users = userRepository.getAll();
 return response.json(users);
})

usersRouter.get('/:id', (request: Request, response: Response) => {
    const {id} = request.params;
    const GetUser = new GetUserService(userRepository);

    const user = GetUser.execute({
        id
    })
    return response.json(user);
})

usersRouter.put('/:id', (request: Request, response: Response) => {
    const {id} = request.params;
    const {name, email, cpf} = request.body;

    if( !name || !email || !cpf ){
        return response.status(400).json({error: 'Por favor, envie todas as informações'})
    }
    const UpdateUser = new UpdateUserService(userRepository);

    const update_user = UpdateUser.execute({
        id,
        data: {
        name,
        email,
        },
});
    return response.json(update_user);
})

export default usersRouter