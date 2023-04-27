import express from "express";
import { PollService } from "../services/polls.service";
import { verifyToken } from "../middlewares/user";
import { requestPoll } from '../middlewares/poll';

const router = express.Router();

router.get("/", verifyToken, async (req: any, res: any, next: any) => {
  const domain = new PollService();
  const response = await domain.findAll();
  res.status(200).send(response);
});
router.get("/:id", verifyToken, async (req: any, res: any, next: any) => {
  const domain = new PollService();
  const { id } = req.params;
  const response = await domain.findOne(id);
  res.status(200).send(response);
});
router.post("/", verifyToken, requestPoll, async (req: any, res: any, next: any) => {
  const domain = new PollService();
  const response = await domain.create(req.body);
  res.status(200).send(response);
});
router.put("/:id", verifyToken, requestPoll, async (req: any, res: any, next: any) => {
  const domain = new PollService();
  const { id } = req.params;
  const response = await domain.update(id, req.body);
  res.status(200).send(response);
});
router.delete("/:id", verifyToken, async (req: any, res: any, next: any) => {
  const domain = new PollService();
  const { id } = req.params;
  const response = await domain.delete(id);
  res.status(200).send(response);
});

export default router;
