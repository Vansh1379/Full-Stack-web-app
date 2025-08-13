import { Router } from "express";
import {
  deleteProduct,
  GetAllProduct,
  ProductAuth,
  ProductById,
} from "../controllers/productAuth";

const router = Router();

router.post("/add_product", ProductAuth);
router.get("/product", GetAllProduct);
router.get("/product/:id", ProductById);
router.delete("/delete", deleteProduct);

export default router;
