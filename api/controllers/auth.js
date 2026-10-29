
import prisma from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    // 1. Get data from the registration form
    const { username, email, password } = req.body;

    // 2. Check whether this username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email }
        ]
      }
    });

    // 3. Stop if the user already exists
    if (existingUser) {
      return res.status(409).json("User already exists!");
    }

    // 4. Encrypt the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Save the new user in the database
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword
      }
    });

    // 6. Send a success message
    return res.status(201).json("User has been created!");

  } catch (error) {
    // Show the error in the backend terminal
    console.error("Register error:", error);

    return res.status(500).json("Registration failed!");
  }
};


// LOGIN (we will implement this later)
export const login = async (req, res) => {

  try{
    //get data from the login form
  const {email, password} = req.body;

  // fetch user from the database
  const user = await prisma.user.findUnique({
    where: {
      email : email
    }
  });

  // Check email
    if (!user) {
      return res.status(404).json("Email not found!");
    }


  //check password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  
  if(!isPasswordCorrect) {
    res.status(400).json("Wrong password");

    const token = jwt.sign({id: user.id}, "jwtkey");
    const {password, ...other} = user;
    res.cookie("access_token", token, {
      httpOnly:true
    }).status(200).json(other);

  }
 

  }catch(err){
    console.error("Login error:", err);
    return res.status(500).json("Login failed!");
  }
 


};


// LOGOUT (we will implement this later)
export const logout = (req, res) => {
  return res.status(200).json("Logged out!");
};
