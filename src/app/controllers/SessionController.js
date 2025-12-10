import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

class SessionController{
    async store(request,response){
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const isValid = await schema.isValid(request.body, {
            abortEarly:false,
            strict:true,
        })

        const emailOrPaswordIncorrect=() =>{
              return response
            .status(400)
            .json({error:'Email or password incorrect'})
        }
        if(!isValid){
          emailOrPaswordIncorrect()
        }


        const {email,password} = request.body;

        const existingUser = await User.findOne({
         where:{
        email,
       },
    });

    if(!existingUser){
       emailOrPaswordIncorrect()
    }

    const isPasswordCorrect =  await bcrypt.compare(
        password,
        existingUser.password_hash,
    );

    if(!isPasswordCorrect){
         emailOrPaswordIncorrect()
    }
const token = jwt.sign({id:existingUser.id, admin:existingUser.admin},authConfig.secret,{
    expiresIn:authConfig.expiredIn,
    }
)
        return response.status(200).json({
            id:existingUser.id,
            name:existingUser.name,
            email:existingUser.email,
            admin:existingUser.admin,
            token
        
        });
    }
}
export default new SessionController();