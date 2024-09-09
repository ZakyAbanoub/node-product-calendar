import { Router } from "express";
import { body, validationResult } from "express-validator";
const router = Router();

/**
 * Product Routes
 */

router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);
  console.log({errors})

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});
router.post("/product", (req, res) => {});
router.delete("/product/:id", () => {});

/**
 * Update Routes
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

/**
 * Update Point Routes
 */

router.get("/update-point", () => {});
router.get("/update-point/:id", () => {});
router.put("/update-point/:id", () => {});
router.post("/update-point", () => {});
router.delete("/update-point/:id", () => {});

export default router;
