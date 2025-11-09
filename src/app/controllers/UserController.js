// biome-ignore assist/source/organizeImports: <explanation>
import { v4 } from 'uuid';
import User from '../models/User.js';
import * as Yup from 'yup';
import bcrypt from 'bcrypt'
class UserController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });
    // console.log('REQUEST', request.body);
try {
  schema.validateSync(request.body,{abortEarly:false, strict:true})
} catch (err) {
  console.log(err)
  return response.status(400).json({error:err.errors})
  
}
    const { name, email, password, admin } = request.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      return response.status(400).json({ message: `Email already taken!` });
    }
const password_hash = await bcrypt.hash(password, 10)
    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });
    return response.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
    });
  }
}

export default new UserController();

/*
  const user = {
      id: v4(),
      name: 'Irineu',
      email: 'irineu.vcnsabenemeu.com',
      password_hash: '123456',
      admin: false,
    };

*/
