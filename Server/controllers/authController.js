const User = require('.././models/userModel')
const bcrypt = require('bcryptjs')

exports.signUp = async (req,res) => {
    const {username,password} = req.body
    const hashpassword = await bcrypt.hash(password,12);
    try {
        const newUser = await User.create({
            username,
            password: hashpassword

        });
        res.status(201).json({
            status: 'success',
            data : {
                user: newUser
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail'
        })
    }
}

exports.login = async (req,res) => {
    const {username, password} = req.body;
    const hashpassword = await bcrypt.hash(password,12);
    try {
        const user = await User.findOne({username})
        if(!user){
            res.status(404).json({
                status : 'fail',
                message: 'user not found'
            })
        }
        const iscorrect = await bcrypt.compare(password,user.password)

        if(iscorrect){
            res.status(200).json({
                status: 'succes'
            })
        }else{
            res.status(400).json({
                status:'fail',
                message: 'incorrect username or password'
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail'
        })
    }
}
