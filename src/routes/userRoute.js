import express from 'express';
import userMiddleware from '../middlewares/userMiddleware.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/', userMiddleware.create, userController.create);
router.get('/', userController.get);
router.put('/', userController.update);
router.delete('/', userController.remove);

const userRoute = router;

export default userRoute;
