
import { Request, Response } from 'express'
import createUser from './services/CreateUser'


export function hello(request: Request, response: Response) {
    const user = createUser({ 
        name: 'Paulo', 
        email: 'prpaulo@', 
        password: '23',
        techs:['React','Node', {title:'JS',experience:100}],
         
    }
    );

    return response.json({ message: 'EAI' })
}

