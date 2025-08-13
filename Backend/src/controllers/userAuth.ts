import { NextFunction, Request } from "express";
import { Response } from "express";
import { loginValidation, signupValidation } from "../services/inputValidation";
import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";
import { sendWelcomeEmail } from "../middlewares/nodemailer";

const prisma = new PrismaClient();

// ...................................................................................................................................
export const signupAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Zod validation
    const createPayload = req.body;
    const parsePayload = signupValidation.safeParse(createPayload);

    if (!parsePayload.success) {
      return res.status(400).json({
        msg: "Invalid input",
        errors: parsePayload.error.errors,
      });
    }

    // Check if user already exists
    const userExist = await prisma.user.findFirst({
      where: { email: createPayload.email },
    });

    if (userExist) {
      return res.status(409).json({
        msg: "User already exists. Please login.",
      });
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name: createPayload.name,
        email: createPayload.email,
        phone_no: createPayload.phone_no,
        address: createPayload.address,
        password: createPayload.password,
        cart: {
          create: {}, // This creates a new cart linked to the user
        },
        orders: {
          create: [], // This prepares the orders relation, but doesn't create any orders yet
        },
      },
      include: {
        cart: true,
        orders: true,
      },
    });

    // Generate JWT
    const token = jwt.sign(
      {
        data: newUser.id,
      },
      "secret",
      { expiresIn: "5h" }
    );

    await sendWelcomeEmail(createPayload.email);

    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        cartId: newUser.cart?.id,
      },
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error in signupAuth controller logic",
    });
    console.error(err);
  }
};

//.......................................................................................................................................................
export const loginLogic = async (
  req: Request,
  res: Response,
  nest: NextFunction
) => {
  try {
    //zod
    const createPayload = req.body;
    const parsePayload = loginValidation.safeParse(createPayload);

    if (!parsePayload.success) {
      return res.status(404).json({
        msg: "Invalid Inout by the user bitch",
        errors: parsePayload.error.errors,
      });
    }

    //checking wheather user exist or not in db
    const userExists = await prisma.user.findFirst({
      where: {
        email: createPayload.email,
        password: createPayload.password,
      },
    });

    if (userExists) {
      const token = jwt.sign(
        {
          data: userExists.id,
        },
        "secret",
        { expiresIn: "5hr" }
      );

      res.status(200).json({
        token,
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "errors in loginAuth login in controller logic",
    });
    console.error(err);
  } finally {
    console.log("User Loged in Successfully");
  }
};

//................................................................................................

export const UserDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.id);

    const userDetails = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true, phone_no: true, address: true },
    });

    if (!userDetails) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      msg: "This is the cartId of the user",
      data: userDetails,
    });
  } catch (error) {
    console.error(`This is the error while hetting user details ${error}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
