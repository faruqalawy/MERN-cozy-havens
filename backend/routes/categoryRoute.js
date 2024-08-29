// routes/accommodationRoute.js
import express from "express";
import {
  index,
  store,
  show,
  destroy,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(index).post(store);

router.get("/:id/items/:itemId", show);
router.delete("/:id", destroy);

export default router;
