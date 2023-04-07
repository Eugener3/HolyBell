const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY


module.exports = {
    login: async(req, res) => {
        const candidate = await User.findOne({ email: req.body.email })
        if(candidate) {
            const passwordResult = await bcrypt.compare(req.body.password, candidate.password)

            if(passwordResult == true) {
                const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate._id
                }, SECRET_KEY, {expiresIn: '1h'})

                
                res.status(202).json({token: `Bearer ${token}`})
            }
            else {
                res.status(401).json({message: "Пароль введён неверно"})
            }
        }
        else {
            res.status(404).json({message:  "Пользователя с такой почтой не существует"})
        }

    },
    register: async(req, res) => {
        const candidate = await User.findOne({email: req.body.email})
        if(candidate) {
            res.status(409).json({
                message: "Пользователь с такой почтой уже зарегестрирован"
            })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const password = req.body.password
            const user = new User({
                email: req.body.email,
                password: await bcrypt.hash(password, salt)
            })
            try {
                await user.save()
                res.status(201)
            } catch (error) {
                errorHandler(res, error)
            }

        }
    }
}
