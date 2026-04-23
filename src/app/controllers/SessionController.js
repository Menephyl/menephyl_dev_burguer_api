import * as Yup from 'yup'
import bcrypt from 'bcrypt'
import User from "../models/User.js"
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth.js'
class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        })

        const isValid = await schema.isValid(request.body, {
            abortEarly: false,
            strict: true,
        })
        const emailOrPasswordIncorrect = () => {
            return response
                .status(400)
                .json({
                    error: "Email or password incorrect, try again or call support"
                })
        }
        // if schema is not valid, return error
        if (!isValid) {
            emailOrPasswordIncorrect()
        }
        const { email, password } = request.body

        const existingUser = await User.findOne({
            where: {
                email,
            },
        });

        if (!existingUser) {
            emailOrPasswordIncorrect()
        }


        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password_hash)

        if (!isPasswordCorrect) {
            emailOrPasswordIncorrect()
        }


        const token = jwt.sign({ id: existingUser.id }, authConfig.secret, { expiresIn: authConfig.expiresIn, })

        return response.status(200).json({
            ok: true,
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            admin: existingUser.admin,
            message: "Welcome! Login successfully",
            token,
        })
    }
}

export default new SessionController