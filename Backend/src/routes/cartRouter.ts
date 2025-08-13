import { Router } from "express";
import {
  AddToCart,
  DeleteCartItem,
  GetCartId,
  GetCartItem,
} from "../controllers/cartApi";

const router = Router();

router.post("/add", AddToCart);
router.get("/cartItem/:cartId", GetCartItem);
router.get("/cartid/:userId", GetCartId);
router.delete("/delete/:id", DeleteCartItem);

export default router;
