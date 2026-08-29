import {db} from '../db.js'
import bcrypt from 'bcryptjs'


export const register = (req,res) => {

    //check existing user
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?'

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json('User Already Exits!');

        //Hashed Password created a user
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //after we get input data, we add these data to the DB
        const q = 'INSERT INTO users(`username` ,`email` , `password`) VALUE(?)'
        const values = [
            req.body.username,
            req.body.email,
            hash //req.body.password
        ]

        db.query(q, [values] , (err,data) => {
            if(err)  return res.json(err);
            return res.status(200).json('User has been created.');
        });
    });

}

export const login = (req, res) =>{

}

export const logout = (req,res) => {
    
}