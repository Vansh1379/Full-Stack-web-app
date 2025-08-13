import { Router } from "express";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import cartRouter from "./cartRouter";
import orderRouter from "./orderRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/pro", productRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);

export default router;
