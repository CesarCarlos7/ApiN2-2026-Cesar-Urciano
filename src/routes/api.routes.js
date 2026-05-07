import Router from "express";

import ApiController from "../controllers/api.controller.js";

import verifyId from "../middlewares/verifyId.middleware.js";

const router = Router();

const controller = new ApiController();

router.get("/info", (req, res) =>
  controller.getInfo(req, res)
);

router.get("/info/:id",
  verifyId,
  (req, res, next) =>
    controller.getInfoByParamId(req, res, next)
);

export default router;