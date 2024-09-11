import { Router } from "express";
import { body } from "express-validator";
import { handleInputError } from "./modules/middleware";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "./handlers/product";
import { createUpdate, deleteUpdate, getUpdateById, getUpdates, updateUpdate } from "./handlers/update";
const router = Router();

/**
 * Product Routes
 */

router.get("/product", getProducts);
router.get("/product/:id", getProductById);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputError,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  handleInputError,
  createProduct
);
router.delete("/product/:id", deleteProduct);

/**
 * Update Routes
 */

router.get("/update", getUpdates);
router.get("/update/:id", getUpdateById);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

/**
 * Update Point Routes
 */

router.get("/update-point", () => {});
router.get("/update-point/:id", () => {});
router.put(
  "/update-point/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/update-point",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updatedId").exists().isString(),
  () => {}
);
router.delete("/update-point/:id", () => {});

export default router;
