// routes/accommodationRoute.js
import express from "express";
import { index, store, show, destroy } from "../controllers/mostPickedController.js"

const router = express.Router();

router
    .route("/")
    .get(index)
    .post(store);

router
    .route("/:id")
    .get(show)
    .delete(destroy);

export default router;
