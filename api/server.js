import express from "express";
import dotenv from "dotenv";
import prisma from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/test-db", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json({
      message: "Prisma connected successfully!",
      users,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      message: "Database query failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});