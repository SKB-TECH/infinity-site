import bcryptjs from "bcryptjs";
import prisma from "../utils/prisma.js";
import { generateToken } from "../utils/jwt.js";
import { ApiError } from "../utils/errors.js";

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      throw new ApiError(400, "Email, password, and name are required");
    }

    const existingAdmin = await prisma.admin.findUnique({ where: { email } });

    if (existingAdmin) {
      throw new ApiError(400, "Email already exists");
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const token = generateToken(admin.id);

    res.status(201).json({
      message: "Admin registered successfully",
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email and password are required");
    }

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordValid = await bcryptjs.compare(password, admin.password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = generateToken(admin.id);

    res.json({
      message: "Login successful",
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id: req.adminId },
      select: { id: true, email: true, name: true, role: true },
    });

    if (!admin) {
      throw new ApiError(404, "Admin not found");
    }

    res.json(admin);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
