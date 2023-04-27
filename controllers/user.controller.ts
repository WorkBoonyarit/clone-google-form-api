import express from "express";
import { UserService } from "../services/user.service";
import { authLogin, validateRequestVerifyToken } from "../middlewares/user";

const router = express.Router();

router.post("/login", authLogin, async (req: any, res: any, next: any) => {
  if (!req.validatedIsPassed.success) {
    res.status(400).send(req.validatedIsPassed);
  } else {
    const domain = new UserService();
    const response = await domain.login(req.body);
    res.status(200).send(response);
  }
});
router.post("/register", authLogin, async (req: any, res: any, next: any) => {
  if (!req.validatedIsPassed.success) {
    res.status(400).send(req.validatedIsPassed);
  } else {
    const domain = new UserService();
    const response = await domain.register(req.body);
    res.status(200).send(response);
  }
});
router.post("/verify-token", validateRequestVerifyToken, async (req: any, res: any, next: any) => {
  if (!req.validatedIsPassed.success) {
    res.status(400).send(req.validatedIsPassed);
  } else {
    const domain = new UserService();
    const response = await domain.verifyToken(req.body);
    res.status(200).send(response);
  }
});

export default router;
