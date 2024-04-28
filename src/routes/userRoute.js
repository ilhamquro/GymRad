import express from 'express';
import userMiddleware from '../middlewares/userMiddleware.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/', userMiddleware.create, userController.create);

const userRoute = router;

export default userRoute;
