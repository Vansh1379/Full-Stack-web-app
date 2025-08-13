import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request } from "express";
import { Response } from "express";
import { productValidation } from "../services/inputValidation";

const prisma = new PrismaClient();

export const ProductAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createPayload = req.body;
    const parsePayload = productValidation.safeParse(createPayload);

    if (!parsePayload.success) {
      return res.status(404).json({
        msg: "Invalid Input send by the bitch",
        errors: parsePayload.error.errors,
      });
    }

    const newProduct = await prisma.product.create({
      data: {
        name: createPayload.name,
        description: createPayload.description,
        catageory: createPayload.catageory,
        price: createPayload.price,
        orignalPrice: createPayload.orignalPrice,
        quantity: createPayload.quantity,
        discount: createPayload.discount,
        img: createPayload.img,
      },
    });

    if (newProduct) {
      res.status(200).json({
        msg: "Product has been added",
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "The product have been added to the Database",
    });
    console.error(err);
  }
};

//..........................................................................................................

export const GetAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const getProduct = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      catageory: true,
      price: true,
      orignalPrice: true,
      quantity: true,
      discount: true,
      img: true,
    },
  });

  if (getProduct) {
    res.status(202).json({
      msg: "You have got all the product listed",
      getProduct,
    });
  }
};

//.......................................................................................................

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// ................................................................................................................

export const ProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let productID = Number(req.params.id);

  try {
    const getProductById = await prisma.product.findUnique({
      where: {
        id: productID,
      },
    });

    if (getProductById) {
      res.status(202).json({
        getProductById,
      });
    }
  } catch (error) {
    console.error(`this is the fucking error ${error}`);
  }
};
