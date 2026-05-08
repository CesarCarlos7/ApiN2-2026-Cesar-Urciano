import express from "express";

import ApiController from "../controllers/api.controllers.js";

import verifyId from "../middlewares/verify.id.middlewares.js";

const router = express.Router();

const controller = new ApiController();

router.get("/info", (req, res) =>
  controller.getInfo(req, res)
);

router.get(
  "/info/:id",
  verifyId,
  (req, res, next) =>
    controller.getInfoByParamId(req, res, next)
);

export default router;