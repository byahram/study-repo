const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const productRouter = require("./productRouter");
const cartRouter = require("./cartRouter");

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/cart", cartRouter);

module.exports = router;
