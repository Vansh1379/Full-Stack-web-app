import { Router } from "express";
import { orderApi } from "../controllers/OrderApi";

const router = Router();

router.post("/razorpay", orderApi);

export default router;
