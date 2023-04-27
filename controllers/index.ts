import express from 'express';
import userController from './user.controller';
import pollController from './poll.controller';

const router = express.Router();


router.use("/user", userController)
router.use("/poll", pollController)

export default router;