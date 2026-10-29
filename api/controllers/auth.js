
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


// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });


    //check if user exists
    if (!user) {
      return res.status(404).json("Email not found!");
    }
  
    // Compare the provided password with the hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    //check if the password is correct
    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong password");
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: _password, ...userWithoutPassword } = user;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json(userWithoutPassword);

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json("Login failed!");
  }
};



// LOGOUT (we will implement this later)
export const logout = (req, res) => {
  return res.status(200).json("Logged out!");
};
