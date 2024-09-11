import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputError } from "./modules/middleware";
const router = Router();

/**
 * Product Routes
 */

router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputError,
  (req, res) => {}
);
router.post(
  "/product",
  body("name").isString(),
  handleInputError,
  (req, res) => {}
);
router.delete("/product/:id", () => {});

/**
 * Update Routes
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  //   oneOf([
  //     body("status").equals("IN_PROGRESS"),
  //     body("status").equals("SHIPPED"),
  //     body("status").equals("DEPRECATED"),
  //   ]),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").exists(),
  body("body").exists().isString(),
  body("version").optional(),
  () => {}
);
router.delete("/update/:id", () => {});

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
