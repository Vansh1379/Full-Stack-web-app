import { Router } from "express";
import { loginLogic, signupAuth, UserDetail } from "../controllers/userAuth";
import { AddToCart } from "../controllers/cartApi";

const router = Router();

router.post("/signup", signupAuth);
router.post("/login", loginLogic);
router.post("/cart", AddToCart);
router.get("/:id", UserDetail);

export default router;
