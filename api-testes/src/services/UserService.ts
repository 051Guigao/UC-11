import { User } from '../types/User';

export class UserService {
    private users: User[] = [];
    private currentId = 1;

    createUser(name: string, email: string): User{
        if(name.trim().length < 3){
            throw new Error('Número de caracteres não suficiente');
        }
        if (!name || !email){
            throw new Error('Nome e email são obrigatórios');
        };
        const emailJaExiste = this.users.some((user) => user.email === email);
        if (emailJaExiste){
            throw new Error('Email já cadastrado');
        };
        const newUser: User = {
            id: this.currentId++,
            name,
            email,
        };
        this.users.push(newUser);
        return newUser;
    };
    listUsers(): User[]{
        return this.users;
    };
    findUserById(id: number): User | undefined{
        return this.users.find((user) => user.id === id);
    };
    findUserByEmail(email: string): User | undefined{
        return this.users.find((user) => user.email === email);
    };
};

