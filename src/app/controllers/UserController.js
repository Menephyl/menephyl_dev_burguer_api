import { v4 } from 'uuid';
import User from '../models/User.js';
class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body;
    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });
    return response.status(201).json(user);
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
