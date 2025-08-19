import { Router, Request, Response } from 'express';
import bcrypt from "bcryptjs";
import { generateToken } from '@utils/jws';
import { users, User } from '@models/UserModel';

const router = Router();

const isUniqueUser = (username: string, email: string) => {
      return !users.some( // testar se pelo menos 1 elemento do array satisfaz a condição
            (user) => user.username === username || user.email === user.email,
      );
}

router.post('/register', async (req: Request, res: Response) => {
      const { username, email, password, role} = req.body;

      if (!username || !email || !password || !role ){
            return res.status(400).json({message: 'Campos da requisição faltando'});
      }

      if (!isUniqueUser(username, email)){
            return res.status(400).json({message: 'Usuário ou email já está em uso'})
      }

      // Senha com Hash
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser: User = {
            id: Date.now().toString(),
            username,
            email,
            password: hashPassword,
            role,
            createdAt: new Date(),
      }

      // Simulação de salvar na database
      users.push(newUser)
      res.status(201).json({message: 'Usuário registrado com sucesso!'})
});

router.post('/login', async (req: Request, res: Response) => {
      const { username, password } = req.body;
      const userUnic = users.find((user) => user.username === username);
      if (!userUnic) return res.status(400).json({message: 'Credenciais Inválidas'});

      const isPasswordValid = await bcrypt.compare(password, userUnic.password);
      if(!isPasswordValid) return res.status(400).json({message: 'Credenciais Inválidas'});

      const token = generateToken({
            userId: userUnic.id,
            role: userUnic.role,
      })
      res.json({token});
});

export default router;